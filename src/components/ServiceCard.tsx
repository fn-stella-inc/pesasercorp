// -- componente de tarjeta de servicio con iconos lucide
import React from 'react';
import { Building2, Wrench, Monitor, Globe, ArrowRight } from 'lucide-react';

// -- mapa de iconos
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Wrench,
  Monitor,
  Globe,
};

interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  icono: string;
  color: string;
  colorFondo: string;
  codigoCiiu: string;
}

interface ServiceCardProps {
  servicio: Servicio;
}

export default function ServiceCard({ servicio }: ServiceCardProps) {
  const IconComponent = iconMap[servicio.icono] || Building2;
  
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 relative overflow-hidden">
      {/* gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* content */}
      <div className="relative z-10">
        {/* icon */}
        <div className={`w-16 h-16 ${servicio.colorFondo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`w-8 h-8 bg-gradient-to-br ${servicio.color} text-transparent bg-clip-text`} />
        </div>
        
        {/* title y code */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
            {servicio.titulo}
          </h3>
          <span className="text-xs font-mono bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
            {servicio.codigoCiiu}
          </span>
        </div>
        
        {/* description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {servicio.descripcion}
        </p>
        
        {/* features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {servicio.caracteristicas.map((caracteristica, index) => (
            <span key={index} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {caracteristica}
            </span>
          ))}
        </div>
        
        {/* cta */}
        <a 
          href="#contacto" 
          className={`inline-flex items-center font-semibold bg-gradient-to-r ${servicio.color} bg-clip-text text-transparent group-hover:gap-3 gap-2 transition-all`}
        >
          Solicitar información
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-gray-600" />
        </a>
      </div>
    </div>
  );
}
