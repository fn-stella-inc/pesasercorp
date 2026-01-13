// -- central configuration file for the website
// -- all company information can be updated here

export const siteConfig = {
  // -- general company information
  company: {
    name: "PERUVIAN SALES AND SERVICES CORPORATION S.A.C.",
    shortName: "PERUVIAN SALES",
    subtitle: "AND SERVICES CORP.",
    slogan: "Tu Aliado en Construcción & Tecnología",
    description: "Materiales de construcción, ferretería, equipos informáticos y consultoría TI. Soluciones integrales para tu empresa en San Martín y todo el Perú.",
    ruc: "20612417327",
    taxpayerType: "SOCIEDAD ANÓNIMA CERRADA",
    status: "ACTIVO",
    condition: "HABIDO",
    registrationDate: "03/04/2024",
    startDate: "01/01/2024",
    electronicIssuerSince: "07/08/2024",
  },

  // -- contact information
  contact: {
    phone: "+51 999 999 999",
    whatsappNumber: "51999999999",
    email: "ventas@peruviansales.pe",
    secondaryEmail: "info@peruviansales.pe",
  },

  // -- fiscal address
  address: {
    street: "Jr. Huáscar Nro. 253",
    neighborhood: "Urb. Partido Alto San Martín",
    district: "Tarapoto",
    province: "San Martín",
    department: "San Martín",
    country: "Perú",
    full: "Jr. Huáscar Nro. 253, Urb. Partido Alto San Martín, Tarapoto - San Martín",
  },

  // -- social media links
  socialMedia: {
    facebook: "https://facebook.com/peruviansales",
    instagram: "https://instagram.com/peruviansales",
    linkedin: "https://linkedin.com/company/peruviansales",
    twitter: "https://twitter.com/peruviansales",
    whatsapp: "https://wa.me/51999999999?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20productos%20y%20servicios.",
  },

  // -- economic activities (ciiu)
  economicActivities: [
    {
      type: "Principal",
      code: "4663",
      description: "Venta al por mayor de materiales de construcción, artículos de ferretería y equipo y materiales de fontanería y calefacción",
    },
    {
      type: "Secundaria 1",
      code: "4651",
      description: "Venta al por mayor de ordenadores, equipo periférico y programas de informática",
    },
    {
      type: "Secundaria 2",
      code: "6202",
      description: "Consultoría de informática y gestión de instalaciones informáticas",
    },
  ],

  // -- statistics to display in hero section
  stats: [
    { value: "+500", label: "Clientes Satisfechos" },
    { value: "3", label: "Líneas de Negocio" },
    { value: "24/7", label: "Soporte Técnico" },
  ],

  // -- business hours
  schedule: {
    mondayFriday: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 1:00 PM",
    sunday: "Cerrado",
  },

  // -- seo metadata
  seo: {
    title: "PERUVIAN SALES AND SERVICES CORPORATION S.A.C. | Construcción, Ferretería y Tecnología",
    description: "Venta de materiales de construcción, artículos de ferretería, equipos de cómputo y consultoría TI en Tarapoto, San Martín. RUC 20612417327.",
    keywords: "materiales construcción tarapoto, ferretería san martín, equipos cómputo, consultoría ti, peruvian sales",
  },

  // -- main navigation
  navigation: [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Productos" },
    { href: "#contacto", label: "Contacto" },
  ],

  // -- main services
  services: [
    {
      id: "construction",
      title: "Materiales de Construcción",
      description: "Amplio catálogo de materiales para todo tipo de proyectos: cemento, fierro, ladrillos, agregados, tuberías y acabados de primera calidad.",
      features: ["Cemento y concreto", "Fierro y acero", "Ladrillos y bloques", "Agregados"],
      icon: "Building2",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      ciiuCode: "CIIU 4663",
    },
    {
      id: "hardware",
      title: "Artículos de Ferretería",
      description: "Herramientas, equipos y materiales de fontanería y calefacción para profesionales y proyectos del hogar.",
      features: ["Herramientas manuales", "Herramientas eléctricas", "Fontanería", "Calefacción"],
      icon: "Wrench",
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      ciiuCode: "CIIU 4663",
    },
    {
      id: "technology",
      title: "Equipos de Cómputo",
      description: "Venta al por mayor de ordenadores, equipos periféricos y programas de informática para empresas y usuarios.",
      features: ["Computadoras", "Laptops", "Periféricos", "Software"],
      icon: "Monitor",
      gradient: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      ciiuCode: "CIIU 4651",
    },
    {
      id: "consulting",
      title: "Consultoría TI",
      description: "Servicios profesionales de consultoría informática y gestión de instalaciones tecnológicas para optimizar tu negocio.",
      features: ["Asesoría tecnológica", "Gestión de sistemas", "Soporte técnico", "Implementaciones"],
      icon: "Globe",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      ciiuCode: "CIIU 6202",
    },
  ],

  // -- product categories
  products: {
    construction: [
      { name: "Cemento Portland", price: "Consultar" },
      { name: "Fierro de Construcción", price: "Consultar" },
      { name: "Ladrillos King Kong", price: "Consultar" },
      { name: "Arena Fina y Gruesa", price: "Consultar" },
      { name: "Piedra Chancada", price: "Consultar" },
      { name: "Tubería PVC", price: "Consultar" },
    ],
    hardware: [
      { name: "Taladros Eléctricos", price: "Consultar" },
      { name: "Sets de Herramientas", price: "Consultar" },
      { name: "Llaves y Dados", price: "Consultar" },
      { name: "Soldadoras", price: "Consultar" },
      { name: "Grifería y Válvulas", price: "Consultar" },
      { name: "Accesorios Eléctricos", price: "Consultar" },
    ],
    technology: [
      { name: "Computadoras de Escritorio", price: "Consultar" },
      { name: "Laptops Empresariales", price: "Consultar" },
      { name: "Impresoras y Multifuncionales", price: "Consultar" },
      { name: "Monitores LED", price: "Consultar" },
      { name: "Accesorios y Periféricos", price: "Consultar" },
      { name: "Software y Licencias", price: "Consultar" },
    ],
  },

  // -- product categories for display
  productCategories: [
    {
      title: "Construcción",
      icon: "building",
      key: "construction",
    },
    {
      title: "Ferretería",
      icon: "wrench",
      key: "hardware",
    },
    {
      title: "Tecnología",
      icon: "monitor",
      key: "technology",
    },
  ],
};

// -- export default configuration
export default siteConfig;
