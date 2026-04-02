import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
// IMPORTAMOS LOS DOS SELLOS DE TUS ASSETS
import selloCertivali from '../../assets/sello-garantia.png'; // La imagen de image_30.png
import selloCertified from '../../assets/certivali.png'; // La imagen de image_22.png

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
      
      {/* HEADER DEL CURSO - DISEÑO PREMIUM ORIGINAL */}
      <div className="bg-black border-b border-gray-800 pt-24 pb-16 px-6 shadow-2xl">
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
              <p className="text-lg text-gray-400 mt-4 max-w-2xl">
                <strong className="text-gray-300">Dirigido a:</strong> {course.audience}
              </p>
            </div>
            
            {/* SELLO DE CERTIFICACIÓN COMBINADO A LA DERECHA */}
            <div className="shrink-0 mt-4 md:mt-0 flex flex-col items-center gap-4">
              <img 
                src={selloCertivali} 
                alt="CERTIVALI" 
                className="w-40 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.2)]" 
              />
              <img 
                src={selloCertified} 
                alt="CERTIFIED" 
                className="w-32 object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEMARIO EXTENSO Y PROFESIONAL */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-2 tracking-tight">
          📖 Temario Oficial Completo
        </h2>
        
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <div key={index} className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-purple-500/30 transition-colors shadow-lg">
              {/* whitespace-pre-line para respetar los saltos de línea (\n) */}
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {module}
              </p>
            </div>
          ))}
        </div>

        {/* BLOQUE DE VALIDACIÓN CURRICULAR PROFESIONAL CON LOS DOS SELLOS */}
        <div className="mt-16 bg-[#111] border border-gray-800 p-10 rounded-2xl flex items-start gap-8 shadow-2xl">
          <div className="flex flex-col items-center gap-6 shrink-0 pt-2">
            <img src={selloCertivali} alt="CERTIVALI" className="w-48 object-contain drop-shadow-[0_0_10px_rgba(255,255,0,0.2)]" />
            <img src={selloCertified} alt="CERTIFIED" className="w-40 object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]" />
          </div>
          <div className="flex-grow pt-1">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Validación Curricular de Valor <span className="text-purple-400">Internacional</span></h3>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por CERTIVALI (Institución de Validación Internacional). Todas nuestras acreditaciones cuentan con valor curricular formal, garantizando que tus nuevas competencias son reconocidas por empresas y organismos a nivel global.\n\nEl sello 'CERTIFIED' y el aval de CERTIVALI aseguran un estándar de calidad y profesionalismo que posiciona tu perfil por encima de la media en el competitivo mercado tecnológico actual.
            </p>
          </div>
        </div>

        {/* CTA FINAL WHATSAPP PREMIUM */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-[#0F172A] border border-cyan-500/30 p-10 rounded-2xl text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">¿Listo para transformar a tu equipo?</h3>
          <p className="text-gray-400 mb-10 text-lg">Inicia tu certificación hoy mismo con validez oficial.</p>
          <a 
            href="https://wa.me/523314494403" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-10 py-5 bg-cyan-500 text-black font-bold rounded-full text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Contactar Asesor B2B
          </a>
        </div>
      </div>
    </div>
  );
}