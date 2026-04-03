import logoPro from '../../assets/logo-pro.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-10"
    >
      {/* ORBES DE FONDO SUTILES */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* LOGO PRO ESCALADO (Masivo y Centrado) */}
        <div className="flex justify-center items-center">
          <img 
            src={logoPro} 
            alt="Inteliyen Pro" 
            className="h-[400px] md:h-[550px] lg:h-[700px] w-auto object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-transform duration-700 hover:scale-105" 
          />
        </div>

      </div>
    </section>
  );
}