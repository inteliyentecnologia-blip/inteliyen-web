export interface Module {
  emoji: string;
  title: string;
  objective: string;
  topics: string[];
  error?: string | null;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  emoji: string;
  level: string;
  duration: string;
  status: 'available' | 'coming-soon';
  price: string;
  color: {
    from: string;
    to: string;
  };
  modules?: Module[];
}

export const courses: Course[] = [
  {
    id: 'ia-productividad',
    title: 'IA Asistentes y Productividad',
    description: 'Domina ChatGPT, Claude, Gemini y Notion AI para automatizar tareas, redactar documentos complejos y organizar el flujo de trabajo de tu empresa.',
    emoji: '🤖',
    level: 'Corporativo y Personal',
    duration: '4 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#61DAFB', to: '#00D8FF' },
    modules: [
      {
        emoji: "🧠", title: "Módulo 1: Ingeniería de Prompts Profesionales", objective: "Aprender a hablarle a la IA para obtener resultados precisos y no genéricos.", topics: ["Modelos top: ChatGPT (OpenAI) vs Claude (Anthropic) vs Gemini.", "Estructura de un prompt perfecto (Contexto, Tarea, Formato, Tono).", "Razonamiento y análisis de documentos largos con Claude."], error: "Error Común: Dar instrucciones ambiguas y frustrarse con respuestas genéricas."
      },
      {
        emoji: "💼", title: "Módulo 2: Ecosistema Empresarial", objective: "Integrar IA en las herramientas que ya usas todos los días.", topics: ["Copilot (Microsoft): Integración en Word, Excel y Teams.", "Google Workspace: Gemini dentro de Docs y Gmail.", "Notion AI: Redacción, resumen y organización de bases de datos."],
      },
      {
        emoji: "🔍", title: "Módulo 3: Research y Búsqueda Avanzada", objective: "Dejar de buscar en Google y empezar a obtener respuestas citadas.", topics: ["Perplexity AI: Motor de búsqueda con respuestas en tiempo real.", "NotebookLM (Google): Carga tus documentos, PDFs y extrae insights.", "Consensus: Búsqueda de papers y documentos científicos."]
      }
    ]
  },
  {
    id: 'ia-multimedia',
    title: 'IA Multimedia y Diseño',
    description: 'Generación de imágenes, audio y video de nivel profesional usando Midjourney, DALL·E 3, Runway y ElevenLabs.',
    emoji: '🎨',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#F7DF1E', to: '#F0DB4F' },
    modules: [
      {
        emoji: "🖼️", title: "Módulo 1: Generación de Imágenes", objective: "Crear arte, logos y fotografías hiperrealistas sin saber diseñar.", topics: ["Midjourney: Prompting avanzado para diseño de alta calidad.", "DALL·E 3: Ilustraciones precisas e integradas en ChatGPT.", "Ideogram / Flux: Texto perfecto dentro de imágenes y logos."], error: "Error Común: Generar imágenes con rostros deformes o texto mal escrito."
      },
      {
        emoji: "🎥", title: "Módulo 2: Video y Animación", objective: "Producir clips de video cinematográficos a partir de texto o fotos.", topics: ["Runway / Sora: Generación y edición de video con IA.", "Flujos de trabajo para comerciales cortos y redes sociales.", "Control de cámara y movimiento de personajes."],
      },
      {
        emoji: "🎙️", title: "Módulo 3: Audio y Clonación de Voz", objective: "Sintetizar voces humanas y crear música original.", topics: ["ElevenLabs: Síntesis de voz hiperrealista y clonación.", "Suno / Udio: Generación de canciones completas desde texto.", "Whisper (OpenAI): Transcripción perfecta de reuniones y videos."]
      }
    ]
  },
  {
    id: 'ia-desarrollo',
    title: 'Desarrollo de Software con IA',
    description: 'Acelera tu escritura de código y refactorización utilizando Cursor, GitHub Copilot y agentes de terminal como Devin.',
    emoji: '💻',
    level: 'Corporativo y Personal',
    duration: '6 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#FF6B6B', to: '#FF8E53' },
    modules: [
      {
        emoji: "⚡", title: "Módulo 1: Entornos de Desarrollo con IA", objective: "Configurar el IDE del futuro.", topics: ["Cursor: El IDE con IA nativa para refactorizar proyectos enteros.", "GitHub Copilot: Autocompletado inteligente en tiempo real.", "v0 (Vercel): Generación de interfaces UI/Tailwind desde texto."]
      },
      {
        emoji: "🛠️", title: "Módulo 2: Agentes Autónomos", objective: "Dejar que la IA resuelva bugs y construya arquitecturas.", topics: ["Claude Code: Agente de terminal para tareas de ingeniería complejas.", "Devin / Bolt: Asistentes autónomos para despliegue de apps.", "Revisión de código y pruebas automatizadas con IA."], error: "Error Común: Confiar ciegamente en el código generado sin auditar la seguridad."
      }
    ]
  },
  {
    id: 'ia-generativa-empresas',
    title: 'IA Generativa para Empresas',
    description: 'Domina ChatGPT, Claude y Gemini para optimizar operaciones empresariales, desde la automatización de contenidos hasta la creación de asistentes propios.',
    emoji: '🏢',
    level: 'Empresarial',
    duration: '6 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#8A2BE2', to: '#00CED1' },
    modules: [
      {
        emoji: "🤖", title: "Módulo 1: Automatización de Operaciones", objective: "Utilizar IA como el motor operativo de tu negocio.", topics: ["Automatización de minutas y tareas post-reunión.", "Análisis rápido de CSVs con Advanced Data Analysis de ChatGPT.", "Implementación en el flujo de trabajo diario del equipo."], error: "Error Común: Crear procesos demasiado complejos que el equipo no usa."
      },
      {
        emoji: "✍️", title: "Módulo 3: Automatización de Contenidos", objective: "Crear correos, reportes y copy en segundos.", topics: ["Integración de Google Gemini en Google Workspace (Docs, Gmail).", "Creación de plantillas de correo automatizadas.", "Redacción de propuestas comerciales persuasivas."], error: "Error Común: Copiar y pegar sin darle el 'tono de voz' de la empresa."
      },
      {
        emoji: "⚙️", title: "Módulo 4: Creación de Asistentes Propios", objective: "Construir un GPT personalizado para tu empresa.", topics: ["Cómo crear un GPT (Custom GPT) entrenado con tus propios PDFs.", "Privacidad de datos: Qué subir y qué no subir a la IA.", "Flujos de trabajo avanzados con asistentes específicos."]
      }
    ]
  },
  {
    id: 'ia-marketing-ventas',
    title: 'IA para Marketing y Ventas',
    description: 'Utiliza ChatGPT, Midjourney y HubSpot AI para crear campañas impactantes, generar leads cualificados y optimizar la conversión.',
    emoji: '📈',
    level: 'Crecimiento',
    duration: '6 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#10B981', to: '#059669' },
    modules: [
      {
        emoji: "🎯", title: "Módulo 1: Campañas de Alto Impacto", objective: "Diseñar y ejecutar campañas de marketing en tiempo récord.", topics: ["Generación de ideas y copies creativos con ChatGPT.", "Creación de visuales publicitarios de nivel profesional con Midjourney.", "A/B testing y optimización de campañas asistida por IA."]
      },
      {
        emoji: "🤖", title: "Módulo 2: Generación de Leads Cualificados", objective: "Utilizar herramientas de IA para nutrir y calificar clientes potenciales.", topics: ["HubSpot AI para predicción de ventas y calificación de leads.", "Chatbots avanzados para atención y venta automática.", "Análisis de sentimientos de clientes potenciales."]
      }
    ]
  },
  {
    id: 'ciberseguridad-ia',
    title: 'Ciberseguridad y Amenazas con IA',
    description: 'Protege a tu empresa contra las nuevas amenazas generadas por IA, phishing avanzado, deepfakes y fugas de información.',
    emoji: '🛡️',
    level: 'Corporativo y Personal',
    duration: '3 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#A855F7', to: '#EC4899' },
    modules: [
      {
        emoji: "🎣", title: "Módulo 1: Phishing y Deepfakes con IA", objective: "Identificar y evitar engaños digitales hiperrealistas.", topics: ["Detección de deepfakes de audio y video (Spear-phishing).", "Ingeniería social generada por ChatGPT.", "Detección de correos de phishing avanzados."]
      },
      {
        emoji: "🔐", title: "Módulo 2: Protección y Políticas de IA", objective: "Asegurar la información corporativa y el uso ético de la IA.", topics: ["Privacidad en IA: Qué no debes subir a ChatGPT/Claude.", "Implementación estricta de Autenticación de Dos Pasos (2FA).", "Planes de contingencia y recuperación de desastres."]
      }
    ]
  }
];