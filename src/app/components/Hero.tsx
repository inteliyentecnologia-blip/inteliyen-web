export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Luces de fondo palpitantes (se mantienen igual para dar profundidad) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* LOGO DE CEREBRO: Centrado, proporcionado y con brillo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/logo.png" 
            alt="Cerebro Inteliyen Core" 
            className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse" 
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* NOMBRE: Centrado, Orbitron y colores NEÓN VIVOS */}
        <div className="flex justify-center items-baseline mb-8">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-[0.1em] flex justify-center"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {/* INTELIYEN: Degradado vivo idéntico al logo original */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea]">
              INTELIYEN
            </span>
          </h1>
          
          {/* EL PUNTO FINAL: Rosa neón para cerrar el diseño */}
          <div className="w-4 h-4 rounded-full bg-[#ff7eb6] ml-2 drop-shadow-[0_0_10px_rgba(255,126,182,0.6)]"></div>
        </div>

      </div>
    </section>
  );
}