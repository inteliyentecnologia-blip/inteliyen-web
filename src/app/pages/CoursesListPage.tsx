import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const getCardStyle = (id: number) => {
  const styles: Record<number, any> = {
    1: { text: 'text-[#00F2FF]', border: 'border-[#00F2FF]/40', glow: 'shadow-[0_0_20px_rgba(0,242,255,0.2)]' },
    2: { text: 'text-[#FFD700]', border: 'border-[#FFD700]/40', glow: 'shadow-[0_0_20px_rgba(255,215,0,0.2)]' },
    3: { text: 'text-[#FF4D00]', border: 'border-[#FF4D00]/40', glow: 'shadow-[0_0_20px_rgba(255,77,0,0.2)]' },
    4: { text: 'text-[#A855F7]', border: 'border-[#A855F7]/40', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
    5: { text: 'text-[#10B981]', border: 'border-[#10B981]/40', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]' },
    6: { text: 'text-[#EC4899]', border: 'border-[#EC4899]/40', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.2)]' },
  };
  return styles[id] || styles[1];
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
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
            <div key={course.id} className={`bg-[#050505] border ${style.border} rounded-3xl p-10 flex flex-col transition-all duration-500 ${style.glow} hover:-translate-y-2`}>
              <div className="text-6xl mb-8">{course.icon}</div>
              <h2 className={`text-2xl font-bold mb-6 ${style.text} tracking-tight`}>{course.title}</h2>
              <p className="text-gray-400 mb-10 flex-grow text-sm leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-gray-300 text-[10px] font-bold uppercase tracking-widest">{course.audienceType}</span>
                <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">{course.duration}</span>
              </div>
              <div className="mt-auto pt-8 border-t border-gray-900">
                <Link to={`/cursos/${course.id}`} className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
                  Ver temario <ChevronRight className="w-5 h-5 text-gray-600" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}