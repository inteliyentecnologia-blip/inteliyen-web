import logoSvg from '../../assets/logo.svg';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Luces de fondo (Puse unas más potentes para que el logo resalte) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* LOGO SVG: Centrado, con tu tipografía original y colores VIVOS */}
        <div className="flex justify-center items-center">
          <img 
            src={logoSvg} 
            alt="Inteliyen Logo" 
            className="h-80 md:h-[450px] lg:h-[550px] w-auto object-contain transition-all duration-700 hover:scale-105" 
            style={{ 
              // Forzamos que los colores del SVG se vean súper vibrantes y neón
              filter: 'saturate(2.5) brightness(1.2) drop-shadow(0 0 40px rgba(168,85,247,0.5))'
            }}
          />
        </div>

      </div>
    </section>
  );
}