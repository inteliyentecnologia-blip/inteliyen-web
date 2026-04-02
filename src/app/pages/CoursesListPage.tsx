import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

// COLORES NEÓN REALES (HEXADECIMALES) Y SOMBRAS DE GLOW PROPIAS
const getCardStyle = (id: number) => {
  switch (id) {
    case 1: return { 
      text: 'text-[#00F2FF]', 
      border: 'border-[#00F2FF]/40', 
      glow: 'shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_35px_rgba(0,242,255,0.4)]' 
    }; 
    case 2: return { 
      text: 'text-[#FFD700]', 
      border: 'border-[#FFD700]/40', 
      glow: 'shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_35px_rgba(255,215,0,0.4)]' 
    }; 
    case 3: return { 
      text: 'text-[#FF4D00]', 
      border: 'border-[#FF4D00]/40', 
      glow: 'shadow-[0_0_20px_rgba(255,77,0,0.2)] hover:shadow-[0_0_35px_rgba(255,77,0,0.4)]' 
    }; 
    default: return { 
      text: 'text-[#00F2FF]', 
      border: 'border-[#00F2FF]/40', 
      glow: 'shadow-[0_0_20px_rgba(0,242,255,0.2)]' 
    };
  }
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      
      {/* HEADER CON DEGRADADO NEÓN Y SIN OVERRIDE DE FUENTE */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#00F2FF]">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coursesData.map((course) => {
          const style = getCardStyle(course.id);
          return (
            <div 
              key={course.id} 
              className={`bg-[#050505] border ${style.border} rounded-3xl p-10 flex flex-col transition-all duration-500 ${style.glow} hover:-translate-y-2`}
            >
              <div className="text-6xl mb-8">{course.icon}</div>
              
              <h2 className={`text-2xl font-bold mb-6 ${style.text} tracking-tight`}>
                {course.title}
              </h2>
              
              <p className="text-gray-400 mb-10 flex-grow text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 rounded-full border border-[#A855F7]/40 bg-[#A855F7]/10 text-[#C084FC] text-[10px] font-bold uppercase tracking-widest">
                  {course.audienceType}
                </span>
                <span className="px-4 py-1.5 rounded-full border border-[#00F2FF]/40 bg-[#00F2FF]/10 text-[#22D3EE] text-[10px] font-bold uppercase tracking-widest">
                  {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-900">
                <Link 
                  to={`/cursos/${course.id}`} 
                  className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
                >
                  Ver temario
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}