import { Link } from 'react-router-dom';
import { Brain, Bot, Palette, Code, LineChart, Lock, ChevronRight, Users } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import selloCertivali from '../../assets/certivali.png';

const getCourseIcon = (id: number) => {
  switch (id) {
    case 1: return <Brain className="w-10 h-10 text-[#06B6D4]" />;
    case 2: return <Bot className="w-10 h-10 text-[#06B6D4]" />;
    case 3: return <Palette className="w-10 h-10 text-[#06B6D4]" />;
    case 4: return <Code className="w-10 h-10 text-[#06B6D4]" />;
    case 5: return <LineChart className="w-10 h-10 text-[#06B6D4]" />;
    case 6: return <Lock className="w-10 h-10 text-[#06B6D4]" />;
    default: return <Brain className="w-10 h-10 text-[#06B6D4]" />;
  }
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 py-20 px-6 font-sans">
      
      {/* Header y Sello de Certivali */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col items-center text-center">
        <img 
          src={selloCertivali} 
          alt="Avalado por Certivali" 
          className="w-48 mb-8 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] object-contain"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Certificaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-blue-500">Corporativas</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
          Formación tecnológica de vanguardia avalada oficialmente. Transforma a tu equipo y automatiza tu empresa con Inteligencia Artificial.
        </p>
      </div>

      {/* Grid de Cursos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div 
            key={course.id} 
            className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                {getCourseIcon(course.id)}
              </div>
              
              <span className="text-xs font-bold tracking-wider text-[#06B6D4] uppercase mb-2 block">
                {course.route}
              </span>
              
              <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                {course.title}
              </h3>

              <div className="flex items-start gap-2 mb-8 bg-[#0F172A] p-3 rounded-lg border border-slate-800/50">
                <Users className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  {course.audience}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <Link 
                  to={`/cursos/${course.id}`}
                  className="flex items-center justify-between w-full py-3 px-4 bg-transparent border border-slate-700 text-slate-300 font-semibold rounded-lg group-hover:border-[#06B6D4] group-hover:text-[#06B6D4] transition-colors duration-300"
                >
                  Ver Temario Oficial
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}