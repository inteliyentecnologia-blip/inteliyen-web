import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-[#0A0E17] border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-cyan-500/50 transition-all">
            <div className="text-5xl mb-6">{course.icon}</div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{course.title}</h2>
            <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">{course.description}</p>
            <div className="mt-auto pt-6 border-t border-gray-800">
              <Link to={`/cursos/${course.id}`} className="text-purple-400 flex items-center justify-between text-sm font-semibold">
                Ver temario oficial completo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}