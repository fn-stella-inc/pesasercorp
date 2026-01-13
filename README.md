# PERUVIAN SALES AND SERVICES CORPORATION S.A.C.

Sitio web corporativo desarrollado con Astro, React, Tailwind CSS y componentes estilo shadcn/ui.

## 🚀 Características

- ⚡ **Astro** - Framework moderno de contenido estático
- ⚛️ **React** - Componentes interactivos (formulario de contacto)
- 🎨 **Tailwind CSS** - Utilidades CSS de última generación
- 🧩 **Componentes shadcn/ui** - UI components elegantes y accesibles
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎭 **Animaciones** - Transiciones suaves y efectos visuales
- 🌙 **Tema moderno** - Diseño profesional con gradientes y glassmorphism

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn-style
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Products.astro
│   │   ├── Contact.astro
│   │   ├── ContactForm.tsx  # Formulario React interactivo
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts         # Utilidad cn() para clases
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.mjs` para cambiar los colores principales:

```js
colors: {
  primary: { ... },
  accent: { ... },
  navy: { ... }
}
```

### Fuentes

Las fuentes se cargan desde Google Fonts en `global.css`:
- **Display**: Poppins
- **Body**: Inter

### Información de Contacto

Actualiza la información en:
- `Contact.astro` - Dirección, teléfono, email
- `Footer.astro` - Información del pie de página
- `Hero.astro` - RUC y estadísticas

## 📧 Formulario de Contacto

El formulario actualmente simula el envío. Para conectarlo a un backend real:

1. Edita `ContactForm.tsx`
2. Reemplaza la simulación en `handleSubmit` con tu API
3. Opciones recomendadas:
   - Formspree
   - Netlify Forms
   - API personalizada

## 🚀 Despliegue

### Vercel
```bash
npm run build
# Sube la carpeta dist/
```

### Netlify
```bash
npm run build
# Sube la carpeta dist/
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde dist/
```

## 📄 Datos de la Empresa

- **Razón Social**: PERUVIAN SALES AND SERVICES CORPORATION S.A.C.
- **RUC**: 20612417327
- **Tipo**: Sociedad Anónima Cerrada
- **Estado**: ACTIVO - HABIDO
- **Ubicación**: Jr. Huáscar 253, Urb. Partido Alto, San Martín - Tarapoto
- **Actividades**:
  - CIIU 4663: Venta al por mayor de materiales de construcción y ferretería
  - CIIU 4651: Venta al por mayor de equipos informáticos
  - CIIU 6202: Consultoría de informática

## 📝 Licencia

Este proyecto está desarrollado para PERUVIAN SALES AND SERVICES CORPORATION S.A.C.

---

Desarrollado con ❤️ usando Astro + React + Tailwind CSS
