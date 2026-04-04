import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/30 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Usamos justify-start para pegar el botón a la izquierda */}
      <div className="max-w-7xl mx-auto px-6 flex justify-start items-center">
        
        {/* BOTÓN DE VOLVER AL INICIO */}
        <Link 
          to="/" 
          className="text-gray-300 hover:text-[#ff7eb6] flex items-center gap-3 text-sm md:text-base font-medium tracking-[0.2em] transition-colors uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {/* Icono de la flecha hacia atrás */}
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al Inicio
        </Link>

      </div>
    </header>
  );
}