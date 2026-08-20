import type { Locale } from "./locale";

export type SiteContent = ReturnType<typeof getContent>;

const content = {
  en: {
    brand: { name: "Fx Labs", tagline: "A digital presence that answers for itself." },
    nav: {
      home: "Home",
      services: "Services",
      results: "Results",
      process: "How It Works",
      about: "About",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      headline: "A digital presence that answers for itself.",
      description: "Custom AI-built websites and WhatsApp bots for local businesses that don't have time to manage inquiries or lost leads.",
      cta: "Let's Talk on WhatsApp",
      secondaryCta: "See How It Works",
      welcome: "Se habla español · We speak Spanish too",
    },
    statsHeading: "Impact by the Numbers",
    stats: [
      { figure: "< 30s", label: "Average Response Time", detail: "Instant replies 24/7 so you never lose a customer to delay." },
      { figure: "3x", label: "More Booked Leads", detail: "Combined site + bot funnel drives higher appointment rates." },
      { figure: "100%", label: "Hands-Off Automation", detail: "Built and managed for you with zero daily maintenance." },
    ],
    servicesHeading: "Services & Pricing",
    servicesSubheading: "Transparent, simple pricing. Buy services individually or bundle for maximum impact.",
    services: {
      website: { name: "Website Service", label: "Website", blurb: "A ultra-fast, high-converting site built with custom design so your local customers actually find and trust you.", price: "From $500", priceDetail: "one-time" },
      bot: { name: "WhatsApp Bot Service", label: "WhatsApp Bot", blurb: "Answers customer questions, handles FAQs, books appointments, and captures leads 24/7 directly on WhatsApp.", price: "From $300", priceDetail: "/mo" },
      bundle: { name: "The Complete Bundle", label: "Website + WhatsApp Bot", blurb: "Your complete digital presence. The website attracts leads and seamlessly hands them off to your 24/7 AI WhatsApp bot.", price: "$500 setup + $250", priceDetail: "/mo", badge: "Most Popular · Best Value" },
    },
    resultsHeading: "Illustrative Results",
    resultsSubheading: "What a tailored digital presence achieves for local service businesses.",
    examples: [
      { id: "bot", label: "Illustrative Example", business: "Auto Repair Shop", metric: "4 hrs → 30 secs", metricDetail: "Customer response time on quotes" },
      { id: "website", label: "Illustrative Example", business: "Family Restaurant", metric: "+65% Inquiries", metricDetail: "Monthly table reservation requests" },
      { id: "bundle", label: "Illustrative Example", business: "Used Car Dealership", metric: "3x Test Drives", metricDetail: "More booked appointments via site + bot" },
    ],
    processHeading: "How It Works",
    processSubheading: "Three simple steps to an automated, high-converting digital presence.",
    processSteps: [
      {
        number: "01",
        title: "We Talk",
        description: "We map out your business services, target customers, and common questions during a short 20-minute alignment call.",
      },
      {
        number: "02",
        title: "I Build & Train",
        description: "I construct your modern site and train your custom WhatsApp AI bot specifically on your business services and booking logic.",
      },
      {
        number: "03",
        title: "You Get Booked",
        description: "Your site and bot go live. Inquiries are answered instantly, leads are captured, and appointments book on autopilot.",
      },
    ],
    about: {
      heading: "About Felix",
      role: "Founder & Automation Engineer",
      bio: "I build AI-powered websites and automated bots for business owners who are too busy delivering great service to spend hours answering repetitive messages or updating websites. My mission is to give your business a modern digital presence that works tirelessly so you don't have to.",
    },
    contact: {
      heading: "Let's Build Your Digital Presence",
      subheading: "Ready to automate your inquiries and turn site traffic into booked clients? Send a message below or chat directly on WhatsApp.",
      welcome: "Se habla español · We speak Spanish too",
      name: "Name",
      contact: "Phone, WhatsApp, or email",
      businessType: "Business type",
      options: ["Restaurant", "Shop", "Contractor", "Other"],
      message: "Message (optional)",
      send: "Send",
      sending: "Sending...",
      success: "Thanks — I'll get back to you soon.",
      errors: {
        name: "Name is required",
        contact: "A way to reach you is required",
        businessType: "Business type is required",
      },
    },
    language: "Español",
  },
  es: {
    brand: { name: "Fx Labs", tagline: "Una presencia digital que responde por sí sola." },
    nav: {
      home: "Inicio",
      services: "Servicios",
      results: "Resultados",
      process: "Cómo Funciona",
      about: "Sobre Mí",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      headline: "Una presencia digital que responde por sí sola.",
      description: "Sitios web creados con IA y bots de WhatsApp personalizados para negocios locales que no tienen tiempo para responder consultas o perder clientes.",
      cta: "Hablemos por WhatsApp",
      secondaryCta: "Ver Cómo Funciona",
      welcome: "We speak English too · También hablamos español",
    },
    statsHeading: "Impacto en Números",
    stats: [
      { figure: "< 30s", label: "Tiempo Medio de Respuesta", detail: "Respuestas instantáneas 24/7 para nunca perder un cliente." },
      { figure: "3x", label: "Más Citas Agendadas", detail: "Embudo combinado de sitio web + bot que aumenta las conversiones." },
      { figure: "100%", label: "Automatización Total", detail: "Creado y gestionado para ti, sin mantenimiento diario requerido." },
    ],
    servicesHeading: "Servicios y Precios",
    servicesSubheading: "Precios transparentes. Compra los servicios por separado o en paquete para mayor impacto.",
    services: {
      website: { name: "Servicio de Sitio Web", label: "Sitio Web", blurb: "Un sitio web ultra rápido y de alta conversión con diseño personalizado para que tus clientes locales te encuentren y confíen en ti.", price: "Desde $500", priceDetail: "pago único" },
      bot: { name: "Servicio de Bot de WhatsApp", label: "Bot de WhatsApp", blurb: "Responde preguntas de clientes, atiende FAQs, agenda citas y captura prospectos las 24 horas directamente en WhatsApp.", price: "Desde $300", priceDetail: "/mes" },
      bundle: { name: "El Paquete Completo", label: "Sitio Web + Bot de WhatsApp", blurb: "Tu presencia digital integral. El sitio atrae clientes y los transfiere fluidamente a tu bot de WhatsApp con IA 24/7.", price: "$500 instalación + $250", priceDetail: "/mes", badge: "Más Popular · Mayor Valor" },
    },
    resultsHeading: "Resultados Ilustrativos",
    resultsSubheading: "Lo que logra una presencia digital a la medida para negocios locales de servicios.",
    examples: [
      { id: "bot", label: "Ejemplo Ilustrativo", business: "Taller Mecánico", metric: "4 hrs → 30 segs", metricDetail: "Tiempo de respuesta a cotizaciones de clientes" },
      { id: "website", label: "Ejemplo Ilustrativo", business: "Restaurante Familiar", metric: "+65% Consultas", metricDetail: "Solicitudes de reservas mensuales vía web" },
      { id: "bundle", label: "Ejemplo Ilustrativo", business: "Lote de Autos Usados", metric: "3x Pruebas de Manejo", metricDetail: "Más citas agendadas combinando sitio + bot" },
    ],
    processHeading: "Cómo Funciona",
    processSubheading: "Tres pasos sencillos para tener una presencia digital automatizada y de alta conversión.",
    processSteps: [
      {
        number: "01",
        title: "Hablamos",
        description: "Definimos tus servicios, clientes objetivo y preguntas frecuentes en una breve llamada de alineación de 20 minutos.",
      },
      {
        number: "02",
        title: "Construyo y Entreno",
        description: "Diseño tu sitio moderno y entreno tu bot de IA de WhatsApp específicamente con la información de tu negocio.",
      },
      {
        number: "03",
        title: "Recibes Clientes",
        description: "Tu sitio y bot se activan. Las preguntas se responden al instante, se capturan prospectos y se agendan citas en piloto automático.",
      },
    ],
    about: {
      heading: "Sobre Felix",
      role: "Fundador e Ingeniero de Automatización",
      bio: "Creo sitios web con IA y bots automatizados para dueños de negocios que están demasiado ocupados ofreciendo un gran servicio como para pasar horas respondiendo mensajes repetitivos. Mi misión es darle a tu negocio una presencia digital moderna que trabaje incansablemente por ti.",
    },
    contact: {
      heading: "Construyamos Tu Presencia Digital",
      subheading: "¿Listo para automatizar tus consultas y convertir visitas en clientes? Envía un mensaje abajo o chatea directo por WhatsApp.",
      welcome: "We speak English too · También hablamos español",
      name: "Nombre",
      contact: "Teléfono, WhatsApp o correo",
      businessType: "Tipo de negocio",
      options: ["Restaurante", "Tienda", "Contratista", "Otro"],
      message: "Mensaje (opcional)",
      send: "Enviar",
      sending: "Enviando...",
      success: "Gracias, te responderé pronto.",
      errors: {
        name: "El nombre es obligatorio",
        contact: "Necesitamos una forma de contactarte",
        businessType: "El tipo de negocio es obligatorio",
      },
    },
    language: "English",
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}

export const brand = content.en.brand;
export const spanishWelcome = content.en.hero.welcome;
export const services = content.en.services;
export const examples = content.en.examples;
export const about = { name: "Felix", bio: content.en.about.bio };

export const whatsappHref = "https://wa.me/16197452934";

