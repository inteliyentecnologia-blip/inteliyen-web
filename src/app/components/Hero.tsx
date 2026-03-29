import { ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = "523314494403";
  const whatsappMessage = `Hola, me interesa platicar con un asesor de INTELIYEN. Quiero saber cómo la tecnología y la IA pueden ayudar a mi empresa.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Inteliyen" className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          INTELIYEN
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Tu empresa puede usar Inteligencia Artificial.<br/>
          <span className="text-cyan-400">Nosotros te mostramos cómo.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-3xl mx-auto font-semibold">
          Software a tu medida. Capacitación que impulsa a tu equipo.
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Desarrollamos software a la medida y capacitamos a los equipos que lo operan. En INTELIYEN, la tecnología no llega sola.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center gap-2 text-lg hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Quiero empezar
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border-2 border-purple-500/50 rounded-full text-purple-300 font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ver servicios
          </button>
        </div>
      </div>
    </section>
  );
}