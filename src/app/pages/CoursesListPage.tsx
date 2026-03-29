import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, TrendingUp, AlertTriangle, ChevronRight, CheckCircle } from 'lucide-react';
import { courses } from '../data/coursesData';

export function CoursesListPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header flotante */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Volver al Inicio</span>
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)' }}
      >
        {/* Efectos de luz de fondo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Título y descripción (Fuera de los cursos) */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-purple-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                CURSOS Y CAPACITACIÓN
              </h1>
            </div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
            </p>
          </div>

          {/* Catálogo de Cursos (Fuera de los cursos) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {courses && courses.length > 0 ? (
              courses.map((course, index) => (
                <div key={course.id || index} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Link to={course.status === 'available' ? `/cursos/${course.id}` : '#'} className={`group relative block h-full ${course.status === 'coming-soon' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                    
                    {/* Efecto de borde brillante al pasar el mouse */}
                    {course.status === 'available' && course.color && (
                      <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` }}></div>
                    )}

                    <div className={`relative h-full bg-black/80 backdrop-blur-xl border rounded-2xl p-8 flex flex-col transition-all duration-300 ${course.status === 'available' ? 'border-purple-500/20 group-hover:border-purple-500/40 group-hover:transform group-hover:scale-105' : 'border-gray-700/30 opacity-60'}`}>
                      
                      {/* Contenido principal de la tarjeta (Fuera del curso) */}
                      <div className="text-6xl mb-6">{course.emoji}</div>

                      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif', background: course.color ? `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` : 'none', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {course.title}
                      </h3>

                      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                        {course.description}
                      </p>

                      {/* Pastillas de nivel y duración */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-semibold">{course.level}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{course.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 mt-2">
                        {course.status === 'available' && (
                          <>
                            <span className="text-sm text-purple-400 group-hover:underline">Ver temario</span>
                            <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>

                      {/* Etiqueta de "Próximamente" */}
                      {course.status === 'coming-soon' && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-bold border border-gray-700">
                          Próximamente
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-gray-400">Cargando cursos...</p>
              </div>
            )}
          </div>

          {/* Vistazo Detallado de los Contenidos (Dentro de los cursos) */}
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Vistazo Rápido a los Contenidos (Dentro)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.slice(0, 2).map((course, cIndex) => (
                <div key={cIndex} className="bg-black/60 backdrop-blur-xl border border-purple-500/10 rounded-2xl p-8">
                  <div className="text-5xl mb-6">{course.emoji}</div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {course.title}
                  </h3>
                  {course.modules && course.modules.slice(0, 1).map((modulo, mIndex) => (
                    <div key={mIndex} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{modulo.emoji}</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{modulo.title}</h4>
                          <p className="text-sm text-cyan-400 font-medium mb-3">{modulo.objective}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {modulo.topics.map((topic, tIndex) => (
                          <li key={tIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      {modulo.error && (
                        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-3 flex items-start gap-3 mt-4">
                          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-red-200">{modulo.error}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  <Link to={`/cursos/${course.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 mt-6 hover:underline">
                    Ver temario completo (Dentro)
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-purple-500/10 bg-black/90 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Inteliyen. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}