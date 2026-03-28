import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el fondo del menú
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Cierra el menú en móvil al hacer clic
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Cursos', id: 'courses' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(168,85,247,0.1)] border-b border-purple-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Inteliyen Logo" className="h-10 md:h-12 w-auto" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTELIYEN
          </span>
        </div>

        {/* Desktop Nav (Oculto en celulares) */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Botón de Menú Móvil (Hamburguesa) */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable para Celulares */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}
      >
        <div className="flex flex-col px-6 gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg py-3 border-b border-gray-800/50"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}