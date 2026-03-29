import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  // --- ¡AQUÍ ESTÁ LA LÓGICA! ---
  // Creamos un "interruptor" para saber si el menú móvil está abierto o cerrado.
  // Por defecto, empieza cerrado (false).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para prender/apagar el interruptor al hacer clic.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTELIYEN
          </span>
        </Link>
        
        {/* Menú de navegación (ESCRITORIO - Siempre visible en pantallas grandes) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-purple-400 transition-colors">INICIO</Link>
          <a href="/#about" className="hover:text-purple-400 transition-colors">NOSOTROS</a>
          <a href="/#services" className="hover:text-purple-400 transition-colors">SERVICIOS</a>
          <Link to="/cursos" className="hover:text-purple-400 transition-colors">CURSOS</Link>
          <a href="/#contact" className="hover:text-purple-400 transition-colors">CONTACTO</a>
        </div>

        {/* Botón de menú para celular (SOLO visible en pantallas pequeñas) */}
        {/* LE AGREGAMOS LA FUNCIÓN onClick={toggleMenu} */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-300 hover:text-white p-2"
        >
          {/* El SVG de la hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* --- ¡AQUÍ ESTÁ EL MENÚ MÓVIL DESPLEGABLE! --- */}
      {/* Esta sección solo aparece si el interruptor 'isMenuOpen' está prendido (true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-purple-500/10">
          <div className="flex flex-col gap-6 p-8 text-lg font-medium text-gray-300">
            {/* Al hacer clic en un enlace, cerramos el menú con toggleMenu() */}
            <Link to="/" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">INICIO</Link>
            <a href="/#about" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">NOSOTROS</a>
            <a href="/#services" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">SERVICIOS</a>
            <Link to="/cursos" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">CURSOS</Link>
            <a href="/#contact" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">CONTACTO</a>
          </div>
        </div>
      )}
    </header>
  );
}