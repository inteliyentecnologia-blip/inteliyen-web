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
    id: 'ia-empresas',
    title: 'IA Generativa para Empresas',
    description: 'Domina ChatGPT, Gemini, Claude y DeepSeek para automatizar tareas, redactar documentos y analizar datos en tu empresa.',
    emoji: '🤖',
    level: 'Corporativo',
    duration: '4 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#61DAFB', to: '#00D8FF' },
    modules: [
      {
        emoji: "🧠", title: "Módulo 1: Fundamentos de Prompt Engineering", objective: "Aprender a hablarle a la IA para obtener resultados precisos.", topics: ["Qué es la IA Generativa y cómo funciona.", "Estructura de un prompt perfecto (Contexto, Tarea, Formato).", "ChatGPT vs Claude vs Gemini vs DeepSeek: ¿Cuál usar y cuándo?"], error: "Error Común: Dar instrucciones ambiguas y obtener respuestas genéricas."
      },
      {
        emoji: "📊", title: "Módulo 2: Análisis de Datos y Estrategia", objective: "Usar IA como tu analista de datos personal.", topics: ["Análisis de Excel y CSVs con ChatGPT Advanced Data Analysis.", "Extracción de insights de mercado con DeepSeek.", "Resumen de reportes financieros largos con Claude 3."],
      },
      {
        emoji: "✍️", title: "Módulo 3: Automatización de Contenidos", objective: "Crear correos, reportes y copy en segundos.", topics: ["Integración de Google Gemini en Google Workspace (Docs, Gmail).", "Creación de plantillas de correo automatizadas.", "Redacción de propuestas comerciales persuasivas."], error: "Error Común: Copiar y pegar sin darle el 'tono de voz' de la empresa."
      },
      {
        emoji: "⚙️", title: "Módulo 4: Creación de Asistentes Propios", objective: "Construir un GPT personalizado para tu empresa.", topics: ["Cómo crear un GPT (Custom GPT) entrenado con tus propios PDFs.", "Privacidad de datos: Qué subir y qué no subir a la IA.", "Implementación en el flujo de trabajo diario del equipo."]
      }
    ]
  },
  {
    id: 'scrum-master',
    title: 'Master Scrum Corporativo',
    description: 'Certifica a tu equipo en metodologías ágiles para entregar proyectos más rápido, con mayor calidad y mejor comunicación.',
    emoji: '⚡',
    level: 'Intermedio',
    duration: '4 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#F7DF1E', to: '#F0DB4F' },
    modules: [
      {
        emoji: "🏃", title: "Módulo 1: Mindset Ágil", objective: "Cambiar la forma de pensar del equipo tradicional al modelo Agile.", topics: ["El Manifiesto Ágil y sus principios.", "Diferencias entre Cascada (Waterfall) y Scrum.", "Cuándo SÍ usar Scrum y cuándo NO."], error: "Error Común: Hacer Scrum de nombre pero seguir trabajando en cascada."
      },
      {
        emoji: "👥", title: "Módulo 2: Los Roles de Scrum", objective: "Definir responsabilidades claras en el equipo.", topics: ["El Scrum Master: Líder servicial.", "El Product Owner: Dueño del valor del negocio.", "Los Developers: Creadores del producto."],
      },
      {
        emoji: "📅", title: "Módulo 3: Eventos (Ceremonias)", objective: "Reuniones efectivas que no pierden el tiempo.", topics: ["El Sprint: El corazón de Scrum.", "Sprint Planning y Daily Scrum (15 minutos máximo).", "Sprint Review y Retrospectiva."], error: "Error Común: Convertir la Daily en una junta de reportes de 1 hora."
      },
      {
        emoji: "📦", title: "Módulo 4: Artefactos Ágiles", objective: "Medir el progreso con transparencia.", topics: ["Product Backlog: La lista de deseos.", "Sprint Backlog: El compromiso del mes.", "Definición de Terminado (DoD)."]
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management Tech',
    description: 'Aprende a gestionar proyectos tecnológicos complejos, presupuestos, riesgos y equipos remotos como un profesional.',
    emoji: '📈',
    level: 'Avanzado',
    duration: '6 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#FF6B6B', to: '#FF8E53' },
    modules: [
      {
        emoji: "🎯", title: "Módulo 1: Ciclo de Vida del Proyecto", objective: "Estructurar un proyecto desde la idea hasta el cierre.", topics: ["Fases del proyecto (Inicio, Planificación, Ejecución, Cierre).", "Creación del Project Charter.", "Gestión de Stakeholders (Involucrados)."]
      },
      {
        emoji: "⏱️", title: "Módulo 2: Alcance y Tiempo", objective: "Evitar que el proyecto se atrase o se salga de control.", topics: ["Creación de la EDT (Estructura de Desglose de Trabajo).", "Estimación de tiempos y Cronogramas (Gantt).", "Ruta crítica del proyecto."], error: "Error Común: Aceptar cambios del cliente sin ajustar el tiempo o presupuesto."
      },
      {
        emoji: "⚠️", title: "Módulo 3: Riesgos y Presupuesto", objective: "Prevenir desastres financieros y operativos.", topics: ["Matriz de riesgos (Probabilidad vs Impacto).", "Planes de contingencia.", "Control de costos e índices de desempeño (EVM)."]
      }
    ]
  },
  {
    id: 'python-fundamental',
    title: 'Python Fundamental',
    description: 'Domina Python desde cero con un enfoque práctico. Ideal para automatizar procesos y analizar datos en tu empresa.',
    emoji: '🐍',
    level: 'Principiante',
    duration: '6 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#8A2BE2', to: '#00CED1' },
    modules: [
      {
        emoji: "🚀", title: "Módulo 1: Fundamentos", objective: "Configurar el entorno y entender la lógica básica.", topics: ["Instalación y Setup: VS Code, Python 3.x.", "Variables, Strings, Integers y Booleanos.", "Entrada de datos con input()."], error: "Error Común: Intentar sumar un texto con un número (Type Errors)."
      },
      {
        emoji: "🛠️", title: "Módulo 2: Controlando el Flujo", objective: "Que tu programa tome decisiones.", topics: ["Condicionales (if, elif, else).", "Bucles for para recorrer datos.", "Bucles while para procesos continuos."], error: "Error Común: El bucle infinito (olvidar actualizar la variable)."
      },
      {
        emoji: "📦", title: "Módulo 3: Colecciones de Datos", objective: "Organizar mucha información de forma eficiente.", topics: ["Listas y Tuplas ordenadas.", "Diccionarios (Clave-Valor).", "Gestión de inventarios simples."]
      },
      {
        emoji: "⚙️", title: "Módulo 4: Automatización de Archivos", objective: "Lectura y escritura de datos reales.", topics: ["Leer y escribir archivos .txt y Excel (.csv).", "Introducción a JSON.", "Manejo de errores (try/except)."]
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Business Data Analytics',
    description: 'Transforma los datos de tu empresa en decisiones estratégicas utilizando Excel Avanzado, SQL y Power BI.',
    emoji: '📊',
    level: 'Intermedio',
    duration: '5 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#10B981', to: '#059669' },
    modules: [
      {
        emoji: "🧹", title: "Módulo 1: Limpieza de Datos", objective: "Preparar los datos crudos para el análisis.", topics: ["Power Query en Excel.", "Manejo de valores nulos y duplicados.", "Normalización de bases de datos."]
      },
      {
        emoji: "🗄️", title: "Módulo 2: Consultas con SQL", objective: "Extraer información específica de bases de datos.", topics: ["Comandos SELECT, WHERE, GROUP BY.", "Unión de tablas con JOINs.", "Subconsultas para reportes complejos."]
      },
      {
        emoji: "📉", title: "Módulo 3: Dashboards en Power BI", objective: "Crear paneles visuales dinámicos para directivos.", topics: ["Conexión a múltiples fuentes de datos.", "Fórmulas DAX esenciales.", "Diseño de interfaces e interactividad."]
      }
    ]
  },
  {
    id: 'ciberseguridad',
    title: 'Ciberseguridad Corporativa',
    description: 'Capacita a tus empleados para proteger la información confidencial de la empresa contra ataques y hackeos.',
    emoji: '🛡️',
    level: 'Básico / Todos',
    duration: '2 semanas',
    status: 'available',
    price: 'Cotizar',
    color: { from: '#A855F7', to: '#EC4899' },
    modules: [
      {
        emoji: "🎣", title: "Módulo 1: Ingeniería Social", objective: "Identificar y evitar engaños digitales.", topics: ["Cómo detectar correos de Phishing.", "Ransomware: El secuestro de datos.", "Vishing (Llamadas fraudulentas)."], error: "Error Común: Descargar facturas falsas en formato .exe o .zip."
      },
      {
        emoji: "🔐", title: "Módulo 2: Protección de Accesos", objective: "Asegurar las cuentas corporativas.", topics: ["Políticas de contraseñas seguras.", "Autenticación de Dos Pasos (2FA).", "Uso seguro de Wi-Fi público y VPNs."]
      }
    ]
  }
];