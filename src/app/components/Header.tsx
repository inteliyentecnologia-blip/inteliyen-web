import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          {/* Aquí es donde se muestra la imagen del logo */}
          <img src={logo} alt="Inteliyen" className="h-10 md:h-12 w-auto" />
          
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTELIYEN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Servicios
          </button>
          <Link
            to="/cursos"
            className="text-gray-300 hover:text-purple-400 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cursos
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-purple-400"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/10">
          <ul className="flex flex-col gap-4 p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 w-full text-left"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 w-full text-left"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 w-full text-left"
              >
                Servicios
              </button>
            </li>
            <li>
              <Link
                to="/cursos"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 w-full text-left block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}