import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { courses } from '../data/coursesData';

import logo from '../../assets/logo.png';
import selloGold from '../../assets/sello-garantia.png';
import certivaliLogo from '../../assets/certivali.png'; 

const pythonModules = [
  {
    emoji: "🚀",
    title: "Módulo 1: El Encantador de Serpientes (Fundamentos)",
    objective: "Configurar el entorno y entender la lógica básica.",
    topics: [
      "Instalación y Setup: VS Code, Python 3.x y el primer \"Hola Mundo\".",
      "Variables y Tipos de Datos: Strings (texto), Integers (enteros), Floats (decimales) y Booleanos.",
      "Operadores: Matemáticos y de comparación.",
      "Entrada de datos: Usando input() para que el usuario interactúe."
    ],
    error: "Error Común #1: Intentar sumar un texto con un número (Type Errors)."
  },
  {
    emoji: "🛠️",
    title: "Módulo 2: Controlando el Flujo (Lógica)",
    objective: "Que tu programa tome decisiones.",
    topics: [
      "Condicionales (if, elif, else): La base de la toma de decisiones.",
      "Bucles for: Para recorrer listas o rangos.",
      "Bucles while: Para procesos que se repiten hasta que algo cambie.",
      "Ejercicio: Crear un juego de \"Adivina el número\"."
    ],
    error: "Error Común #2: El bucle infinito (olvidar actualizar la variable de control)."
  },
  {
    emoji: "📦",
    title: "Módulo 3: Colecciones y Estructuras de Datos",
    objective: "Organizar mucha información de forma eficiente.",
    topics: [
      "Listas y Tuplas: Cómo guardar grupos de datos ordenados.",
      "Diccionarios: Almacenar datos con Clave-Valor (como una agenda).",
      "Sets (Conjuntos): Para datos únicos.",
      "Ejercicio: Crear un sistema de gestión de inventario simple."
    ],
    error: "Error Común #3: Intentar acceder a un índice que no existe en una lista."
  },
  {
    emoji: "⚙️",
    title: "Módulo 4: Funciones y Modularidad",
    objective: "Escribir código limpio y reutilizable.",
    topics: [
      "Definición de funciones (def): Parámetros y retornos (return).",
      "Scope (Alcance): Variables globales vs. locales.",
      "Módulos y Librerías: Cómo importar herramientas externas (import math, import random).",
      "Ejercicio: Calculadora científica modular."
    ],
    error: null
  },
  {
    emoji: "🐛",
    title: "Módulo 5: Depuración y Manejo de Errores",
    objective: "Que el programa no se rompa cuando algo sale mal.",
    topics: [
      "Bloques try / except: Capturar errores sin que el programa muera.",
      "Tipos de excepciones: ValueError, KeyError, IndexError."
    ],
    error: "Error Común #4: Hacer un except genérico que oculta errores reales."
  },
  {
    emoji: "📂",
    title: "Módulo 6: Trabajando con el Mundo Real",
    objective: "Persistencia de datos.",
    topics: [
      "Lectura y escritura de archivos: Guardar datos en .txt o .csv.",
      "Introducción a JSON: El estándar para enviar datos por internet.",
      "Ejercicio Final: Un gestor de tareas que guarde tus pendientes en un archivo para que no se borren al cerrar el programa."
    ],
    error: null
  }
];

