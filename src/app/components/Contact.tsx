import { MessageSquare, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal(0.2);

  // Tu configuración de WhatsApp con el "Formulario" integrado
  const whatsappNumber = "523314494403";
  const whatsappMessage = `Hola, equipo de INTELIYEN. 🚀
Estoy listo para dar el primer paso con mi empresa. 

Para agilizar nuestra comunicación, aquí dejo mis datos:
👤 Nombre completo: 
🏢 Empresa: 
👥 Número de empleados: 
📧 Correo electrónico: 
🎯 Me interesa: [Escribe aquí: Desarrollo de software / Capacitación / Consultoría / No sé por dónde empezar]

¡Quedo a la espera de un asesor!`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"></div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wider"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            ¿Listo para dar el primer paso?
          </h2>
          <p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cuéntanos en qué etapa está tu empresa y te decimos exactamente cómo podemos ayudarte. Sin compromiso, sin tecnicismos.
          </p>
        </div>

        {/* Glassmorphism Contact Card */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/30"></div>

          <div className="relative z-10 p-8 md:p-16 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <MessageSquare size={40} className="text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Atención Ejecutiva y Directa
            </h3>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hacemos a un lado los formularios aburridos. Haz clic en el botón para abrir un chat directo y seguro con nuestro equipo. El mensaje ya incluye los campos necesarios para que nos compartas la información de tu empresa.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Iniciar Chat en WhatsApp
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}