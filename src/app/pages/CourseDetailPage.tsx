import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
        <Link to="/cursos" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      
      {/* HEADER ORIGINAL */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/cursos" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            ← Volver al catálogo
          </Link>
          
          <div className="bg-[#0A0E17] border border-gray-800 rounded-[2rem] p-10 shadow-2xl">
            <span className="text-6xl block mb-6">{course.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {course.title}
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl leading-relaxed">
              <strong>Dirigido a:</strong> {course.audience}
            </p>

            <a 
              href="https://wa.me/523314494403" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-full text-lg hover:opacity-90 transition-all"
            >
              Solicitar Información por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* TEMARIO ORIGINAL */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">
          Temario del Curso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.modules.map((moduleString, index) => {
            const parts = moduleString.split('\n•');
            const moduleTitle = parts[0];
            const bullets = parts.slice(1);

            return (
              <div key={index} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{moduleTitle}</h3>
                <ul className="space-y-4">
                  {bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{bullet.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FOOTER DE VALIDACIÓN ORIGINAL */}
        <div className="mt-20 bg-[#0A0E17] border border-gray-800 p-12 rounded-[2rem] text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Validación Curricular</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Al concluir este programa, obtendrás una certificación con valor curricular internacional respaldada por INTELIYEN y nuestros aliados estratégicos.
          </p>
        </div>
      </div>
    </div>
  );
}