import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll si el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === '/';
  const isCoursesList = pathname === '/cursos';
  const isCourseDetail = pathname.startsWith('/cursos/');

  const navLinks = [
    { name: 'Inicio', href: '/#home' },
    { name: 'Nosotros', href: '/#about' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Cursos', href: '/cursos', isLink: true },
    { name: 'Contacto', href: '/#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled || isCoursesList || isCourseDetail
            ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between md:justify-center">
          
          {/* 1. BOTONES DE REGRESO (Solo en Cursos) */}
          {(isCoursesList || isCourseDetail) && (
            <button 
              onClick={() => navigate(isCourseDetail ? '/cursos' : '/')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {isCourseDetail ? 'Volver a Cursos' : 'Volver al Inicio'}
              </span>
            </button>
          )}

          {/* 2. MENÚ DESKTOP (Solo en Home) */}
          {isHomePage && (
            <nav className="hidden md:flex gap-10 text-xs lg:text-sm tracking-[0.25em] font-medium uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {navLinks.map((link) => (
                link.isLink ? 
                <Link key={link.name} to={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link> :
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
              ))}
            </nav>
          )}

          {/* 3. BOTÓN HAMBURGUESA (Solo en Home y Móvil) */}
          {isHomePage && (
            <button 
              className="md:hidden text-white p-2 cursor-pointer active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* OVERLAY MENÚ MÓVIL */}
      <div 
        className={`fixed inset-0 z-[10000] bg-black/98 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center items-center md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-white p-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-10 text-center text-2xl tracking-[0.2em] font-medium uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {navLinks.map((link) => (
            link.isLink ?
            <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">{link.name}</Link> :
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">{link.name}</a>
          ))}
        </nav>
      </div>
    </>
  );
}