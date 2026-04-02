import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 font-sans pb-32">
      
      {/* TÍTULO ORIGINAL (SIN EL LOGO DE LA V) */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4 tracking-tighter">
          <span className="text-purple-400">📖</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 uppercase tracking-wide font-extrabold">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div key={course.id} className="group bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-cyan-500/50 transition-colors shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="text-5xl mb-6">{course.icon}</div>
              
              <h2 className="text-2xl font-extrabold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors tracking-tight">
                {course.title}
              </h2>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold">
                  <span className="mr-2">↗</span> {course.audienceType}
                </span>
                <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
                  <span className="mr-2">⏱</span> {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-800 group-hover:border-cyan-500/30 transition-colors">
                <Link to={`/cursos/${course.id}`} className="text-gray-300 group-hover:text-white flex items-center justify-between text-base font-semibold transition-colors">
                  Ver temario oficial completo
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}