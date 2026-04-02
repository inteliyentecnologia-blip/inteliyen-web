import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const getCardStyle = (id: number) => {
  switch (id) {
    case 1: return { border: 'border-cyan-500/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]', title: 'text-cyan-400' };
    case 2: return { border: 'border-yellow-500/30', glow: 'shadow-[0_0_20px_rgba(234,179,8,0.15)]', title: 'text-yellow-400' };
    case 3: return { border: 'border-orange-500/30', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.15)]', title: 'text-orange-400' };
    default: return { border: 'border-cyan-500/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]', title: 'text-cyan-400' };
  }
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4 uppercase tracking-tighter">
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
            <div key={course.id} className={`bg-[#0A0E17] border ${style.border} rounded-2xl p-8 flex flex-col hover:scale-[1.02] transition-all duration-300 ${style.glow}`}>
              <div className="text-5xl mb-6">{course.icon}</div>
              <h2 className={`text-2xl font-bold mb-4 ${style.title}`}>{course.title}</h2>
              <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">{course.description}</p>
              
              <div className="flex gap-2 mb-8">
                <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest">
                  {course.audienceType}
                </span>
                <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                  {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-800">
                <Link to={`/cursos/${course.id}`} className="text-gray-300 hover:text-white flex items-center justify-between text-sm font-bold uppercase tracking-widest transition-colors">
                  Ver temario <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}