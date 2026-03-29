import { useEffect, useState } from 'react';
// --- EL PASO VITAL EN VITE ---
// Importamos la imagen como si fuera código.
// La ruta es relativa: salimos de 'components' (../), salimos de 'app' (../) y entramos a 'assets' (assets/logo.png)
import logoInteliyen from '../../assets/logo.png'; 

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center text-center p-6 bg-black overflow-hidden">
      
      {/* ... más código ... */}

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* LA IMAGEN DEL LOGO CORREGIDA */}
        <div 
          className={`flex items-center justify-center mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* USAMOS EL NOMBRE IMPORTADO (logoInteliyen) EN EL src */}
          <img src={logoInteliyen} alt="Inteliyen" className="w-16 h-16 object-contain" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-wider ml-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTELIYEN
          </span>
        </div>

        {/* ... el resto de tu Hero ... */}

      </div>
    </div>
  );
}