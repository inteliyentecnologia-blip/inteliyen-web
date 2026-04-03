// Le decimos a TypeScript exactamente qué forma tiene nuestra data
export interface CourseModule {
  emoji: string;
  title: string;
  objective: string;
  topics: string[];
  error: string | null;
}

export interface CourseColor {
  from: string;
  to: string;
}

export interface Course {
  id: string; // Obligamos a que el ID sea texto siempre
  emoji: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: string;
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
    level: 'Corporativo y Personal',
    duration: '4 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#00F2FF', to: '#007BFF' }, // Cyan a Azul
    modules: [
      { emoji: '🚀', title: 'Módulo 1: El Zoológico de la IA', objective: 'Conocer las herramientas clave.', topics: ['Las 4 Reglas de Oro (El Marco 4D): Delegar, Describir, Discernir y Diligencia.', 'Los 3 Ingredientes Mágicos (Cómo piensa el robot).', 'El Zoológico: ChatGPT, Claude, Gemini y Perplexity.'], error: 'Error Común: Usar ChatGPT para todo en lugar de la IA especializada.' },
      { emoji: '🧠', title: 'Módulo 2: Ingeniería de Prompts', objective: 'Hablarle al robot para que entienda.', topics: ['Instrucciones claras y directas.', 'Las 3 piezas del Prompt: Producto, Proceso y Comportamiento.', 'Trucos de experto: Inyectar contexto y pensar paso a paso.'], error: 'Error Común: Dar instrucciones ambiguas y frustrarse con respuestas genéricas.' },
      { emoji: '📈', title: 'Módulo 3: Máquina de Ventas y Marketing', objective: 'Automatizar atracción de clientes.', topics: ['Marketing de Contenidos: Calendarios y anuncios persuasivos en 5 min.', 'Ventas: Cold Emails B2B hiper-personalizados.', 'Atención al Cliente: Respuestas rápidas con empatía.'], error: null },
      { emoji: '📱', title: 'Módulo 4: Herramientas del Día a Día', objective: 'Implementar la IA en tu rutina.', topics: ['NotebookLM: Preguntas directas a tus PDFs.', 'Canva Magic Studio: Presentaciones con un clic.', 'IA en tu teléfono: Dictado de tareas en tiempo real.'], error: null }
    ]
  },
  {
    id: 'ia-agentes',
    emoji: '🤖',
    title: 'Agentes de IA y Automatización Avanzada',
    description: 'Nivel Intermedio. Construye "Empleados Digitales" autónomos que trabajen por ti 24/7.',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#FFD700', to: '#F59E0B' }, // Amarillo a Ámbar
    modules: [
      { emoji: '🤖', title: 'Módulo 1: De Chatbots a Agentes Autónomos', objective: 'Entender la autonomía digital.', topics: ['La diferencia real: Decisión vs Respuesta.', 'Ecosistema Open Source: n8n y ahorro de costos.', 'Mapeo de procesos automatizables.'], error: 'Error Común: Intentar automatizar procesos que ni los humanos entienden bien.' },
      { emoji: '🧠', title: 'Módulo 2: El Cerebro del Agente (Claude)', objective: 'Darle lógica a tu empleado digital.', topics: ['Por qué Claude es superior en lógica de reglas.', 'System Prompts y árboles de decisión.', 'Gestión de memoria del agente.'], error: null },
      { emoji: '⚙️', title: 'Módulo 3: Orquestación Maestra con n8n', objective: 'Conectar las piezas del rompecabezas.', topics: ['Instalación y lógica de Nodos.', 'Conexiones API y Webhooks.', 'Escucha activa de correos y formularios.'], error: 'Error Común: No probar los Webhooks antes de pasarlos a producción.' },
      { emoji: '📂', title: 'Módulo 4: Proyectos Reales', objective: 'Lanzar tus agentes al mundo real.', topics: ['Proyecto 1: Agente Analista (Excel a Slack/WhatsApp).', 'Proyecto 2: Agente de Soporte con manuales internos.', 'Mantenimiento y prevención de errores.'], error: null }
    ]
  },
  {
    id: 'ia-multimedia',
    emoji: '🎨',
    title: 'Diseño, Imágenes y Video con IA',
    description: 'Genera recursos visuales Premium en tiempo récord. Midjourney, Runway y ElevenLabs.',
    level: 'Corporativo y Personal',
    duration: '5 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#F97316', to: '#EF4444' }, // Naranja a Rojo
    modules: [
      { emoji: '📸', title: 'Módulo 1: Dirección de Arte Prompteada', objective: 'Dominar la generación de imágenes.', topics: ['Batalla: Midjourney V6 vs DALL-E 3.', 'Anatomía de un Prompt visual: Iluminación y Estilo.', 'Consistencia de personajes para marcas.'], error: 'Error Común: Generar imágenes con rostros deformes o texto mal escrito por falta de parámetros.' },
      { emoji: '🎨', title: 'Módulo 2: Diseño Gráfico y Branding', objective: 'Editar y perfeccionar.', topics: ['Photoshop: Relleno generativo con Adobe Firefly.', 'Logotipos y vectorización rápida.', 'Brand Kits generados 100% con IA.'], error: null },
      { emoji: '🎬', title: 'Módulo 3: Revolución Audiovisual', objective: 'Darle vida y movimiento a tus ideas.', topics: ['Video Generativo: Runway, Sora y Haiper.', 'Voz: Clonación profesional con ElevenLabs.'], error: null },
      { emoji: '⚖️', title: 'Módulo 4: Avatares y Legalidad', objective: 'Proteger tu trabajo y automatizar video.', topics: ['HeyGen: Videos de capacitación sin cámaras.', 'Edición basada en texto (Descript).', 'Derechos de autor corporativos.'], error: null }
    ]
  },
  {
    id: 'ia-desarrollo',
    emoji: '💻',
    title: 'Desarrollo de Software con IA',
    description: 'Acelera tu escritura de código y refactorización utilizando Cursor, GitHub Copilot y agentes de terminal.',
    level: 'Corporativo y Personal',
    duration: '6 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#A855F7', to: '#D946EF' }, // Morado a Rosa/Fuchsia
    modules: [
      { emoji: '⚡', title: 'Módulo 1: Entornos de Desarrollo con IA', objective: 'Configurar el IDE del futuro.', topics: ['Cursor: El IDE con IA nativa para refactorizar proyectos.', 'GitHub Copilot: Autocompletado en tiempo real.', 'Generación de boilerplate en React, Python o Node.js.'], error: 'Error Común: Confiar ciegamente en el código generado sin auditar la seguridad.' },
      { emoji: '🛠️', title: 'Módulo 2: Pair Programming y Agentes', objective: 'Dejar que la IA resuelva bugs complejos.', topics: ['Traducción de código: PHP viejo a TypeScript moderno.', 'Explicación de código Legacy.', 'Generación de Regex y consultas SQL con lenguaje natural.'], error: null },
      { emoji: '🐛', title: 'Módulo 3: Calidad y Testing', objective: 'Blindar tus aplicaciones.', topics: ['Automatización de Pruebas Unitarias con un clic.', 'Refactoring: Limpieza de código sucio.', 'Debugging asistido por terminal.'], error: null },
      { emoji: '🏗️', title: 'Módulo 4: Arquitectura y DevOps', objective: 'Estructurar a gran escala.', topics: ['Diseño de bases de datos relacionales asistido.', 'Documentación automática (README y Swagger).', 'Detección de vulnerabilidades de seguridad.'], error: null }
    ]
  },
  {
    id: 'ia-project-manager',
    emoji: '📈',
    title: 'Project Manager & Master SCRUM con IA',
    description: 'Automatización de ceremonias ágiles, análisis predictivo de riesgos y reportes ejecutivos.',
    level: 'Gestión Técnica',
    duration: '4 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#10B981', to: '#34D399' }, // Verde Esmeralda
    modules: [
      { emoji: '🏃‍♂️', title: 'Módulo 1: Agilidad en la Era IA', objective: 'Actualizar el framework de trabajo.', topics: ['Repaso exprés del framework SCRUM.', 'El nuevo rol del Scrum Master como Orquestador de IA.'], error: null },
      { emoji: '📝', title: 'Módulo 2: Gestión Inteligente del Backlog', objective: 'Escribir menos y planear mejor.', topics: ['Redacción perfecta de Historias de Usuario con Claude.', 'Estimación de esfuerzo (Story Points) basada en datos.', 'División automática de Épicas gigantes.'], error: 'Error Común: Hacer historias de usuario genéricas que confunden a los programadores.' },
      { emoji: '🔄', title: 'Módulo 3: Automatización de Ceremonias', objective: 'Eliminar juntas innecesarias.', topics: ['Daily Standups asíncronos y resúmenes de bloqueos.', 'Generación de minutas y tareas en Plannings.', 'Integración de IA en Jira, Asana y Trello.'], error: null },
      { emoji: '🔮', title: 'Módulo 4: Predicción de Riesgos', objective: 'Ver el futuro del proyecto.', topics: ['Análisis predictivo de retrasos.', 'Generación automática de reportes semanales.', 'Comunicación empática para clientes difíciles.'], error: null }
    ]
  },
  {
    id: 'ia-ciberseguridad',
    emoji: '🔒',
    title: 'Ciberseguridad y Amenazas con IA',
    description: 'Protege tu empresa contra las nuevas amenazas generadas por IA, phishing avanzado y deepfakes.',
    level: 'Corporativo y Personal',
    duration: '3 semanas',
    price: 'Inscripciones Abiertas',
    status: 'available',
    color: { from: '#EC4899', to: '#F43F5E' }, // Rosa Eléctrico a Rojo
    modules: [
      { emoji: '🎣', title: 'Módulo 1: El Nuevo Paisaje de Ataques', objective: 'Conocer las armas del enemigo.', topics: ['Spear-Phishing Generativo: Correos de estafa sin faltas.', 'Deepfakes: Clonación de voz de directivos (Vishing).', 'Inyección de Prompts en los chatbots de tu empresa.'], error: 'Error Común: Creer que el antivirus tradicional detectará un ataque de ingeniería social con IA.' },
      { emoji: '🛡️', title: 'Módulo 2: El Escudo Defensivo', objective: 'Blindar tu organización.', topics: ['Uso de IA para detectar anomalías en la red.', 'Capacitar al personal para detectar audios/videos falsos.', 'Clasificación automática de malware.'], error: null },
      { emoji: '🕵️‍♂️', title: 'Módulo 3: Privacidad y Shadow AI', objective: 'Controlar lo que hacen tus empleados.', topics: ['El peligro de subir datos financieros a ChatGPT gratuito.', 'Modelos Públicos vs Entornos Enterprise/Privados.', 'Control de accesos (Ej. Bot de RRHH y sueldos).'], error: null },
      { emoji: '📜', title: 'Módulo 4: Política de IA Corporativa', objective: 'Poner las reglas del juego.', topics: ['Gobernanza: Redactar el Manual de Uso Aceptable de IA.', 'Cumplimiento legal y normativo.', 'Protocolos de respuesta ante brechas de datos.'], error: null }
    ]
  }
];