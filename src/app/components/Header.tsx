import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Z-INDEX EXTREMO: z-[9999] asegura que el header esté por encima de las luces invisibles del Hero */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/30 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-end md:justify-center items-center">
          
          <nav className="hidden md:flex gap-10 text-xs lg:text-sm tracking-[0.25em] font-medium uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* BOTÓN BLINDADO: cursor-pointer explícito y pointer-events-auto */}
          <button 
            type="button"
            className="md:hidden text-white p-3 cursor-pointer pointer-events-auto active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            {/* pointer-events-none en el SVG evita que el ícono intercepte el clic del botón */}
            <svg className="w-9 h-9 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL: z-[10000] para ganarle incluso al header */}
      <div 
        className={`fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center items-center md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button 
          type="button"
          className="absolute top-6 right-6 text-white p-4 cursor-pointer active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-10 h-10 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-10 text-center text-2xl tracking-[0.2em] font-medium uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#ff7eb6] transition-colors p-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}