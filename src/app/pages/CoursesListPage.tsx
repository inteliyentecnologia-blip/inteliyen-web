import React from 'react';
import { ShieldCheck, Brain, Bot, Palette, Code, LineChart, Lock } from 'lucide-react';
// Importamos la info desde tu archivo
import { coursesData } from '../data/coursesData';
// Importamos la imagen de CERTIVALI desde tus assets
import certivaliBadge from '../../assets/certivali.png'; 

// Función para mapear iconos dinámicamente según el ID del curso
const getCourseIcon = (id: number) => {
  switch (id) {
    case 1: return <Brain className="w-8 h-8 text-[#06B6D4]" />;
    case 2: return <Bot className="w-8 h-8 text-[#06B6D4]" />;
    case 3: return <Palette className="w-8 h-8 text-[#06B6D4]" />;
    case 4: return <Code className="w-8 h-8 text-[#06B6D4]" />;
    case 5: return <LineChart className="w-8 h-8 text-[#06B6D4]" />;
    case 6: return <Lock className="w-8 h-8 text-[#06B6D4]" />;
    default: return <Brain className="w-8 h-8 text-[#06B6D4]" />;
  }
};

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 py-16 px-6 font-sans">
      
      {/* Header y Sello de Certivali */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={certivaliBadge} 
            alt="Avalado por Certivali" 
            className="w-40 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Catálogo de Certificaciones <span className="text-[#06B6D4]">Corporativas</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Capacitación High-Ticket en Inteligencia Artificial para empresas que buscan liderar la evolución operativa, avalada con validez oficial.
        </p>
      </div>

      {/* Grid de Cursos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <div 
            key={course.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0F172A] p-3 rounded-xl border border-slate-800">
                {getCourseIcon(course.id)}
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-[#06B6D4] uppercase">
                  {course.route}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight mt-1">
                  {course.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
              <strong className="text-slate-300">Dirigido a:</strong> {course.audience}
            </p>

            <div className="flex-grow">
              <ul className="space-y-4">
                {course.modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button className="w-full py-3 px-4 bg-transparent border border-[#06B6D4] text-[#06B6D4] font-semibold rounded-lg hover:bg-[#06B6D4] hover:text-slate-900 transition-colors duration-300">
                Ver Temario Completo
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}