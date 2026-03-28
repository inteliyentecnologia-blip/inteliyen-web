import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { courses } from '../data/coursesData';

export function CoursesListPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-purple-400" />
              <h1
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                CURSOS
              </h1>
            </div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Formación tecnológica de vanguardia para impulsar tu carrera en el mundo digital
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  to={course.status === 'available' ? `/cursos/${course.id}` : '#'}
                  className={`group relative block h-full ${
                    course.status === 'coming-soon' ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {/* Glow effect */}
                  {course.status === 'available' && (
                    <div
                      className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`
                      }}
                    ></div>
                  )}

                  <div
                    className={`relative h-full bg-black/80 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
                      course.status === 'available'
                        ? 'border-purple-500/20 group-hover:border-purple-500/40 group-hover:transform group-hover:scale-105'
                        : 'border-gray-700/30 opacity-60'
                    }`}
                  >
                    {/* Course Emoji */}
                    <div className="text-6xl mb-6">{course.emoji}</div>

                    {/* Course Title */}
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {course.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Course Info */}
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

                    {/* Price & Status */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold border ${
                          course.status === 'available'
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-gray-700/20 text-gray-500 border-gray-700/30'
                        }`}
                      >
                        {course.price}
                      </span>
                      {course.status === 'available' && (
                        <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>

                    {/* Coming Soon Badge */}
                    {course.status === 'coming-soon' && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-bold border border-gray-700">
                        Próximamente
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`mt-20 text-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  ¿Buscas un curso personalizado?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Creamos programas de formación a medida para empresas y equipos. Contáctanos para diseñar un plan que se adapte a tus necesidades.
                </p>
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  Contáctanos
                </Link>
              </div>
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