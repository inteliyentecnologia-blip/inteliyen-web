import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo que lleva al inicio */}
        <Link to="/" className="flex items-center gap-4">
          <span 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" 
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            INTELIYEN
          </span>
        </Link>
        
        {/* Menú de navegación */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-purple-400 transition-colors">INICIO</Link>
          <a href="/#about" className="hover:text-purple-400 transition-colors">NOSOTROS</a>
          <a href="/#services" className="hover:text-purple-400 transition-colors">SERVICIOS</a>
          
          {/* EL CAMBIO DE ORO: Aquí decía /courses y lo cambiamos a /cursos */}
          <Link to="/cursos" className="hover:text-purple-400 transition-colors">CURSOS</Link>
          
          <a href="/#contact" className="hover:text-purple-400 transition-colors">CONTACTO</a>
        </div>

        {/* Botón de menú para celular (si lo tienes configurado) */}
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}