export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseColor {
  from: string;
  to: string;
}

export interface Course {
  id: string; 
  emoji: string;
  title: string;
  description: string;
  targetAudience: string; // Agregado para tu sección "Dirigido a"
  level: string;
  duration: string;
  status: 'available' | 'coming-soon';
  color: CourseColor;
  modules: CourseModule[];
}

export const courses: Course[] = [
  {
    id: 'ia-productividad',
    emoji: '🏆',
    title: 'Productividad, Marketing y Ventas con IA',
    description: 'Nivel Inicial. Domina el Marco 4D, ChatGPT, Claude y Gemini para automatizar tareas, redactar documentos complejos y organizar tu empresa.',
    targetAudience: 'Público en general, emprendedores, administrativos, vendedores y cualquier persona con CERO conocimiento de tecnología que quiera trabajar menos y lograr más.',
    level: 'Corporativo y Personal',
    duration: '4 semanas',
    status: 'available',
    color: { from: '#00F2FF', to: '#007BFF' },
    modules: [
      { 
        title: 'Módulo 1: Mi Primer Asistente y el "Zoológico" de la IA', 
        topics: [
          'Las 4 Reglas de Oro (El Marco 4D): Delegar, Describir, Discernir y Diligencia.', 
          'Los 3 Ingredientes Mágicos: Algoritmos, Datos y Poder de Cómputo (Cómo piensa el robot).', 
          'El Zoológico de las IAs: ChatGPT (Lógica y matemáticas), Claude (El mejor escritor), Gemini (Conectado a Google) y Perplexity (Búsquedas exactas).'
        ] 
      },
      { 
        title: 'Módulo 2: Cómo hablarle al Robot (Ingeniería de Prompts)', 
        topics: [
          'Saber explicar: El secreto de las instrucciones claras y directas.', 
          'Las 3 piezas del Prompt: Qué quiero (Producto), Cómo lo quiero (Proceso) y Cómo debe actuar (Comportamiento).', 
          'Trucos de experto: Inyectar contexto, darle ejemplos de éxito (Few-Shot) y pedirle que "piense paso a paso".'
        ] 
      },
      { 
        title: 'Módulo 3: La Máquina de Ventas y Marketing', 
        topics: [
          'Marketing de Contenidos: Crear calendarios para redes sociales en 5 minutos y redactar anuncios persuasivos.', 
          'Ventas: Escribir correos en frío (Cold Emails) hiper-personalizados para atraer clientes B2B.', 
          'Atención al Cliente: Usar IA para redactar respuestas rápidas a quejas o dudas frecuentes con empatía.'
        ] 
      },
      { 
        title: 'Módulo 4: Herramientas de IA para el Día a Día', 
        topics: [
          'NotebookLM: Cómo subir un PDF o manual de 100 páginas y hacerle preguntas directas.', 
          'Canva Magic Studio: Crear presentaciones y posts visuales con un solo clic.', 
          'IA en tu teléfono: Cómo usar la voz para dictarle tareas a la IA mientras vas en el tráfico o en el gimnasio.'
        ] 
      }
    ]
  },
  {
    id: 'ia-agentes',
    emoji: '🤖',
    title: 'Agentes de IA y Automatización Avanzada',
    description: 'Nivel Intermedio. Construye "Empleados Digitales" autónomos que trabajen por ti 24/7.',
    targetAudience: 'Dueños de negocio, líderes de operaciones y personas que ya usan ChatGPT pero quieren construir "Empleados Digitales" que trabajen 24/7.',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    status: 'available',
    color: { from: '#FFD700', to: '#F59E0B' },
    modules: [
      { 
        title: 'Módulo 1: De Chatbots a Agentes Autónomos', 
        topics: [
          'La diferencia real: Un chat solo responde; un agente piensa, decide y usa herramientas.', 
          'El Ecosistema Open Source: Por qué usar n8n te da libertad total y te ahorra miles de dólares.', 
          'Mapeo de procesos: Cómo identificar qué tareas aburridas de tu empresa se pueden automatizar hoy.'
        ] 
      },
      { 
        title: 'Módulo 2: El Cerebro del Agente (Claude & Lógica Avanzada)', 
        topics: [
          'Por qué Claude (Anthropic) es el mejor cerebro para procesos y seguimiento de reglas estrictas.', 
          'System Prompts: Dándole personalidad, reglas inquebrantables y árboles de decisión a tu agente.', 
          'Gestión de memoria: Cómo hacer que el agente recuerde el historial de un cliente.'
        ] 
      },
      { 
        title: 'Módulo 3: Orquestación Maestra con n8n', 
        topics: [
          'Instalación básica y entendimiento de "Nodos" (Las piezas de Lego de la automatización).', 
          'Conexiones API: Cómo hacer que Claude se comunique con n8n de forma segura.', 
          'Webhooks: Enseñar a tu sistema a "escuchar" cuando entra un correo o se llena un formulario en tu web.'
        ] 
      },
      { 
        title: 'Módulo 4: Proyectos Reales y Mantenimiento', 
        topics: [
          'Proyecto 1: Agente analista (Recibe un Excel por correo, saca un resumen y lo manda por Slack/WhatsApp).', 
          'Proyecto 2: Agente de Soporte (Lee los manuales de tu empresa y responde tickets de clientes).', 
          'Prevención de errores: Qué hacer cuando la API falla y cómo mantener a tu agente actualizado.'
        ] 
      }
    ]
  },
  {
    id: 'ia-multimedia',
    emoji: '🎨',
    title: 'Diseño, Imágenes y Video con IA',
    description: 'Genera recursos visuales Premium en tiempo récord. Midjourney, Runway y ElevenLabs.',
    targetAudience: 'Diseñadores, mercadólogos, community managers y creativos que necesitan recursos visuales Premium en tiempo récord.',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    status: 'available',
    color: { from: '#F97316', to: '#EF4444' },
    modules: [
      { 
        title: 'Módulo 1: Dirección de Arte Prompteada', 
        topics: [
          'Batalla de Titanes: Midjourney V6 vs. DALL-E 3 vs. Stable Diffusion.', 
          'Anatomía de un Prompt visual: Cámara, iluminación, estilo artístico y relación de aspecto.', 
          'Consistencia de personajes: Cómo crear una "mascota" de marca y repetirla en diferentes escenarios.'
        ] 
      },
      { 
        title: 'Módulo 2: Diseño Gráfico y Branding Aumentado', 
        topics: [
          'Adobe Firefly: Uso de "Relleno Generativo" en Photoshop para ampliar fondos o borrar personas.', 
          'Creación de logotipos y vectorización rápida.', 
          'Creación de un "Brand Kit" consistente usando solo Inteligencia Artificial.'
        ] 
      },
      { 
        title: 'Módulo 3: La Revolución Audiovisual (Video y Voz)', 
        topics: [
          'Video Generativo: Convertir textos o fotos fijas en videos cinematográficos (Runway, Sora, Haiper).', 
          'Clonación de voz profesional: Grabar un texto en español y hacer que tu propia voz lo hable en inglés o mandarín.'
        ] 
      },
      { 
        title: 'Módulo 4: Avatares, Edición y Derechos de Autor', 
        topics: [
          'Creación de avatares sintéticos (HeyGen) para videos de capacitación corporativa sin usar cámaras.', 
          'Edición de video basada en texto (Descript).', 
          'Legalidad: ¿De quién es la imagen que genera la IA? Reglas de derechos de autor corporativos.'
        ] 
      }
    ]
  },
  {
    id: 'ia-desarrollo',
    emoji: '💻',
    title: 'Desarrollo de Software Potenciado por IA',
    description: 'Acelera tu escritura de código y refactorización utilizando Cursor, GitHub Copilot y agentes de terminal.',
    targetAudience: 'Programadores (Juniors y Seniors), Arquitectos de Software y estudiantes de ingeniería.',
    level: 'Ingeniería y Gestión',
    duration: '6 semanas',
    status: 'available',
    color: { from: '#A855F7', to: '#D946EF' },
    modules: [
      { 
        title: 'Módulo 1: El Nuevo Entorno de Desarrollo', 
        topics: [
          'Dominio absoluto de Cursor IDE y GitHub Copilot.', 
          'Autocompletado predictivo: Escribir código a la velocidad del pensamiento.', 
          'Generación de boilerplate (estructuras base) en React, Python o Node.js.'
        ] 
      },
      { 
        title: 'Módulo 2: IA como tu Compañero (Pair Programming)', 
        topics: [
          'Traducción de código: Pasar un proyecto de PHP viejo a Python o TypeScript moderno.', 
          'Explicación de código Legacy: Cómo pedirle a la IA que te explique un sistema antiguo.', 
          'Generación de expresiones regulares (Regex) y consultas SQL complejas con lenguaje natural.'
        ] 
      },
      { 
        title: 'Módulo 3: Calidad, Testing y Debugging', 
        topics: [
          'Automatización de Pruebas Unitarias (Unit Tests) con un solo clic.', 
          'Refactoring: Limpieza de código sucio y optimización de algoritmos lentos.', 
          'Debugging asistido: Pegar mensajes de error de la terminal y recibir la solución exacta.'
        ] 
      },
      { 
        title: 'Módulo 4: Arquitectura, Bases de Datos y DevOps', 
        topics: [
          'Diseño de esquemas de bases de datos relacionales asistido por IA.', 
          'Generación automática de documentación técnica (Archivos README y Swagger).', 
          'Uso de IA para detectar vulnerabilidades de seguridad en tu código antes de subirlo a producción.'
        ] 
      }
    ]
  },
  {
    id: 'ia-project-manager',
    emoji: '📈',
    title: 'Project Manager & Master SCRUM con IA',
    description: 'Automatización de ceremonias ágiles, análisis predictivo de riesgos y reportes ejecutivos.',
    targetAudience: 'Líderes de equipo, Product Owners, Scrum Masters y directores de departamento.',
    level: 'Gestión Técnica',
    duration: '4 semanas',
    status: 'available',
    color: { from: '#10B981', to: '#34D399' },
    modules: [
      { 
        title: 'Módulo 1: Fundamentos de Agilidad en la Era de la IA', 
        topics: [
          'Repaso exprés del framework SCRUM (Roles, Ceremonias y Artefactos).', 
          'El nuevo rol del Scrum Master como "Orquestador de IA".'
        ] 
      },
      { 
        title: 'Módulo 2: Gestión Inteligente del Backlog', 
        topics: [
          'Redacción perfecta de Historias de Usuario y Criterios de Aceptación impulsados por Claude.', 
          'Estimación de esfuerzo (Story Points) basada en datos históricos.', 
          'División automática de proyectos gigantes (Épicas) en tareas pequeñas y manejables.'
        ] 
      },
      { 
        title: 'Módulo 3: Automatización de Ceremonias', 
        topics: [
          'Daily Standups asíncronos y resúmenes automáticos de bloqueos del equipo.', 
          'Generación de minutas y tareas a seguir (Action Items) en Plannings y Retrospectivas.', 
          'Integración de IA en Jira, Asana y Trello.'
        ] 
      },
      { 
        title: 'Módulo 4: Predicción de Riesgos y Liderazgo', 
        topics: [
          'Análisis predictivo: Usar IA para detectar si un proyecto se va a retrasar antes de que suceda.', 
          'Generación automática de reportes de estatus semanales para los directores.', 
          'Comunicación empática: Uso de IA para redactar correos difíciles a clientes o manejo de crisis.'
        ] 
      }
    ]
  },
  {
    id: 'ia-ciberseguridad',
    emoji: '🔒',
    title: 'Seguridad de la Información y Amenazas con IA',
    description: 'Protege tu empresa contra las nuevas amenazas generadas por IA, phishing avanzado y deepfakes.',
    targetAudience: 'Directores de TI (CTOs, CISOs), equipos legales, recursos humanos y encargados de proteger los datos de la empresa.',
    level: 'Seguridad Corporativa',
    duration: '3 semanas',
    status: 'available',
    color: { from: '#EC4899', to: '#F43F5E' },
    modules: [
      { 
        title: 'Módulo 1: El Nuevo Paisaje de Amenazas', 
        topics: [
          'Spear-Phishing Generativo: Correos de estafa sin faltas de ortografía, diseñados a la medida.', 
          'Deepfakes: Clonación de voz de directivos (Vishing) para autorizar transferencias falsas.', 
          'Inyección de Prompts: Cómo los hackers confunden a los chatbots de tu empresa.'
        ] 
      },
      { 
        title: 'Módulo 2: El Escudo Defensivo y Detección', 
        topics: [
          'Uso de IA para detectar anomalías en la red de la oficina.', 
          'Cómo capacitar al personal no técnico para detectar audios o videos falsos.', 
          'Clasificación y bloqueo automático de malware usando Machine Learning.'
        ] 
      },
      { 
        title: 'Módulo 3: Privacidad de Datos y Shadow AI', 
        topics: [
          'El peligro oculto: Empleados subiendo datos financieros a ChatGPT gratuito.', 
          'Diferencia crítica entre Modelos Públicos (aprenden de ti) y Entornos Enterprise/Privados.', 
          'Control de accesos: Asegurar que el bot de RRHH no le diga los sueldos a los practicantes.'
        ] 
      },
      { 
        title: 'Módulo 4: Creación de la Política de IA Corporativa', 
        topics: [
          'Gobernanza: Cómo redactar el "Manual de Uso Aceptable de IA" para todos los empleados.', 
          'Cumplimiento legal y normativo (Alineación con normas de protección de datos).', 
          'Protocolos de respuesta: Qué hacer el día que la empresa sufra una brecha de datos por IA.'
        ] 
      }
    ]
  }
];