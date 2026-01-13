# -- peruvian sales and services corporation s.a.c.

corporate website built with astro, react, tailwind css and shadcn/ui style components.

## -- features

- astro - modern static content framework
- react - interactive components (contact form)
- tailwind css - latest generation css utilities
- shadcn/ui components - elegant and accessible ui components
- lucide react - modern and consistent icons
- responsive - adaptable design for all devices
- animations - smooth transitions and visual effects
- modern theme - professional design with gradients and glassmorphism
- centralized configuration - config.ts file for easy updates

## -- installation

```bash
# -- install dependencies
npm install

# -- start development server
npm run dev

# -- build for production
npm run build

# -- preview production build
npm run preview
```

## -- project structure

```
/
├── public/
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── ui/                    # -- shadcn-style components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── icons/                 # -- lucide icons
│   │   │   └── index.ts
│   │   ├── header.astro
│   │   ├── hero.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── service-card.tsx       # -- react service card
│   │   ├── products.astro
│   │   ├── contact.astro
│   │   ├── contact-form.tsx       # -- interactive react form
│   │   └── footer.astro
│   ├── config/
│   │   └── site.config.ts         # -- centralized configuration
│   ├── layouts/
│   │   └── layout.astro
│   ├── lib/
│   │   └── utils.ts               # -- cn() utility for classes
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## -- centralized configuration

all company information is located in `src/config/site.config.ts`. you can update:

### -- company information
- name and business name
- ruc and tax data
- registration dates
- status and condition

### -- contact information
- phone
- whatsapp
- email

### -- address
- street
- neighborhood
- district, province, department

### -- social media
- facebook
- instagram
- linkedin
- whatsapp

### -- services and products
- list of services with descriptions
- product catalog by category

### -- seo
- title
- description
- keywords

## -- color customization

edit `tailwind.config.mjs` to change main colors:

```js
colors: {
  primary: { ... },
  accent: { ... },
  navy: { ... }
}
```

## -- fonts

fonts are loaded from google fonts in `global.css`:
- display: poppins
- body: inter

## -- contact form

the form currently simulates submission. to connect it to a real backend:

1. edit `src/components/contact-form.tsx`
2. replace the simulation in `handleSubmit` with your api
3. recommended options:
   - formspree
   - netlify forms
   - custom api

## -- deployment

### -- vercel
```bash
npm run build
# -- upload dist/ folder
```

### -- netlify
```bash
npm run build
# -- upload dist/ folder
```

### -- github pages
```bash
npm run build
# -- configure github pages to serve from dist/
```

## -- company data

- business name: peruvian sales and services corporation s.a.c.
- ruc: 20612417327
- type: sociedad anonima cerrada
- status: activo - habido
- location: jr. huascar 253, urb. partido alto, san martin - tarapoto
- activities:
  - ciiu 4663: wholesale of construction materials and hardware
  - ciiu 4651: wholesale of computer equipment
  - ciiu 6202: it consulting

## -- license

this project is developed for peruvian sales and services corporation s.a.c.

---

built with astro + react + tailwind css
