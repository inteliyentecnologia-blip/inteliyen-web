import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectamos si estamos en la raíz, en la lista de cursos o dentro de un curso
  const isHomePage = pathname === '/';
  const isCoursesList = pathname === '/cursos';
  const isCourseDetail = pathname.startsWith('/cursos/');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled || isCourseDetail || isCoursesList
          ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center min-h-[40px]">
        
        {/* CASO 1: DETALLE DEL CURSO - Solo flecha y "Volver a Cursos" */}
        {isCourseDetail && (
          <button 
            onClick={() => navigate('/cursos')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Volver a Cursos
            </span>
          </button>
        )}

        {/* CASO 2: LISTA DE CURSOS - Solo flecha y "Volver al Inicio" */}
        {isCoursesList && (
          <Link 
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Volver al Inicio
            </span>
          </Link>
        )}

        {/* CASO 3: HOME - Menú centrado normal (se oculta en los otros casos) */}
        {isHomePage && (
          <nav className="hidden md:flex gap-10 text-xs lg:text-sm tracking-[0.25em] font-medium uppercase mx-auto" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
            <Link to="/cursos" className="text-gray-400 hover:text-white transition-colors">Cursos</Link>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </nav>
        )}

      </div>
    </header>
  );
}