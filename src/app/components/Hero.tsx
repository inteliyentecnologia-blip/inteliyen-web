import logoPng from '../../assets/logo.png';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-center"
    >
      {/* Luces de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/12 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/12 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-400/6 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Logo PNG grande */}
        <div
          className="drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]"
          style={{ animation: 'floatLogo 6s ease-in-out infinite' }}
        >
          <img
            src={logoPng}
            alt="Inteliyen"
            className="h-64 md:h-80 lg:h-96 w-auto"
          />
        </div>

        {/* Nombre — letras más chicas y elegantes */}
        <h1
          className="font-medium tracking-[0.18em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(28px, 5vw, 64px)',
          }}
        >
          INTELIYEN
        </h1>

        {/* Línea decorativa */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#b166cc] to-transparent opacity-50" />

        {/* Tagline sutil */}
        <p
          className="text-white/30 tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(9px, 1.4vw, 12px)',
          }}
        >
          Inteligencia artificial · Educación · Futuro
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