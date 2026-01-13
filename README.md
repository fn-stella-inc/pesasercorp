# -- peruvian sales and services corporation s.a.c.

sitio web corporativo desarrollado con astro, react, tailwind css y componentes estilo shadcn/ui.

## -- características

- astro - framework moderno de contenido estático
- react - componentes interactivos (formulario de contacto)
- tailwind css - utilidades css de última generación
- componentes shadcn/ui - ui components elegantes y accesibles
- lucide react - iconos modernos y consistentes
- responsive - diseño adaptable a todos los dispositivos
- animaciones - transiciones suaves y efectos visuales
- tema moderno - diseño profesional con gradientes y glassmorphism
- configuración centralizada - archivo config.ts para fácil actualización

## -- instalación

```bash
# -- instalar dependencias
npm install

# -- iniciar servidor de desarrollo
npm run dev

# -- construir para producción
npm run build

# -- vista previa de producción
npm run preview
```

## -- estructura del proyecto

```
/
├── public/
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── ui/                    # -- componentes shadcn-style
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── icons/                 # -- iconos lucide
│   │   │   └── index.ts
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.tsx        # -- tarjeta de servicio react
│   │   ├── Products.astro
│   │   ├── Contact.astro
│   │   ├── ContactForm.tsx        # -- formulario react interactivo
│   │   └── Footer.astro
│   ├── config/
│   │   └── site.config.ts         # -- configuración centralizada
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts               # -- utilidad cn() para clases
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## -- configuración centralizada

toda la información de la empresa se encuentra en `src/config/site.config.ts`. aquí puedes actualizar:

### -- información de la empresa

- nombre y razón social
- ruc y datos tributarios
- fechas de inscripción
- estado y condición

### -- información de contacto

- teléfono
- whatsapp
- email

### -- dirección

- calle
- urbanización
- distrito, provincia, departamento

### -- redes sociales

- facebook
- instagram
- linkedin
- whatsapp

### -- servicios y productos

- lista de servicios con descripciones
- catálogo de productos por categoría

### -- seo

- título
- descripción
- palabras clave

## -- personalización de colores

edita `tailwind.config.mjs` para cambiar los colores principales:

```js
colors: {
  primary: { ... },
  accent: { ... },
  navy: { ... }
}
```

## -- fuentes

las fuentes se cargan desde google fonts en `global.css`:

- display: poppins
- body: inter

## -- formulario de contacto

el formulario actualmente simula el envío. para conectarlo a un backend real:

1. edita `src/components/ContactForm.tsx`
2. reemplaza la simulación en `handleSubmit` con tu api
3. opciones recomendadas:
   - formspree
   - netlify forms
   - api personalizada

## -- despliegue

### -- vercel

```bash
npm run build
# -- sube la carpeta dist/
```

### -- netlify

```bash
npm run build
# -- sube la carpeta dist/
```

### -- github pages

```bash
npm run build
# -- configura github pages para servir desde dist/
```

## -- datos de la empresa

- razon social: peruvian sales and services corporation s.a.c.
- ruc: 20612417327
- tipo: sociedad anónima cerrada
- estado: activo - habido
- ubicacion: jr. huáscar 253, urb. partido alto, san martín - tarapoto
- actividades:
  - ciiu 4663: venta al por mayor de materiales de construcción y ferretería
  - ciiu 4651: venta al por mayor de equipos informáticos
  - ciiu 6202: consultoría de informática

## -- licencia

este proyecto está desarrollado para peruvian sales and services corporation s.a.c.

---

Desarrollado con ❤️ usando Astro + React + Tailwind CSS
