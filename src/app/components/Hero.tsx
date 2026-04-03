import logoSvg from '../../assets/logo.svg';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Luces de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* LOGO SVG: Importado correctamente, más pequeño y con brillo */}
        <div className="mb-6">
          <img 
            src={logoSvg} 
            alt="Cerebro Inteliyen" 
            className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
          />
        </div>

        {/* NOMBRE: Tipografía Orbitron Medium con los colores neón vivos */}
        <h1 
          className="text-6xl md:text-8xl lg:text-[120px] font-medium tracking-[0.1em] leading-none"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea]">
            INTELIYEN
          </span>
        </h1>

      </div>
    </section>
  );
}