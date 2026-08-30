import type { Locale } from "./locale";

export type SiteContent = ReturnType<typeof getContent>;

const content = {
  en: {
    brand: { name: "Fx Labs", tagline: "A digital presence that answers for itself." },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      benefits: "Benefits",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Get Started",
      tryDemo: "Try Demo",
    },
    hero: {
      headline: "The Future of Local Business with Latest AI Technology",
      description: "Expert AI tech to elevate your business operations and inquiries. Let's take your revenue and digital presence further.",
      getStarted: "Get Started",
      tryDemo: "Try Demo",
      ratingScore: "5.0",
      ratingText: "from 80+ reviews",
      welcome: "Se habla español · We speak Spanish too",
      bento: {
        clientsCount: "100+",
        clientsLabel: "Our Esteemed Clients & Partners",
        projectsCount: "1951+",
        projectsLabel: "Total Inquiries Handled",
        projectsPill: "8% monthly growth",
        yearsCount: "6+",
        yearsLabel: "Years of Dedicated Tech Experience",
        efficiencyTitle: "Achieve Optimal Efficiency and Boost Productivity",
      },
    },
    servicesHeading: "Efficient and Integrated Automation Services",
    servicesSubheading: "Simplify operations with our efficient, quality-focused AI services.",
    bentoServices: [
      {
        id: "website",
        title: "Website Design & Assembly",
        description: "Ultra-fast, conversion-focused websites engineered with modern frameworks for local businesses.",
      },
      {
        id: "bot",
        title: "Custom WhatsApp Bots",
        description: "AI-trained agents answering customer questions, scheduling appointments, and closing sales 24/7.",
      },
      {
        id: "leads",
        title: "Targeted Lead Generation",
        description: "Automated acquisition funnels delivering pre-qualified clients straight to your inbox and WhatsApp.",
      },
      {
        id: "tech",
        title: "Technology & AI Innovation",
        description: "Cutting-edge AI automation models and ongoing innovations custom-fit to your exact workflow.",
      },
      {
        id: "sync",
        title: "Automated CRM & Sync",
        description: "Instant data routing to Google Calendar, CRM, Sheets, and email without manual entry.",
      },
      {
        id: "consulting",
        title: "Strategic Growth Consulting",
        description: "Direct consulting to help local businesses identify bottlenecks and scale their digital footprint.",
      },
    ],
    benefits: {
      heading: "Key Benefits of Our System for Your Business Efficiency",
      subheading: "Our systems boost productivity, cut labor costs, and drive predictable business growth.",
      stats: {
        totalTitle: "Total Projects",
        totalNumber: "1475",
        growth: "14%",
        finished: "Finished",
        finishedVal: "92%",
        inProgress: "In-Progress",
        inProgressVal: "13%",
        reported: "Reported",
        reportedVal: "5%",
        activeLeadsCount: "1951+",
        activeLeadsText: "Increase of 12% this month",
      },
      pillars: [
        {
          title: "Boosting Quality with Tech",
          description: "With advanced AI technology, we help you achieve top-tier customer response quality. Discover how we elevate your service standard.",
        },
        {
          title: "Optimization Production Process",
          description: "Boost business efficiency and customer satisfaction with our bespoke bots and high-speed web infrastructure.",
        },
        {
          title: "AI-Driven Growth",
          description: "Leverage the power of AI to transform your business inquiries, achieving faster replies and more confirmed bookings.",
        },
      ],
    },
    pricing: {
      heading: "Tailored Plans for Your Business Scale",
      subheading: "Straightforward pricing. No hidden fees, no long-term lock-in.",
      starter: {
        name: "Starter",
        desc: "Essential digital presence package for small businesses getting started.",
        price: "$500",
        priceDetail: "one-time",
        features: [
          "High-speed AI-optimized website",
          "Basic WhatsApp instant chat routing",
          "Access to lead notifications",
          "Initial setup guide & support",
        ],
        cta: "Get Started",
      },
      enterprise: {
        name: "Enterprise",
        desc: "Full-scale custom automation and multi-channel lead acquisition.",
        price: "Custom",
        priceDetail: "let's talk",
        features: [
          "Unlimited custom bot interactions",
          "Dedicated automation engineer",
          "Full CRM & payment integrations",
          "Predictive lead optimization",
        ],
        cta: "Get a Quote",
      },
      professional: {
        name: "Professional · The Complete Bundle",
        desc: "Designed for high-growth businesses. Combines Website + WhatsApp AI Bot + Targeted Lead Generation for complete hands-off scaling.",
        price: "$500 setup + $250",
        priceDetail: "/mo",
        badge: "Recommended Option",
        cta: "Get Started",
      },
    },
    integrations: {
      heading: "Empowering Top Companies with Seamless Integrations",
      subheading: "Experience seamless connections with our innovative AI solutions, designed to effortlessly integrate with your existing systems and drive greater success.",
      cta: "Work With Us",
    },
    ctaBanner: {
      heading: "From Idea to Production in Days",
      subheading: "Accelerate your customer acquisition with our technology. Reduce downtime and optimize costs. Get a tailored offer today!",
      cta: "Work With Us",
    },
    about: {
      heading: "About Felix",
      role: "Founder & Automation Specialist",
      bio: "I build AI-powered websites, custom WhatsApp bots, and lead systems for business owners who are too busy delivering great service to spend hours answering repetitive messages. Direct collaboration, zero middleman.",
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
      deliveryFailed: "Your message didn't go through. Please try again, or message Felix directly on WhatsApp.",
      errors: {
        name: "Name is required",
        contact: "A way to reach you is required",
        businessType: "Business type is required",
      },
    },
    footer: {
      tagline: "Our systems make your digital presence faster, smarter, and always online.",
      companyTitle: "Company",
      companyLinks: ["About Us", "Customers", "Newsroom", "Events"],
      servicesTitle: "Services",
      servicesLinks: ["Website Engineering", "WhatsApp Bots", "Lead Generation", "AI Integrations"],
      getInTouchTitle: "Get in Touch",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      copyright: `© ${new Date().getFullYear()} Fx Labs. All rights reserved.`,
    },
    language: "Español",
  },
  es: {
    brand: { name: "Fx Labs", tagline: "Una presencia digital que responde por sí sola." },
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      services: "Servicios",
      benefits: "Beneficios",
      pricing: "Planes",
      contact: "Contacto",
      cta: "Comenzar",
      tryDemo: "Ver Demo",
    },
    hero: {
      headline: "El Futuro de los Negocios Locales con Tecnología IA",
      description: "Tecnología de IA de vanguardia para elevar las operaciones y consultas de tu negocio. Llevemos tus ingresos y presencia digital al siguiente nivel.",
      getStarted: "Comenzar",
      tryDemo: "Ver Demo",
      ratingScore: "5.0",
      ratingText: "de más de 80 reseñas",
      welcome: "We speak English too · También hablamos español",
      bento: {
        clientsCount: "100+",
        clientsLabel: "Nuestros Clientes y Aliados",
        projectsCount: "1951+",
        projectsLabel: "Consultas y Leads Procesados",
        projectsPill: "8% crecimiento mensual",
        yearsCount: "6+",
        yearsLabel: "Años de Experiencia en Automatización",
        efficiencyTitle: "Alcanza la Máxima Eficiencia y Productividad",
      },
    },
    servicesHeading: "Servicios de Automatización Eficientes e Integrados",
    servicesSubheading: "Simplifica tus operaciones con nuestros servicios de IA enfocados en la calidad y conversión.",
    bentoServices: [
      {
        id: "website",
        title: "Diseño y Creación Web",
        description: "Sitios web ultra veloces y optimizados para convertir visitantes en clientes locales.",
      },
      {
        id: "bot",
        title: "Bots Personalizados de WhatsApp",
        description: "Agentes entrenados con IA que responden preguntas, agendan citas y cierran ventas 24/7.",
      },
      {
        id: "leads",
        title: "Generación de Leads Calificados",
        description: "Embudos de adquisición automatizados que envían clientes listos para comprar a tu WhatsApp.",
      },
      {
        id: "tech",
        title: "Tecnología e Innovación IA",
        description: "Modelos avanzados de IA y automatizaciones a medida para tu flujo de trabajo.",
      },
      {
        id: "sync",
        title: "Sincronización de CRM y Calendario",
        description: "Enrutamiento automático de datos a Google Calendar, CRM, Sheets y correo sin trabajo manual.",
      },
      {
        id: "consulting",
        title: "Consultoría Estratégica de Crecimiento",
        description: "Asesoría directa para identificar cuellos de botella y escalar tu presencia digital.",
      },
    ],
    benefits: {
      heading: "Beneficios Clave de Nuestro Sistema para tu Negocio",
      subheading: "Nuestros sistemas aumentan la productividad, reducen costos y generan crecimiento predecible.",
      stats: {
        totalTitle: "Total Proyectos",
        totalNumber: "1475",
        growth: "14%",
        finished: "Completados",
        finishedVal: "92%",
        inProgress: "En Proceso",
        inProgressVal: "13%",
        reported: "Reportados",
        reportedVal: "5%",
        activeLeadsCount: "1951+",
        activeLeadsText: "Aumento del 12% este mes",
      },
      pillars: [
        {
          title: "Impulso de Calidad con Tecnología",
          description: "Con tecnología avanzada de IA te ayudamos a brindar una atención al cliente de primer nivel al instante.",
        },
        {
          title: "Optimización de Procesos",
          description: "Aumenta la eficiencia y satisfacción de tus clientes con bots a la medida e infraestructura web rápida.",
        },
        {
          title: "Crecimiento Impulsado por IA",
          description: "Aprovecha el poder de la IA para transformar tus consultas en citas y ventas confirmadas en automático.",
        },
      ],
    },
    pricing: {
      heading: "Planes a la Medida de Tu Negocio",
      subheading: "Precios claros. Sin costos ocultos ni contratos forzosos.",
      starter: {
        name: "Starter",
        desc: "Paquete esencial de presencia digital para negocios que inician.",
        price: "$500",
        priceDetail: "pago único",
        features: [
          "Sitio web optimizado de alta velocidad",
          "Enrutamiento directo a WhatsApp",
          "Notificaciones inmediatas de prospectos",
          "Guía y soporte de configuración inicial",
        ],
        cta: "Comenzar",
      },
      enterprise: {
        name: "Enterprise",
        desc: "Automatización completa a gran escala y adquisición multicanal.",
        price: "Personalizado",
        priceDetail: "hablemos",
        features: [
          "Interacciones ilimitadas con bot de IA",
          "Ingeniero de automatización dedicado",
          "Integración completa con CRM y pagos",
          "Optimización predictiva de leads",
        ],
        cta: "Cotizar",
      },
      professional: {
        name: "Professional · El Paquete Completo",
        desc: "Diseñado para negocios en crecimiento. Combina Sitio Web + Bot de WhatsApp + Generación de Leads para escalar sin esfuerzo.",
        price: "$500 instalación + $250",
        priceDetail: "/mes",
        badge: "Opción Recomendada",
        cta: "Comenzar",
      },
    },
    integrations: {
      heading: "Potenciando Negocios con Integraciones Fluidas",
      subheading: "Conecta sin esfuerzo tus sistemas actuales con nuestras soluciones de IA para aumentar la productividad y el éxito de tu negocio.",
      cta: "Trabaja con Nosotros",
    },
    ctaBanner: {
      heading: "De la Idea a la Producción en Días",
      subheading: "Acelera la adquisición de clientes con nuestra tecnología. Reduce tiempos muertos y optimiza costos.",
      cta: "Trabaja con Nosotros",
    },
    about: {
      heading: "Sobre Felix",
      role: "Fundador y Especialista en Automatización",
      bio: "Creo sitios web con IA, bots de WhatsApp y sistemas de captación para dueños de negocios que están demasiado ocupados como para pasar horas respondiendo mensajes repetitivos. Trato directo, sin intermediarios.",
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
      deliveryFailed: "Tu mensaje no se pudo enviar. Inténtalo de nuevo o escríbele a Felix directo por WhatsApp.",
      errors: {
        name: "El nombre es obligatorio",
        contact: "Necesitamos una forma de contactarte",
        businessType: "El tipo de negocio es obligatorio",
      },
    },
    footer: {
      tagline: "Nuestros sistemas hacen que tu presencia digital sea más rápida, inteligente y siempre activa.",
      companyTitle: "Empresa",
      companyLinks: ["Sobre Mí", "Clientes", "Noticias", "Eventos"],
      servicesTitle: "Servicios",
      servicesLinks: ["Ingeniería Web", "Bots de WhatsApp", "Generación de Leads", "Integraciones IA"],
      getInTouchTitle: "Contacto",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      copyright: `© ${new Date().getFullYear()} Fx Labs. Todos los derechos reservados.`,
    },
    language: "English",
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}

export const brand = content.en.brand;
export const spanishWelcome = content.en.hero.welcome;
export const about = { name: "Felix", bio: content.en.about.bio };

export const whatsappHref = "https://wa.me/16197452934";


