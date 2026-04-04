import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, TrendingUp, Target } from 'lucide-react';
import { courses } from '../data/coursesData';

import selloGold from '../../assets/sello-garantia.png';
import certivaliLogo from '../../assets/certivali.png'; 

export default function CourseDetailPage() {
  const params = useParams<{ id?: string; courseId?: string }>(); 
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const idToUse = params.id || params.courseId;
  const course = courses?.find((c) => c.id === idToUse);

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
      {/* ELIMINADO: El header que estaba aquí se borró para usar el global */}

      <main className="pt-24 md:pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)' }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* TARJETA PRINCIPAL DEL CURSO */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" style={{ background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` }}></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="text-7xl pt-2">{course.emoji}</div>
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif', background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {course.title}
                    </h1>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                        <TrendingUp className="w-4 h-4" />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
                      <div className="flex items-start gap-3">
                        <Target className="w-6 h-6 flex-shrink-0" style={{ color: course.color.from }} />
                        <p className="text-gray-300 leading-relaxed">
                          <strong className="text-white block mb-1">Dirigido a:</strong>
                          {course.targetAudience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Solicitar Información por WhatsApp
                  </a>
                </div>

                <img 
                  src={certivaliLogo} 
                  alt="Avalado por Certivali" 
                  className="absolute bottom-6 right-6 md:bottom-8 md:right-8 h-8 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                />
              </div>
            </div>
          </div>

          {/* TEMARIO */}
          <div className={`mt-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Temario del Curso
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {course.modules?.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif', color: course.color.from }}>
                    {module.title}
                  </h4>
                  <ul className="space-y-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: course.color.from }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
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
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFD700] mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Certificación con Validez Internacional
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Al concluir con éxito este programa, <strong className="text-white">INTELIYEN</strong> otorga un diploma avalado por <strong className="text-white">CERTIVALI</strong>. Todas nuestras acreditaciones cuentan con <strong className="text-white">valor curricular formal</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-purple-500/10 bg-black/90 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © 2026 Inteliyen. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}