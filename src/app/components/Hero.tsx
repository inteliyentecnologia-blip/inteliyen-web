import logoUnified from '../../assets/logo-pro.png'; // IMPORTAMOS TU LOGO UNIFICADO

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* ORBES DE LUZ DE FONDO (Igual que en tus cursos, le dan profundidad pero están limpios) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* EL LOGO UNIFICADO: GRANDE, CENTRADO Y CON EL COLOR CORRECTO */}
        <div className="flex justify-center items-center">
          <img 
            src={logoUnified} 
            alt="Inteliyen Unified Core" 
            className="h-64 md:h-80 lg:h-[500px] w-auto object-contain transition-all duration-700 hover:scale-105" 
            style={{ 
              // Aplicamos filtros sutiles para asegurar que los neón de la imagen resalten sobre el negro
              filter: 'saturate(1.2) brightness(1.1) contrast(1.1) drop-shadow(0 0 35px rgba(168,85,247,0.4))'
            }}
          />
        </div>

      </div>
    </section>
  );
}