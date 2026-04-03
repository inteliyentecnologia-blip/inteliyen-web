export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Luces de fondo palpitantes intactas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* LOGO DE CEREBRO: Centrado, un poco más grande y arreglado (usando /assets/logo.png) */}
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/logo.png" // OJO: Asegúrate de que esta imagen SEA EL CEREBRO
            alt="Inteliyen Cerebral Core" 
            className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse" 
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* NOMBRE INTELIYEN: Usamos TU imagen original pero con colores vivos por código */}
        <div className="flex justify-center">
          <img 
            src="/assets/logo-pro.png" // OJO: Esta imagen debe tener el nombre en TU fuente original
            alt="Inteliyen" 
            className="w-auto h-24 md:h-32 lg:h-40 object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-all duration-700 hover:scale-105" 
            style={{ 
              // Aquí está la magia: Saturamos agresivamente (saturate(2.2)) para revivir esos colores neón originales que se veían descoloridos
              filter: 'saturate(2.2) brightness(1.3) contrast(1.1) drop-shadow(0 0 45px rgba(168,85,247,0.4))'
            }}
          />
        </div>

      </div>
    </section>
  );
}