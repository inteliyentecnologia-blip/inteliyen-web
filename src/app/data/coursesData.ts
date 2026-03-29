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
  // SE ELIMINÓ LA PROPIEDAD 'price'
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
    id: 'ia-creativa',
    title: 'IA Multimedia y Diseño',
    description: 'Generación de imágenes, audio y video de nivel profesional usando Midjourney, DALL·E 3, Runway y ElevenLabs.',
    emoji: '🎨',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    status: 'available',
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
    id: 'project-management',
    title: 'Project Management Tech',
    description: 'Gestiona proyectos tecnológicos complejos y equipos remotos combinando metodologías Ágiles (Scrum) con herramientas de IA.',
    emoji: '📈',
    level: 'Corporativo y Personal',
    duration: '4 semanas',
    status: 'available',
    color: { from: '#8A2BE2', to: '#00CED1' },
    modules: [
      {
        emoji: "🎯", title: "Módulo 1: Mindset y Ciclo de Vida", objective: "Estructurar proyectos desde la idea hasta la entrega.", topics: ["Diferencias entre Cascada y metodologías Ágiles (Scrum).", "Creación de la EDT y estimación de tiempos.", "Roles claros: Product Owner, Scrum Master y Developers."]
      },
      {
        emoji: "🤖", title: "Módulo 2: IA en la Gestión", objective: "Automatizar la administración del proyecto.", topics: ["Uso de ChatGPT para redactar historias de usuario.", "Automatización de minutas y tareas post-reunión (Daily Scrum).", "Gestión de riesgos predictiva asistida por IA."]
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Business Data Analytics',
    description: 'Transforma datos en decisiones estratégicas. Aprende limpieza de datos, SQL, Power BI y análisis predictivo con IA.',
    emoji: '📊',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    status: 'available',
    color: { from: '#10B981', to: '#059669' },
    modules: [
      {
        emoji: "🧹", title: "Módulo 1: Tratamiento de Datos", objective: "Preparar y extraer información de bases de datos.", topics: ["Limpieza de datos con Power Query y Python básico.", "Consultas SQL: JOINs, Subconsultas y GROUP BY.", "Análisis rápido de CSVs con Advanced Data Analysis de ChatGPT."]
      },
      {
        emoji: "📉", title: "Módulo 2: Visualización y CRM", objective: "Crear paneles para la toma de decisiones directivas.", topics: ["Diseño de Dashboards interactivos en Power BI.", "Salesforce Einstein / HubSpot AI para predicción de ventas.", "Interpretación de insights de mercado."]
      }
    ]
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad Corporativa',
    description: 'Protege a tu empresa contra las nuevas amenazas generadas por IA, phishing avanzado y fugas de información.',
    emoji: '🛡️',
    level: 'Corporativo y Personal',
    duration: '3 semanas',
    status: 'available',
    color: { from: '#A855F7', to: '#EC4899' },
    modules: [
      {
        emoji: "🎣", title: "Módulo 1: Amenazas con IA", objective: "Identificar engaños digitales hiperrealistas.", topics: ["Detección de Deepfakes de audio y video (Spear-phishing).", "Ingeniería social generada por ChatGPT.", "Ransomware y protección de dispositivos endpoint."], error: "Error Común: Pensar que el antivirus base detendrá un ataque de ingeniería social."
      },
      {
        emoji: "🔐", title: "Módulo 2: Políticas y Protección", objective: "Asegurar la información corporativa.", topics: ["Privacidad en IA: Qué no debes subir a ChatGPT/Claude.", "Implementación estricta de Autenticación de Dos Pasos (2FA).", "Planes de contingencia y recuperación de desastres."]
      }
    ]
  }
];