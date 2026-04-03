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
      {/* Fondo con luces de neón */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* LOGO: Tamaño perfecto */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Inteliyen Logo" className="h-24 md:h-32 lg:h-36 w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse" style={{ animationDuration: '4s' }} />
        </div>

        {/* MARCA: Elegante y espaciada */}
        <h2 
          className="text-sm md:text-base text-purple-400 font-bold tracking-[0.4em] mb-4 uppercase" 
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Inteliyen
        </h2>

        {/* TITULAR: Tu frase matona en un tamaño equilibrado */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Lleva tu empresa al siguiente nivel con <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Inteligencia Artificial.
          </span>
        </h1>

        {/* INFORMACIÓN DE INTELIYEN: Lo que querías recuperar pero bien acomodado */}
        <p 
          className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <strong className="text-white font-semibold">Software a tu medida y capacitación que impulsa a tu equipo.</strong><br className="hidden sm:block" />
          Desarrollamos soluciones a la medida y enseñamos a operarlas. En INTELIYEN, la tecnología no llega sola.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center gap-2 text-lg hover:scale-105"
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