import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import selloGold from '../../assets/sello-garantia.png';
import certivaliTexto from '../../assets/certivali.png'; // <-- ERROR DEL LOGO ARREGLADO

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!course) return null;

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/cursos" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            ← Volver al catálogo
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div>
              <span className="text-6xl block mb-6">{course.icon}</span>
              <h1 
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tighter"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {course.title}
              </h1>
              {/* ERROR DEL AUDIENCE ARREGLADO AQUÍ: */}
              <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
                <strong className="text-gray-200">Dirigido a:</strong> {course.audience} 
              </p>

              <a 
                href="https://wa.me/523314494403" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Solicitar Información por WhatsApp
              </a>
            </div>
            
            <div className="shrink-0 mt-8 md:mt-0 flex flex-col items-center gap-6">
              <img src={selloGold} alt="CERTIVALI GOLD SEAL" className="w-48 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
              {/* ERROR DEL LOGO ARREGLADO AQUÍ: */}
              <img src={certivaliTexto} alt="CERTIVALI TEXT" className="w-40 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h2 
          className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-2 tracking-tight uppercase"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          📖 Temario Oficial Completo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MAPEO DINÁMICO ARREGLADO (Adiós a la data hardcodeada) */}
          {course.modules.map((module, index) => (
            <div key={index} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl flex flex-col hover:border-purple-500/30 transition-colors shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{module.emoji}</span>
                <h3 
                  className="text-xl font-bold tracking-tight leading-tight uppercase"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: course.color }} // <- COLOR DINÁMICO
                >
                  {module.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {module.topics.map((topic, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <span className="text-xl font-bold" style={{ color: course.color }}>✓</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0A0E17] border border-gray-800 p-10 rounded-3xl flex flex-col items-center gap-10 shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center gap-10">
            <img src={selloGold} alt="CERTIVALI GOLD SEAL" className="w-48 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
            <img src={certivaliTexto} alt="CERTIVALI TEXT" className="w-40 object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]" />
          </div>
          <div className="text-center max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-tighter">Doble Acreditación Curricular con Reconocimiento <span className="text-purple-400">Internacional</span></h3>
            <p className="text-gray-300 leading-relaxed text-xl">
              Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por **CERTIVALI** al finalizar el curso. Nuestras acreditaciones poseen valor curricular formal, garantizando reconocimiento profesional a nivel global en empresas y organismos líderes del sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}