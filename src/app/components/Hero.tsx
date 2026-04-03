import logoPro from '../../assets/logo-pro.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center">
          <img 
            src={logoPro} 
            alt="Inteliyen Pro" 
            className="h-64 md:h-96 lg:h-[500px] w-auto object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-700 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}