import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTELIYEN
          </span>
        </Link>
        
        {/* Menú de navegación Escritorio */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-purple-400 transition-colors">INICIO</Link>
          <a href="/#about" className="hover:text-purple-400 transition-colors">NOSOTROS</a>
          <a href="/#services" className="hover:text-purple-400 transition-colors">SERVICIOS</a>
          <Link to="/cursos" className="hover:text-purple-400 transition-colors">CURSOS</Link>
          <a href="/#contact" className="hover:text-purple-400 transition-colors">CONTACTO</a>
        </div>

        {/* Botón Hamburguesa Celular */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              // Ícono de "X" cuando está abierto
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Ícono de 3 barras cuando está cerrado
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú Desplegable Celular (Forzado a sobreponerse) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-purple-500/20 shadow-2xl">
          <div className="flex flex-col p-6 space-y-2 text-center text-lg font-medium text-gray-300">
            <Link to="/" onClick={toggleMenu} className="block py-3 hover:text-purple-400 transition-colors">INICIO</Link>
            <a href="/#about" onClick={toggleMenu} className="block py-3 hover:text-purple-400 transition-colors">NOSOTROS</a>
            <a href="/#services" onClick={toggleMenu} className="block py-3 hover:text-purple-400 transition-colors">SERVICIOS</a>
            <Link to="/cursos" onClick={toggleMenu} className="block py-3 hover:text-purple-400 transition-colors">CURSOS</Link>
            <a href="/#contact" onClick={toggleMenu} className="block py-3 hover:text-purple-400 transition-colors">CONTACTO</a>
          </div>
        </div>
      )}
    </header>
  );
}