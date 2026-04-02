import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find((c) => c.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) return null;

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <Link to="/cursos" className="text-cyan-400 mb-8 inline-block">
          ← Volver al catálogo
        </Link>

        {/* Tarjeta Principal */}
        <div className="bg-[#0A0E17] border border-gray-800 p-10 rounded-[2rem] shadow-2xl">
          <span className="text-6xl mb-6 block">{course.icon}</span>
          <h1 className="text-5xl font-bold mb-6">{course.title}</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {course.description}
          </p>
          <div className="flex gap-4 mb-10">
            <span className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30 font-bold">
              {course.audienceType}
            </span>
            <span className="bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/30 font-bold">
              {course.duration}
            </span>
          </div>
          <a 
            href="https://wa.me/523314494403" 
            className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 px-10 py-4 rounded-full font-bold text-lg"
          >
            Solicitar Información por WhatsApp
          </a>
        </div>

        {/* Temario Original de 2 Columnas */}
        <h2 className="text-4xl font-bold text-center mt-20 mb-12 uppercase">Temario del Curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {course.modules.map((m, i) => {
            const parts = m.split('\n•');
            return (
              <div key={i} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{parts[0]}</h3>
                <ul className="space-y-4">
                  {parts.slice(1).map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold mt-1">✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{bullet.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bloque de Validación */}
        <div className="mt-20 bg-[#0A0E17] border border-gray-800 p-12 rounded-[2rem] text-center">
          <h3 className="text-3xl font-bold mb-6">Validación Curricular de Valor Internacional</h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por CERTIVALI (Institución de Validación Internacional). Todas nuestras acreditaciones cuentan con valor curricular formal a nivel global.
          </p>
        </div>
      </div>
    </div>
  );
}