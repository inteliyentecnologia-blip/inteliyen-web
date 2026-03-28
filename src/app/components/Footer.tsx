import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-3">
            <img src={logo} alt="Inteliyen" className="h-10 md:h-12 w-auto" />
            <div>
              <h3
                className="text-xl md:text-2xl mb-1 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                INTELIYEN
              </h3>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agencia Tech Premium
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400 text-sm">
            <a href="#home" className="hover:text-purple-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Inicio
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nosotros
            </a>
            <a href="#services" className="hover:text-purple-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Servicios
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/10 text-center text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p>&copy; 2026 Inteliyen. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}