export default function CourseDetailPage() {
  const params = useParams<{ id?: string; courseId?: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const idToUse = params.id || params.courseId;
  const course = courses?.find(c => c.id === idToUse);

  useEffect(() => {
    if (!course) {
      navigate('/cursos');
      return;
    }
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [course, navigate]);

  if (!course) {
    return null;
  }

  const whatsappNumber = "523314494403"; 
  const whatsappMessage = encodeURIComponent(`¡Hola! Me interesa inscribirme al curso de ${course.title} ${course.emoji}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Inteliyen" className="h-12 md:h-14 w-auto" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link
            to="/cursos"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Cursos</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)'
        }}
      >
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Course Header */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`
                }}
              ></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
                {/* Course Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="text-7xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {course.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        <TrendingUp className="w-4 h-4" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      {course.status === 'available' && (
                        <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
                          {course.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-gray-300 text-lg mb-8">
                  {course.description}
                </p>

                {/* CTA Button */}
                {course.status === 'available' && (
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Solicitar Información por WhatsApp
                    </a>
                  </div>
                )}

                {/* LOGO DE CERTIVALI ACTUALIZADO: DENTRO DE CÍRCULO DESVANECIDO */}
                <div 
                  className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-transform hover:scale-105"
                  style={{ 
                    backgroundColor: `${course.color.from}33`, // Color base con opacidad
                    boxShadow: `0 0 20px ${course.color.from}50` // Resplandor exterior suave
                  }}
                >
                  <img 
                    src={certivaliLogo} 
                    alt="Avalado por Certivali" 
                    className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          {idToUse === 'python-fundamental' ? (
            // Python Course with detailed curriculum
            <div
              className={`mt-12 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Temario del Curso
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {pythonModules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">{module.emoji}</span>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-purple-300 mb-2">
                          {module.title}
                        </h4>
                        <p className="text-sm text-cyan-400 italic mb-4">
                          Objetivo: {module.objective}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {module.error && (
                      <div className="flex items-start gap-2 bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
                        <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <p className="text-orange-300 text-sm">{module.error}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Footer */}
              <div className="mt-12 text-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
                    <p className="text-gray-400 mb-6">
                      🎓 Curso 100% gratuito • 📱 Soporte vía WhatsApp • 🏆 Certificado al finalizar
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Comienza Tu Viaje en Python
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Other courses
            <>
              {course.status === 'coming-soon' ? (
                <div
                  className={`mt-12 transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div
                        className="absolute -inset-0.5 rounded-2xl blur opacity-20"
                        style={{
                          background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`
                        }}
                      ></div>
                      <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-12">
                        <div className="text-6xl mb-6">🚀</div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          Próximamente Disponible
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl">
                          Estamos trabajando en el contenido de este curso para ofrecerte la mejor experiencia de aprendizaje. 
                          ¡Mantente atento a las novedades!
                        </p>
                        <Link
                          to="/cursos"
                          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                          Ver Cursos Disponibles
                        </Link>

                        {/* El círculo con el logo de CERTIVALI, para los cursos que vendrán pronto. */}
                        <div className="absolute bottom-8 right-8">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md transition-transform hover:scale-105"
                            style={{
                              backgroundColor: `${course.color.from}33`,
                              boxShadow: `0 0 20px ${course.color.from}50`
                            }}
                          >
                            <img 
                              src={certivaliLogo} 
                              alt="Avalado por CERTIVALI" 
                              className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`mt-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h2 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Temario del Curso
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {course.modules?.map((module, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-3xl">{module.emoji}</span>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif', color: course.color.from }}>
                              {module.title}
                            </h4>
                            <p className="text-sm text-cyan-400 italic mb-4">
                              Objetivo: {module.objective}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-4">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: course.color.from }} />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>

                        {module.error && (
                          <div className="flex items-start gap-2 bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-6">
                            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <p className="text-red-300 text-sm">{module.error}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Validación Curricular Section */}
          <div className="mt-16 bg-[#050505] border border-yellow-500/20 p-10 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl relative">
            <div className="w-48 shrink-0 flex justify-center">
              <img 
                src={selloGold} 
                alt="Sello de Acreditación Internacional CERTIVALI" 
                className="max-w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" 
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 
                className="text-2xl md:text-3xl font-extrabold text-[#FFD700] mb-6"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Validación Curricular de Valor Internacional
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Al concluir con éxito este programa, <strong className="text-white">INTELIYEN</strong> otorga un diploma avalado por <strong className="text-white">CERTIVALI (Institución de Validación Internacional)</strong>. Todas nuestras acreditaciones cuentan con <strong className="text-white">valor curricular formal</strong>, garantizando que tus nuevas competencias son reconocidas por empresas y organismos a nivel global.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 bg-black/90 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © 2026 Inteliyen. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}