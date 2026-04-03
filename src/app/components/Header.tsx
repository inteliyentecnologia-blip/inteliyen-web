import { Link } from 'react-router-dom';

export function Header() {
  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'NOSOTROS', path: '#about' },
    { name: 'SERVICIOS', path: '#services' },
    { name: 'CURSOS', path: '/cursos' },
    { name: 'CONTACTO', path: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
        {/* AQUÍ YA NO HAY NADA A LA IZQUIERDA. SOLO EL MENÚ CENTRADO */}
        <ul className="flex items-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('#') ? (
                <a 
                  href={link.path} 
                  className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors tracking-[0.2em]"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-cyan-400 transition-colors tracking-[0.2em]"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}