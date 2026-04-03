import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import selloGold from '../../assets/sello-garantia.png';

export default function CourseDetailPage() {
  const params = useParams<{ id?: string; courseId?: string }>(); 
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const idToUse = params.id || params.courseId;
  const course = coursesData?.find((c) => c.id === idToUse);

  useEffect(() => {
    if (!course) {
      navigate('/cursos');
      return;
    }
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [course, navigate]);

  if (!course) return null;

  const whatsappNumber = "523314494403"; 
  const whatsappMessage = encodeURIComponent(`¡Hola! Me interesa inscribirme al curso de ${course.title} ${course.emoji}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link to="/cursos" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Cursos</span>
          </Link>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)' }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` }}></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="text-7xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif', background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {course.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        <TrendingUp className="w-4 h-4" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8">{course.description}</p>

                <div className="flex justify-start">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Solicitar Información por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Temario del Curso
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {course.modules?.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{module.emoji}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif', color: course.color.from }}>
                        {module.title}
                      </h4>
                      <p className="text-sm text-cyan-400 italic mb-4">
                        Objetivo: {module.objective}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: course.color.from }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  {module.error && (
                    <div className="flex items-start gap-2 bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-6">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-red-300 text-sm">{module.error}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#050505] border border-yellow-500/20 p-10 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl relative">
              <div className="w-48 shrink-0 flex justify-center">
                <img 
                  src={selloGold} 
                  alt="Sello de Acreditación Internacional CERTIVALI" 
                  className="max-w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" 
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 
                  className="text-2xl md:text-3xl font-extrabold text-[#FFD700] mb-6"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  Validación Curricular de Valor Internacional
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Al concluir con éxito este programa, <strong className="text-white">INTELIYEN</strong> otorga un diploma avalado por <strong className="text-white">CERTIVALI (Institución de Validación Internacional)</strong>. Todas nuestras acreditaciones cuentan con <strong className="text-white">valor curricular formal</strong>, garantizando que tus nuevas competencias son reconocidas por empresas y organismos a nivel global.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}