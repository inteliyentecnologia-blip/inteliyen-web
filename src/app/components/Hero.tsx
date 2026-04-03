import { Link } from 'react-router-dom';
import logoPro from '../../assets/logo-pro.png'; // IMPORTAMOS TU LOGO PRO

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* ORBES DE LUZ DE FONDO (Igual que en tus cursos, le dan profundidad pero están limpios) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* EL LOGO PRO: GIGANTE, CENTRADO Y CON UN BRILLO SUTIL */}
        <div className="flex justify-center items-center">
        <img 
            src={logoPro} 
            alt="Inteliyen Pro" 
            className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-105" 
          />
        </div>

      </div>
    </section>
  );
}