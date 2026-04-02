import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import selloCertivali from '../../assets/certivali.png';

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 font-sans">
      
      {/* SELLO CERTIVALI */}
      <div className="max-w-7xl mx-auto flex justify-center mb-8">
        <img src={selloCertivali} alt="Certivali" className="w-48 object-contain" />
      </div>

      {/* TÍTULO ORIGINAL */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
          <span className="text-purple-400">📖</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 uppercase tracking-wide">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      {/* GRID DE CURSOS ORIGINAL */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 flex flex-col hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="text-5xl mb-6">{course.icon}</div>
            
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{course.title}</h2>
            
            <p className="text-gray-400 mb-8 flex-grow">
              {course.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
                <span className="mr-2">↗</span> {course.audienceType}
              </span>
              <span className="inline-flex items-center w-max px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
                <span className="mr-2">⏱</span> {course.duration}
              </span>
            </div>

            <Link to={`/cursos/${course.id}`} className="text-gray-300 hover:text-white flex items-center justify-between text-sm mt-auto">
              Ver temario
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}