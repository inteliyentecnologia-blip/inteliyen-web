import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
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
        <Link to="/cursos" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block font-bold uppercase tracking-widest text-sm">← Volver a Cursos</Link>

        <div className="bg-[#050505] border border-gray-800 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-12">
          <span className="text-6xl mb-6 block">{course.icon}</span>
          <h1 className="text-4xl md:text-5xl uppercase leading-tight text-white mb-6">
            {course.title}
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">{course.description}</p>
          <p className="text-cyan-400 mb-10 text-lg">🎯 <strong>Dirigido a:</strong> {course.audience}</p>
          <a href="https://wa.me/523314494403" target="_blank" className="inline-block bg-gradient-to-r from-[#A855F7] to-[#00F2FF] px-12 py-5 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,242,255,0.4)]">Solicitar Información por WhatsApp</a>
        </div>

        <h2 className="text-4xl text-center mb-12 uppercase">Temario del Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {course.modules.map((m, i) => {
            const parts = m.split('\n•');
            return (
              <div key={i} className="bg-[#050505] border border-gray-800 p-10 rounded-[2rem] hover:border-[#A855F7]/40 transition-colors">
                <h3 className="text-2xl text-cyan-400 mb-6">{parts[0]}</h3>
                <ul className="space-y-4">
                  {parts.slice(1).map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base leading-relaxed">{bullet.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-[#050505] border border-yellow-500/20 p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <img src={selloGold} alt="Cert" className="w-48 object-contain" />
          <div className="text-center md:text-left">
            <h3 className="text-3xl text-white mb-4 uppercase">Validación Curricular Internacional</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Diploma avalado por CERTIVALI con valor curricular formal a nivel global.</p>
          </div>
        </div>
      </div>
    </div>
  );
}