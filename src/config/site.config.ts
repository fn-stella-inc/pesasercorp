// -- archivo de configuración central del sitio web
// -- aquí se puede actualizar toda la información de la empresa

export const siteConfig = {
  // -- información general de la empresa
  empresa: {
    nombre: "PERUVIAN SALES AND SERVICES CORPORATION S.A.C.",
    nombreCorto: "PERUVIAN SALES",
    subtitulo: "AND SERVICES CORP.",
    slogan: "Tu Aliado en Construcción & Tecnología",
    descripcion: "Materiales de construcción, ferretería, equipos informáticos y consultoría TI. Soluciones integrales para tu empresa en San Martín y todo el Perú.",
    ruc: "20612417327",
    tipoContribuyente: "SOCIEDAD ANÓNIMA CERRADA",
    estado: "ACTIVO",
    condicion: "HABIDO",
    fechaInscripcion: "03/04/2024",
    fechaInicioActividades: "01/01/2024",
    emisorElectronicoDesde: "07/08/2024",
  },

  // -- información de contacto
  contacto: {
    telefono: "+51 999 999 999",
    telefonoWhatsapp: "51999999999",
    email: "ventas@peruviansales.pe",
    emailSecundario: "info@peruviansales.pe",
  },

  // -- dirección fiscal
  direccion: {
    calle: "Jr. Huáscar Nro. 253",
    urbanizacion: "Urb. Partido Alto San Martín",
    distrito: "Tarapoto",
    provincia: "San Martín",
    departamento: "San Martín",
    pais: "Perú",
    completa: "Jr. Huáscar Nro. 253, Urb. Partido Alto San Martín, Tarapoto - San Martín",
  },

  // -- redes sociales
  redesSociales: {
    facebook: "https://facebook.com/peruviansales",
    instagram: "https://instagram.com/peruviansales",
    linkedin: "https://linkedin.com/company/peruviansales",
    twitter: "https://twitter.com/peruviansales",
    whatsapp: "https://wa.me/51999999999?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20productos%20y%20servicios.",
  },

  // -- actividades económicas (ciiu)
  actividadesEconomicas: [
    {
      tipo: "Principal",
      codigo: "4663",
      descripcion: "Venta al por mayor de materiales de construcción, artículos de ferretería y equipo y materiales de fontanería y calefacción",
    },
    {
      tipo: "Secundaria 1",
      codigo: "4651",
      descripcion: "Venta al por mayor de ordenadores, equipo periférico y programas de informática",
    },
    {
      tipo: "Secundaria 2",
      codigo: "6202",
      descripcion: "Consultoría de informática y gestión de instalaciones informáticas",
    },
  ],

  // -- estadísticas para mostrar en hero
  estadisticas: [
    { valor: "+500", etiqueta: "Clientes Satisfechos" },
    { valor: "3", etiqueta: "Líneas de Negocio" },
    { valor: "24/7", etiqueta: "Soporte Técnico" },
  ],

  // -- horario de atención
  horario: {
    lunesViernes: "8:00 AM - 6:00 PM",
    sabado: "8:00 AM - 1:00 PM",
    domingo: "Cerrado",
  },

  // -- metadatos seo
  seo: {
    titulo: "PERUVIAN SALES AND SERVICES CORPORATION S.A.C. | Construcción, Ferretería y Tecnología",
    descripcion: "Venta de materiales de construcción, artículos de ferretería, equipos de cómputo y consultoría TI en Tarapoto, San Martín. RUC 20612417327.",
    keywords: "materiales construcción tarapoto, ferretería san martín, equipos cómputo, consultoría ti, peruvian sales",
  },

  // -- navegación principal
  navegacion: [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Productos" },
    { href: "#contacto", label: "Contacto" },
  ],

  // -- servicios principales
  servicios: [
    {
      id: "construccion",
      titulo: "Materiales de Construcción",
      descripcion: "Amplio catálogo de materiales para todo tipo de proyectos: cemento, fierro, ladrillos, agregados, tuberías y acabados de primera calidad.",
      caracteristicas: ["Cemento y concreto", "Fierro y acero", "Ladrillos y bloques", "Agregados"],
      icono: "Building2",
      color: "from-blue-500 to-blue-600",
      colorFondo: "bg-blue-50",
      codigoCiiu: "CIIU 4663",
    },
    {
      id: "ferreteria",
      titulo: "Artículos de Ferretería",
      descripcion: "Herramientas, equipos y materiales de fontanería y calefacción para profesionales y proyectos del hogar.",
      caracteristicas: ["Herramientas manuales", "Herramientas eléctricas", "Fontanería", "Calefacción"],
      icono: "Wrench",
      color: "from-amber-500 to-orange-500",
      colorFondo: "bg-amber-50",
      codigoCiiu: "CIIU 4663",
    },
    {
      id: "tecnologia",
      titulo: "Equipos de Cómputo",
      descripcion: "Venta al por mayor de ordenadores, equipos periféricos y programas de informática para empresas y usuarios.",
      caracteristicas: ["Computadoras", "Laptops", "Periféricos", "Software"],
      icono: "Monitor",
      color: "from-violet-500 to-purple-600",
      colorFondo: "bg-violet-50",
      codigoCiiu: "CIIU 4651",
    },
    {
      id: "consultoria",
      titulo: "Consultoría TI",
      descripcion: "Servicios profesionales de consultoría informática y gestión de instalaciones tecnológicas para optimizar tu negocio.",
      caracteristicas: ["Asesoría tecnológica", "Gestión de sistemas", "Soporte técnico", "Implementaciones"],
      icono: "Globe",
      color: "from-emerald-500 to-teal-600",
      colorFondo: "bg-emerald-50",
      codigoCiiu: "CIIU 6202",
    },
  ],

  // -- categorías de productos
  productos: {
    construccion: [
      { nombre: "Cemento Portland", precio: "Consultar" },
      { nombre: "Fierro de Construcción", precio: "Consultar" },
      { nombre: "Ladrillos King Kong", precio: "Consultar" },
      { nombre: "Arena Fina y Gruesa", precio: "Consultar" },
      { nombre: "Piedra Chancada", precio: "Consultar" },
      { nombre: "Tubería PVC", precio: "Consultar" },
    ],
    ferreteria: [
      { nombre: "Taladros Eléctricos", precio: "Consultar" },
      { nombre: "Sets de Herramientas", precio: "Consultar" },
      { nombre: "Llaves y Dados", precio: "Consultar" },
      { nombre: "Soldadoras", precio: "Consultar" },
      { nombre: "Grifería y Válvulas", precio: "Consultar" },
      { nombre: "Accesorios Eléctricos", precio: "Consultar" },
    ],
    tecnologia: [
      { nombre: "Computadoras de Escritorio", precio: "Consultar" },
      { nombre: "Laptops Empresariales", precio: "Consultar" },
      { nombre: "Impresoras y Multifuncionales", precio: "Consultar" },
      { nombre: "Monitores LED", precio: "Consultar" },
      { nombre: "Accesorios y Periféricos", precio: "Consultar" },
      { nombre: "Software y Licencias", precio: "Consultar" },
    ],
  },
};

// -- exportar configuración por defecto
export default siteConfig;
