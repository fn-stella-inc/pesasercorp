// -- componente de formulario de contacto con iconos lucide
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // -- simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // -- resetear después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        servicio: "",
        mensaje: "",
      });
    }, 3000);
  };

  // -- estado de éxito
  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 text-center border border-green-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-green-600">
          Nos pondremos en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre completo *
          </label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo electrónico *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Teléfono
          </label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+51 999 999 999"
          />
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Empresa
          </label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="servicio"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Servicio de interés *
        </label>
        <select
          id="servicio"
          name="servicio"
          required
          value={formData.servicio}
          onChange={handleChange}
          className="flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Selecciona una opción</option>
          <option value="construccion">Materiales de Construcción</option>
          <option value="ferreteria">Artículos de Ferretería</option>
          <option value="tecnologia">Equipos de Cómputo</option>
          <option value="consultoria">Consultoría TI</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Mensaje *
        </label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
          className="min-h-[150px]"
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Enviar Mensaje
            <Send className="w-5 h-5" />
          </span>
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
