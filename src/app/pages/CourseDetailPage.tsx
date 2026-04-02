import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
// IMPORTAMOS EL SELLO DIRECTO DE TUS ASSETS
import selloCertivali from '../../assets/certivali.png';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Buscar el curso por ID
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">Curso no encontrado</h1>
        <p className="text-gray-400 mb-8">El curso que buscas no existe o fue movido.</p>
        <Link to="/cursos" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
          Volver a Cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-20">
      
      {/* HEADER DEL CURSO CON SELLO DE CERTIVALI */}
      <div className="bg-black border-b border-gray-800 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/cursos" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            ← Volver al catálogo
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <span className="text-5xl block mb-4">{course.icon}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-400 mt-4">
                <strong className="text-gray-300">Dirigido a:</strong> {course.audience}
              </p>
            </div>
            
            {/* SELLO DE CERTIVALI A LA DERECHA */}
            <div className="shrink-0 mt-4 md:mt-0">
              <img 
                src={selloCertivali} 
                alt="Avalado por Certivali" 
                className="w-40 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] object-contain" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEMARIO EXTENSO */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
          📖 Temario Oficial Completo
        </h2>
        
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <div key={index} className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-colors shadow-lg">
              {/* Usamos whitespace-pre-line para que respete los saltos de línea (\n) que pusimos en los datos */}
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {module}
              </p>
            </div>
          ))}
        </div>

        {/* CTA FINAL WHATSAPP */}
        <div className="mt-16 border border-cyan-500/30 bg-cyan-900/10 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Listo para transformar a tu equipo?</h3>
          <p className="text-gray-400 mb-8">Inicia tu certificación hoy mismo con validez oficial.</p>
          <a 
            href="https://wa.me/523314494403" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Contactar Asesor B2B
          </a>
        </div>
      </div>
    </div>
  );
}