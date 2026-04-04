import logoPng from '../../assets/logo.png';

export function Hero() {
  return (
    <section
      id="home"
      // Usamos 100dvh para que se adapte perfecto a celulares con barras de navegación y px-4 para dar margen
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black text-center px-4 md:px-8"
    >
      {/* Luces de fondo: Más chicas en móvil para no saturar, crecen en desktop */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/12 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-cyan-400/12 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-pink-400/6 rounded-full blur-[60px] md:blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Contenido centrado — logo + nombre */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5 mt-[-2rem] md:mt-0">

        {/* Logo PNG */}
        <div
          className="drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]"
          style={{ animation: 'floatLogo 6s ease-in-out infinite' }}
        >
          {/* Agregué h-36 para móvil, sm:h-48 para tablet */}
          <img
            src={logoPng}
            alt="Inteliyen"
            className="h-36 sm:h-48 md:h-60 lg:h-72 w-auto"
          />
        </div>

        {/* Nombre */}
        <h1
          className="font-medium tracking-[0.18em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            // Subí el mínimo a 32px y el máximo a 64px para que tenga más peso visual
            fontSize: 'clamp(32px, 6vw, 64px)',
          }}
        >
          INTELIYEN
        </h1>

        {/* Línea decorativa: Se hace un poco más ancha en pantallas grandes */}
        <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-[#b166cc] to-transparent opacity-50" />

      </div>

      {/* Tagline — pegado al fondo, con un poco más de margen en móvil */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0 flex justify-center z-10 px-4">
        <p
          className="text-white/40 tracking-[0.15em] md:tracking-[0.3em] uppercase text-center leading-relaxed"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            // Un pelito más grande el mínimo para que se lea bien en el celular
            fontSize: 'clamp(10px, 1.2vw, 12px)',
          }}
        >
          Inteligencia artificial · Educación · Desarrollo
        </p>
      </div>

      {/* Animación float */}
      <style>{`
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}