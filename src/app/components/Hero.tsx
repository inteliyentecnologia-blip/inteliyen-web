import logoSvg from '../../assets/logo.svg';

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
      <div className="relative z-10 flex flex-col items-center gap-7">

        {/* Logo */}
        <div
          className="drop-shadow-[0_0_30px_rgba(168,85,247,0.65)]"
          style={{ animation: 'floatLogo 6s ease-in-out infinite' }}
        >
          <img
            src={logoSvg}
            alt="Inteliyen"
            className="h-36 md:h-48 lg:h-56 w-auto"
          />
        </div>

        {/* Nombre */}
        <h1
          className="font-medium tracking-[0.12em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] via-[#ff7eb6] to-[#4deeea]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(52px, 10vw, 110px)',
          }}
        >
          INTELIYEN
        </h1>

        {/* Línea decorativa */}
        <div className="w-28 h-px bg-gradient-to-r from-transparent via-[#b166cc] to-transparent opacity-60" />

        {/* Tagline */}
        <p
          className="text-white/35 tracking-[0.35em] uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(11px, 1.8vw, 15px)',
          }}
        >
          Inteligencia artificial · Educación · Futuro
        </p>

        {/* CTA */}
        <button
          className="mt-2 border border-[#b166cc]/50 text-white px-10 py-3.5 text-[13px] tracking-[0.2em] uppercase hover:border-[#b166cc] hover:text-[#ff7eb6] hover:shadow-[0_0_25px_rgba(177,102,204,0.3)] transition-all duration-300"
          style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 500 }}
        >
          Explorar cursos
        </button>
      </div>

      {/* Animación float para el logo */}
      <style>{`
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}