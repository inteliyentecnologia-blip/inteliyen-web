import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, BrainCircuit, LineChart, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Desarrollo de software a la medida",
    type: "Desarrollo",
    description: "Construimos la solución tecnológica exacta que tu operación necesita: desde sistemas internos hasta plataformas digitales. Nos adaptamos a tu proceso, no al revés.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: LineChart,
    title: "Consultoría tecnológica",
    type: "Consultoría",
    description: "Analizamos tu operación e identificamos dónde la tecnología puede reducir costos, eliminar cuellos de botella y escalar tu negocio.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Implementación de IA",
    type: "Desarrollo",
    description: "Integramos herramientas de Inteligencia Artificial en tus procesos actuales para automatizar tareas, analizar datos y tomar mejores decisiones.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: GraduationCap,
    title: "Capacitación empresarial",
    type: "Capacitación",
    description: "Cursos especializados en tecnología, IA, datos y metodologías ágiles. Diseñados para equipos de trabajo, no para ingenieros.",
    color: "from-emerald-500 to-teal-500"
  }
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Lo que hacemos por tu empresa
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dos líneas de negocio independientes diseñadas para modernizar tu operación desde el código hasta tu equipo de trabajo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-800`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-gray-400 bg-gray-900 rounded-full border border-gray-800">
                      {service.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}