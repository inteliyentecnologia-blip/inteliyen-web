import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-purple-500/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        {/* Navegación centrada con tu fuente Orbitron */}
        <nav 
          className="hidden md:flex gap-10 text-xs lg:text-sm tracking-[0.25em] font-medium uppercase" 
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a>
          <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors duration-300">Nosotros</a>
          <a href="#servicios" className="text-gray-400 hover:text-white transition-colors duration-300">Servicios</a>
          <a href="#cursos" className="text-gray-400 hover:text-white transition-colors duration-300">Cursos</a>
          <a href="#contacto" className="text-gray-400 hover:text-white transition-colors duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
}