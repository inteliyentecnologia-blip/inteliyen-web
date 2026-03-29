import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, TrendingUp, Award, CheckCircle2, AlertTriangle } from 'lucide-react';
import { courses } from '../data/coursesData';

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">Curso no encontrado</h1>
        <p className="text-gray-400 mb-8">El curso que buscas no existe o fue movido.</p>
        <Link to="/cursos" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Volver a Cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header flotante */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link to="/cursos" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Volver a Cursos</span>
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Efecto de luz de fondo */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: course.color?.from || '#9333ea' }}
        ></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Ficha Principal del Curso */}
          <div className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-7xl mb-6">{course.emoji}</div>
            
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: course.color ? `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` : 'none',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {course.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {course.description}
            </p>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">{course.level}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                <Clock className="w-5 h-5" />
                <span className="font-bold">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                <Award className="w-5 h-5" />
                <span className="font-bold">{course.price}</span>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8">
              <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 w-full md:w-auto">
                Solicitar Cotización
              </Link>
            </div>
          </div>

          {/* SECCIÓN DEL TEMARIO (Módulos) */}
          {course.modules && course.modules.length > 0 && (
            <div className="mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-10 text-center"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Temario del Curso
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.modules.map((modulo, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-900/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-6 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{modulo.emoji}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{modulo.title}</h3>
                        <p className="text-sm text-cyan-400 font-medium mb-4">{modulo.objective}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {modulo.topics.map((topic, tIndex) => (
                        <li key={tIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {modulo.error && (
                      <div className="mt-auto bg-red-950/30 border border-red-900/50 rounded-lg p-3 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200">{modulo.error}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-3xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Dudas sobre este programa?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Nuestro equipo puede adaptar este temario a las necesidades específicas de tu empresa.</p>
            <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
              Hablar con un Asesor
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}