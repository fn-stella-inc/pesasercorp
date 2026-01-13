# -- dockerfile for peruvian sales web
# -- multi-stage build for optimized production image

# -- stage 1: dependencies
FROM node:20-alpine AS deps

# -- set working directory
WORKDIR /app

# -- copy package files
COPY package.json package-lock.json* ./

# -- install dependencies
RUN npm ci --only=production

# -- stage 2: builder
FROM node:20-alpine AS builder

# -- set working directory
WORKDIR /app

# -- copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# -- copy source code
COPY . .

# -- build arguments for environment variables
ARG NODE_ENV=production
ARG SITE_URL=https://peruviansales.pe

# -- set environment variables for build
ENV NODE_ENV=${NODE_ENV}
ENV SITE_URL=${SITE_URL}

# -- build the application
RUN npm run build

# -- stage 3: runner
FROM node:20-alpine AS runner

# -- set working directory
WORKDIR /app

# -- create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# -- set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# -- copy built files from builder stage
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

# -- switch to non-root user
USER astro

# -- expose port
EXPOSE 4321

# -- health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4321/ || exit 1

# -- start the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]
