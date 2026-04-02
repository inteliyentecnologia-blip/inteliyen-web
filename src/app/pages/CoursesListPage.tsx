import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const getCardStyle = (id: number) => {
  switch (id) {
    case 1: return { text: 'text-[#06B6D4]', border: 'border-[#06B6D4]/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' }; // Cyan
    case 2: return { text: 'text-[#EAB308]', border: 'border-[#EAB308]/30', glow: 'shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]' }; // Amarillo
    case 3: return { text: 'text-[#F97316]', border: 'border-[#F97316]/30', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]' }; // Naranja
    case 4: return { text: 'text-[#8B5CF6]', border: 'border-[#8B5CF6]/30', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]' }; // Morado
    case 5: return { text: 'text-[#10B981]', border: 'border-[#10B981]/30', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]' }; // Verde
    case 6: return { text: 'text-[#EC4899]', border: 'border-[#EC4899]/30', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]' }; // Rosa
    default: return { text: 'text-[#06B6D4]', border: 'border-[#06B6D4]/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' };
  }
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      
      {/* TÍTULO Y LEYENDA LIMPIOS (Sin clases que rompan tu tipografía y espaciado) */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4 uppercase">
          <span>📖</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => {
          const style = getCardStyle(course.id);
          return (
            <div 
              key={course.id} 
              className={`group bg-[#0A0E17] border ${style.border} rounded-2xl p-8 flex flex-col transition-all duration-300 ${style.glow}`}
            >
              <div className="text-5xl mb-6">{course.icon}</div>
              
              <h2 className={`text-2xl font-bold mb-4 ${style.text}`}>
                {course.title}
              </h2>
              
              <p className="text-gray-400 mb-8 flex-grow text-sm">
                {course.description}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold">
                  <span className="mr-2">↗</span> {course.audienceType}
                </span>
                <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
                  <span className="mr-2">⏱</span> {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-800">
                <Link 
                  to={`/cursos/${course.id}`} 
                  className="text-[#A855F7] hover:text-[#C084FC] flex items-center justify-between text-sm font-semibold transition-colors"
                >
                  Ver temario
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}