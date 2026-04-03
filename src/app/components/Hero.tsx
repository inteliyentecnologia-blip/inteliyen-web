import logoCerebro from '../../assets/logo.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Luces de fondo neón - Ajustadas para no estorbar */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* EL CEREBRO: Centrado y con brillo neón */}
        <div className="mb-4">
          <img 
            src={logoCerebro} 
            alt="Cerebro Inteliyen" 
            className="h-48 md:h-64 lg:h-80 w-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* EL NOMBRE: Orbitron Medium con los colores neón vivos */}
        <h1 
          className="text-7xl md:text-9xl lg:text-[140px] font-medium tracking-[0.1em] leading-none"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            INTELIYEN
          </span>
        </h1>

      </div>
    </section>
  );
}