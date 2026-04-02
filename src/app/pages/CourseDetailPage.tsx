import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Brain, Briefcase, Search, Settings } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import selloGold from '../../assets/sello-garantia.png';

// Función para asignar un icono chingón a cada módulo automáticamente
const getModuleIcon = (index: number) => {
  switch (index) {
    case 0: return <Brain className="w-8 h-8 text-pink-400" />;
    case 1: return <Briefcase className="w-8 h-8 text-amber-600" />;
    case 2: return <Search className="w-8 h-8 text-slate-300" />;
    case 3: return <Settings className="w-8 h-8 text-cyan-400" />;
    default: return <CheckCircle2 className="w-8 h-8 text-purple-500" />;
  }
};

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
    <div className="min-h-screen bg-black text-white font-sans pb-20">
      
      {/* HEADER RESTAURADO A TU DISEÑO ORIGINAL */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/cursos" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            ← Volver a Cursos
          </Link>
          
          <div className="bg-[#0A0E17] border border-gray-800 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <span className="text-6xl block mb-6">{course.icon}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight">
              {course.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 font-semibold bg-purple-500/10">
                <span className="mr-2">↗</span> {course.audienceType}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold bg-cyan-500/10">
                <span className="mr-2">⏱</span> {course.duration}
              </span>
            </div>

            <a 
              href="https://wa.me/523314494403" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Información por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* TEMARIO - RESTAURADO A GRID DE 2 COLUMNAS CON PALOMITAS MORADAS */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide">
          Temario del Curso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {course.modules.map((moduleString, index) => {
            // Separamos el título del módulo de los bullets
            const parts = moduleString.split('\n•');
            const moduleTitle = parts[0];
            const bullets = parts.slice(1);

            return (
              <div key={index} className="bg-[#0A0E17] border border-gray-800 p-8 rounded-3xl flex flex-col h-full shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 shrink-0">
                    {getModuleIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {moduleTitle}
                    </h3>
                    <p className="text-cyan-500 text-sm font-semibold">
                      Aprender a integrar IA en los procesos diarios.
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 flex-grow">
                  {bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {bullet.trim()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* VALIDACIÓN CURRICULAR - RESTAURADA A TU DISEÑO DORADO Y SIN LA 'V' */}
        <div className="mt-16 bg-[#0A0E17] border border-yellow-500/20 p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center md:items-start gap-10 shadow-2xl">
          <div className="shrink-0">
            <img 
              src={selloGold} 
              alt="CERTIVALI" 
              className="w-48 object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]" 
            />
          </div>
          <div className="flex-grow text-center md:text-left pt-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-6 tracking-tight leading-tight">
              Validación Curricular de Valor <br className="hidden md:block" /> Internacional
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Al concluir con éxito este programa, INTELIYEN otorga un diploma avalado por <strong className="text-white">CERTIVALI (Institución de Validación Internacional)</strong>. Todas nuestras acreditaciones cuentan con <strong className="text-yellow-500">valor curricular formal</strong>, garantizando que tus nuevas competencias son reconocidas por empresas y organismos a nivel global.
            </p>
          </div>
        </div>

        {/* CTA FINAL - RESTAURADO A TU DISEÑO MORADO */}
        <div className="mt-12 bg-gradient-to-b from-[#0A0E17] to-purple-900/20 border border-purple-500/20 p-12 rounded-[2rem] text-center shadow-2xl">
          <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight">¿Dudas sobre este programa?</h3>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
            Nuestro equipo puede adaptar este temario a las necesidades específicas de tu empresa o perfil profesional.
          </p>
          <a 
            href="https://wa.me/523314494403" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-white text-black font-extrabold rounded-full text-lg hover:bg-gray-200 transition-colors"
          >
            Hablar con un Asesor
          </a>
        </div>

      </div>
    </div>
  );
}