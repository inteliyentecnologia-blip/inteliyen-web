import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
        <Link to="/cursos" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block font-bold uppercase tracking-widest text-sm">
          ← Volver a Cursos
        </Link>

        <div className="bg-[#0A0E17] border border-gray-800 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <span className="text-6xl mb-6 block">{course.icon}</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter uppercase">{course.title}</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">{course.description}</p>
          
          <div className="flex gap-4 mb-10">
            <span className="bg-purple-500/10 text-purple-400 px-6 py-2 rounded-full border border-purple-500/30 font-bold uppercase text-xs tracking-widest">
              {course.audienceType}
            </span>
            <span className="bg-cyan-500/10 text-cyan-400 px-6 py-2 rounded-full border border-cyan-500/30 font-bold uppercase text-xs tracking-widest">
              {course.duration}
            </span>
          </div>

          <a href="https://wa.me/523314494403" target="_blank" className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 px-12 py-5 rounded-full font-extrabold text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all">
            Solicitar Información por WhatsApp
          </a>
        </div>

        <h2 className="text-4xl font-bold text-center mt-20 mb-12 uppercase tracking-tighter">Temario del Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.modules.map((m, i) => (
            <div key={i} className="bg-[#0A0E17] border border-gray-800 p-10 rounded-[2rem] hover:border-cyan-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 tracking-tight">{m.split('\n•')[0]}</h3>
              <ul className="space-y-4">
                {m.split('\n•').slice(1).map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold text-xl mt-[-2px]">✓</span>
                    <span className="text-gray-300 text-base leading-relaxed">{bullet.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0A0E17] border border-yellow-500/20 p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <img src={selloGold} alt="Cert" className="w-48 object-contain" />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tighter">Validación Curricular Internacional</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Diploma avalado por CERTIVALI con valor curricular formal a nivel global.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}