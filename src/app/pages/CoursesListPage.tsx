import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import selloGold from '../../assets/sello-garantia.png';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!course) return null;

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <Link to="/cursos" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 font-bold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-5 h-5" /> Volver a Cursos
        </Link>

        <div className="bg-[#050505] border border-gray-800 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-12">
          <span className="text-7xl mb-6 block">{course.icon}</span>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter uppercase leading-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {course.title}
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">{course.description}</p>
          <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-2xl mb-10">
            <p className="text-cyan-400 text-lg uppercase tracking-wide">
              <strong>🎯 Dirigido a:</strong> {course.audience}
            </p>
          </div>
          <a 
            href={`https://wa.me/523314494403?text=Me interesa el curso de ${course.title}`}
            target="_blank" 
            className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Inscribirme Ahora por WhatsApp
          </a>
        </div>

        <h2 
          className="text-4xl font-bold text-center mb-12 uppercase tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Temario del Curso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {course.modules.map((m, i) => {
            const [title, ...rest] = m.split('\n•');
            return (
              <div key={i} className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 p-10 rounded-[2rem] hover:border-purple-500/40 transition-colors">
                <h3 
                  className="text-2xl font-bold text-purple-300 mb-6 uppercase"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {title}
                </h3>
                <ul className="space-y-4">
                  {rest.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base leading-relaxed">{bullet.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-[#050505] border border-yellow-500/20 p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <img src={selloGold} alt="Validación" className="w-48 object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
          <div className="text-center md:text-left">
            <h3 
              className="text-3xl font-extrabold text-white mb-4 uppercase"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Validación Curricular Internacional
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por **CERTIVALI (Institución de Validación Internacional)**. Todas nuestras acreditaciones cuentan con valor curricular formal a nivel global.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}