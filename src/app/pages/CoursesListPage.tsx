import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesListPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)' }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData?.map((course, index) => (
              <div key={course.id} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <Link to={course.status === 'available' ? `/cursos/${course.id}` : '#'} className={`group relative block h-full ${course.status === 'coming-soon' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                  
                  {course.status === 'available' && (
                    <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` }}></div>
                  )}

                  <div className={`relative h-full bg-black/80 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${course.status === 'available' ? 'border-purple-500/20 group-hover:border-purple-500/40 group-hover:transform group-hover:scale-105' : 'border-gray-700/30 opacity-60'}`}>
                    <div className="text-6xl mb-6">{course.emoji}</div>

                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif', background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {course.title}
                    </h3>

                    <p className="text-gray-400 mb-6 line-clamp-3">{course.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        <TrendingUp className="w-4 h-4" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm hover:text-white transition-colors">Ver temario</span>
                      {course.status === 'available' && <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}