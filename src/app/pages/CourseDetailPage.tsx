import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle2, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { courses } from '../data/coursesData';

export function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (!course) {
      navigate('/cursos');
      return;
    }
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [course, navigate]);

  if (!course) {
    return null;
  }

  // Configuración de WhatsApp Premium para empresas
  const whatsappNumber = "523314494403";
  const whatsappMessage = `Hola, gracias por contactar a INTELIYEN, tu agencia tech premium. 🚀

Estoy interesado en recibir una cotización y asesoría sobre la capacitación empresarial: *${course.title} ${course.emoji}*

Debido a que valoramos la privacidad corporativa, proporciono mis datos para que un asesor especializado me contacte:

📱 Teléfono: 
📧 Correo corporativo: 
🏢 Nombre de la empresa: 

¡Quedo a la espera de su respuesta para continuar!`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Simplificado para página de curso */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              INTELIYEN
            </span>
          </Link>
          <Link
            to="/cursos"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Capacitaciones</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #0a0014 50%, #000000 100%)'
        }}
      >
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Course Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"
                style={{ background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})` }}
              ></div>
              
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="text-7xl">{course.emoji}</div>
                  <div className="flex-1">
                    <h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        background: `linear-gradient(135deg, ${course.color.from}, ${course.color.to})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
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
                      <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex justify-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Cotizar para mi Empresa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content (Syllabus) */}
          {course.modules && course.modules.length > 0 && (
            <div className={`mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Plan de Capacitación
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {course.modules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-900/10 to-cyan-900/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">{module.emoji}</span>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-purple-300 mb-2">
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
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {module.error && (
                      <div className="flex items-start gap-2 bg-orange-900/20 border border-orange-500/30 rounded-lg p-3 mt-4">
                        <AlertCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <p className="text-orange-300 text-sm">{module.error}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Footer */}
              <div className="mt-12 text-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
                    <p className="text-gray-400 mb-6">
                      🏢 Grupos corporativos • 📱 Soporte vía WhatsApp • 🏆 Certificación de la Agencia
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Inicia la Capacitación
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 bg-black/90 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © 2026 Inteliyen. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}