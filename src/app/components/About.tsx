import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Users, Zap } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Más de 10 años haciendo tecnología en México.
            </h2>
            <h3 className="text-xl md:text-2xl text-white mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ahora la ponemos a trabajar para tu empresa.
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>
                INTELIYEN fue fundada por un equipo de desarrolladores y project managers con más de una década de experiencia en proyectos tecnológicos para empresas mexicanas. Conocemos los procesos, los presupuestos y las realidades del mercado local.
              </p>
              <p className="text-purple-300 font-medium">
                Nuestra diferencia está en que no solo te decimos qué hacer: desarrollamos el software que tu operación necesita y, de forma independiente, ofrecemos cursos especializados para que tu equipo domine las herramientas tecnológicas del mundo actual.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Experiencia Local</h3>
              <p className="text-gray-400">Entendemos el entorno empresarial mexicano para ofrecer soluciones que realmente funcionen en tu día a día.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <Zap className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Software a Medida</h3>
              <p className="text-gray-400">Nos adaptamos a tu proceso operativo, no forzamos a tu empresa a adaptarse a un software prefabricado.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-colors">
              <Users className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Capacitación Real</h3>
              <p className="text-gray-400">Cursos diseñados para profesionales y equipos de trabajo, no para ingenieros. Herramientas útiles desde el día uno.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}