import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import logo from '../../assets/logo.png'; 

// Utility function to convert hex color to a format for shadow RGBA
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}, ${alpha}`;
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4uppercase">
          <span>📖</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Cursos y Capacitación
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Formación tecnológica de vanguardia para profesionales e impulsar tu empresa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coursesData.map((course) => {
          // Dinamic color classes for each course card
          const textColor = `text-[${course.color}]`;
          const borderColor = `border-[${course.color}]/30`;
          const glowColor = `rgba(${hexToRgba(course.color, 0.6)})`;

          return (
            <div 
              key={course.id} 
              className={`bg-[#0A0E17] border ${borderColor} rounded-2xl p-10 flex flex-col transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group hover:shadow-[0_0_30px_${glowColor}]`}
            >
              <div className="text-6xl mb-8">{course.icon}</div>
              
              <h2 
                className={`text-2xl font-bold mb-6 ${textColor} tracking-tight uppercase leading-tight`}
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {course.title}
              </h2>
              
              <p className="text-gray-400 mb-10 flex-grow text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-bold uppercase tracking-widest">
                  {course.audienceType}
                </span>
                <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                  {course.duration}
                </span>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-800 flex justify-between items-center group-hover:border-t-[${course.color}]/50">
                <Link 
                  to={`/cursos/${course.id}`} 
                  className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
                >
                  Ver temario oficial completo <ChevronRight className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}