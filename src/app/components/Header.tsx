import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para el fondo oscuro al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para bloquear el scroll de la página cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-purple-500/20 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-center items-center">
          
          {/* Título en móvil (para que la barra no se vea vacía a la izquierda) */}
          <div 
            className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#b166cc] to-[#4deeea] font-medium tracking-[0.2em] text-lg" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            INTELIYEN
          </div>

          {/* Navegación Desktop (Centrada y oculta en móvil) */}
          <nav 
            className="hidden md:flex gap-10 text-xs lg:text-sm tracking-[0.25em] font-medium uppercase" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón de Menú Hamburguesa (Solo visible en móvil) */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL (Pantalla completa oscura) */}
      <div 
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Botón para cerrar (X) */}
        <button 
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links del menú móvil */}
        <nav 
          className="flex flex-col gap-8 text-center text-lg tracking-[0.2em] font-medium uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // Al darle clic a un link, cierra el menú automáticamente
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#ff7eb6] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}