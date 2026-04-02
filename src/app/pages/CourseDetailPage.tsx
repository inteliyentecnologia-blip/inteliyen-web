import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
// IMPORTAMOS LOS SELLOS ACTUALIZADOS (Reemplazando a la gran V)
import selloGoldGarantia from '../../assets/sello-garantia.png'; // La imagen de image_30.png
import selloAcreditacionTexto from '../../assets/certivali.png'; // La imagen de image_38.png

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">Curso no encontrado</h1>
        <Link to="/cursos" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">Volver a Cursos</Link>
      </div>
    );
  }

  return (
    // SE ELIMINÓ EL font-sans PARA QUE TU TIPOGRAFÍA NEÓN CHINGONA VUELVA A FUNCIONAR
    <div className="min-h-screen bg-black text-white pb-20">
      
      {/* HEADER RESTAURADO A TU DISEÑO ORIGINAL CHINGÓN */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto relative">
          <Link to="/cursos" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            ← Volver al catálogo
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 relative z-10">
            <div>
              <span className="text-6xl block mb-6">{course.icon}</span>
              {/* TU TIPOGRAFÍA NEÓN EXACTA */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
                <strong className="text-gray-200">Dirigido a:</strong> {course.audience}
              </p>

              {/* BOTÓN WHATSAPP DEGRADADO EXACTO */}
              <a 
                href="https://wa.me/523314494403" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Solicitar Información por WhatsApp
              </a>
            </div>
            
            {/* SELLOS DE CERTIFICACIÓN COMBINADOS PROFESIONALMENTE (REEMPLAZANDO LA V) */}
            <div className="shrink-0 mt-8 md:mt-0 flex flex-col items-center gap-6">
              <img 
                src={selloGoldGarantia} 
                alt="CERTIVALI GOLD SEAL" 
                className="w-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]" 
              />
              <img 
                src={selloAcreditacionTexto} 
                alt="CERTIVALI TEXT" 
                className="w-40 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]" 
              />
            </div>
          </div>
          
          {/* Resplandor neón de fondo sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>

      {/* TEMARIO OFICIAL COMPLETO - RESTAURADO A GRID DE 2 COLUMNAS */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-2 tracking-tight">
          📖 Temario Oficial Completo
        </h2>
        
        {/* GRID DE 2 COLUMNAS EXACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.modules.map((moduleString, index) => {
            // Separamos el título del módulo de los bullets
            const parts = moduleString.split('\n•');
            const moduleTitle = parts[0];
            const bullets = parts.slice(1);

            return (
              <div key={index} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl flex flex-col h-full hover:border-purple-500/30 transition-colors shadow-2xl relative overflow-hidden group">
                {/* Resplandor sutil al pasar el mouse */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors tracking-tight leading-tight">
                    {moduleTitle}
                  </h3>

                  <ul className="space-y-5 flex-grow">
                    {bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        {/* TUS PALOMITAS MORADAS EXACTAS */}
                        <svg className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-base leading-relaxed">
                          {bullet.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* BLOQUE DE VALIDACIÓN - RESTAURADO A TU DISEÑO OSCURO CON LOS SELLOS */}
        <div className="mt-20 bg-[#0A0E17] border border-gray-800 p-10 rounded-3xl flex flex-col items-center gap-10 shadow-2xl shadow-cyan-500/10">
          
          <div className="flex items-center gap-10">
            <img 
              src={selloGoldGarantia} 
              alt="CERTIVALI GOLD SEAL" 
              className="w-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]" 
            />
            <img 
              src={selloAcreditacionTexto} 
              alt="CERTIVALI TEXT" 
              className="w-40 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]" 
            />
          </div>

          <div className="text-center max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tighter">Doble Acreditación Curricular con Reconocimiento <span className="text-purple-400">Internacional</span></h3>
            <p className="text-gray-300 leading-relaxed text-xl">
              Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por CERTIVALI (Institución de Validación Internacional) al finalizar el curso. Nuestras acreditaciones poseen valor curricular formal, garantizando reconocimiento profesional a nivel global en empresas y organismos líderes del sector.
            </p>
          </div>

        </div>

        {/* CTA FINAL WHATSAPP RESTAURADO AL 100% */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-[#0F172A] border border-cyan-500/30 p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
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
    </div>
  );
}