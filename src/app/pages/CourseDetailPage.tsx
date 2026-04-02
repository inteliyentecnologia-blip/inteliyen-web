import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
// 1. Aquí está el fix: Importamos el nombre correcto de la base de datos
import { coursesData } from '../data/coursesData';
// 2. Importamos el sello de Certivali
import selloCertivali from '../../assets/certivali.png';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // 3. Aquí está el fix 2: Convertimos el ID para que empate perfecto sin error de TypeScript
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-[#06B6D4]">Curso no encontrado</h1>
        <p className="text-slate-400 mb-8">El curso que buscas no existe o fue movido.</p>
        <Link to="/cursos" className="px-6 py-3 bg-[#06B6D4] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition">
          Volver a Cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 border-b border-slate-800 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/cursos" className="inline-flex items-center text-[#06B6D4] hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#06B6D4] uppercase bg-[#06B6D4]/10 px-3 py-1 rounded-full">
                {course.route}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-400 mt-4">
                <strong className="text-slate-300">Dirigido a:</strong> {course.audience}
              </p>
            </div>
            
            {/* Sello de Garantía CERTIVALI */}
            <div className="shrink-0 mt-4 md:mt-0">
              <img 
                src={selloCertivali} 
                alt="Avalado por Certivali" 
                className="w-32 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] object-contain" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del Curso (Módulos) */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <ShieldCheck className="text-[#06B6D4] w-6 h-6" />
          Temario Oficial
        </h2>
        
        <div className="space-y-4">
          {course.modules.map((module, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-start gap-4 hover:border-[#06B6D4]/30 transition-colors">
              <div className="bg-[#0F172A] p-2 rounded-lg shrink-0 border border-slate-800">
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <p className="text-slate-300 leading-relaxed text-lg pt-1">
                {module}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Final (Botón de WhatsApp) */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-[#0F172A] border border-[#06B6D4]/30 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Listo para transformar a tu equipo?</h3>
          <p className="text-slate-400 mb-8">Inicia tu certificación hoy mismo con validez oficial.</p>
          <a 
            href="https://wa.me/523314494403" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-[#06B6D4] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Contactar Asesor B2B
          </a>
        </div>
      </div>
    </div>
  );
}