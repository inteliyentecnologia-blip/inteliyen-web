import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!course) return null;

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <Link to="/cursos" className="text-cyan-400 mb-8 inline-block">← Volver a Cursos</Link>
        <div className="bg-[#0A0E17] border border-gray-800 p-10 rounded-[2rem] shadow-2xl">
          <span className="text-6xl mb-6 block">{course.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{course.description}</p>
          <a href="https://wa.me/523314494403" className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 px-10 py-4 rounded-full font-bold text-lg">
            Solicitar Información por WhatsApp
          </a>
        </div>
        
        <h2 className="text-4xl font-bold text-center mt-20 mb-12">Temario del Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.modules.map((m, i) => (
            <div key={i} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{m.split('\n')[0]}</h3>
              <p className="text-gray-300 text-sm whitespace-pre-line">{m.split('\n').slice(1).join('\n')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}