export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Luces de fondo (se mantienen igual) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* LOGO DE CEREBRO: Mantenemos la posición y el tamaño masivo de la imagen original */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/logo.png" // OJO: Asegúrate de que esta imagen SEA EL CEREBRO ORIGINAL
            alt="Cerebro Inteliyen Core" 
            className="h-64 md:h-80 lg:h-96 w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse" 
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* TITULAR DE MARCA: Usamos colores VIVOS e IDÉNTICOS en el degradado */}
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl mb-12 flex flex-col items-center leading-none"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          {/* Fíjate aquí: Usamos el degradado neón vibrante idéntico a tu foto */}
          <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-300 via-cyan-300 to-blue-500 animate-pulse tracking-wider" style={{ animationDuration: '4s' }}>
            INTELIYEN
          </span>
          
          <span 
            className="block text-sm md:text-base lg:text-lg text-purple-400 font-bold tracking-[0.4em] mt-4 uppercase" 
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Digital Core
          </span>
        </h1>

      </div>
    </section>
  );
}