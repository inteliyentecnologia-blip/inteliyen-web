export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Luces de fondo neón potentes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[130px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* EL CEREBRO: Usamos la imagen original pero con brillo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/logo.png" 
            alt="Cerebro Inteliyen" 
            className="h-40 md:h-56 lg:h-72 w-auto drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] animate-pulse"
          />
        </div>

        {/* EL NOMBRE: ORBITRON con colores vivos neón */}
        <h1 
          className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-[0.15em] flex justify-center"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea] drop-shadow-[0_0_20px_rgba(177,102,204,0.5)]">
            INTELIYEN
          </span>
        </h1>

      </div>
    </section>
  );
}