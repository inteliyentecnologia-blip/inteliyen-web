import logoPro from '../../assets/logo-pro.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Luces de fondo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* LOGO CON FILTROS CORREGIDOS */}
        <div className="flex justify-center items-center">
          <img 
            src={logoPro} 
            alt="Inteliyen Pro" 
            className="h-64 md:h-96 lg:h-[500px] w-auto object-contain transition-all duration-700 hover:scale-105" 
            style={{ 
              filter: 'saturate(2) brightness(1.3) contrast(1.1) drop-shadow(0 0 30px rgba(168,85,247,0.4))'
            }}
          />
        </div>

      </div>
    </section>
  );
}