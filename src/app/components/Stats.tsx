import { useEffect, useState, useRef } from 'react';
import { Users, Code, Award, TrendingUp } from 'lucide-react';

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: Users,
      target: 150,
      suffix: '+',
      label: 'Clientes Satisfechos',
      color: 'purple',
    },
    {
      icon: Code,
      target: 300,
      suffix: '+',
      label: 'Proyectos Completados',
      color: 'cyan',
    },
    {
      icon: Award,
      target: 15,
      suffix: '+',
      label: 'Premios Ganados',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      target: 98,
      suffix: '%',
      label: 'Tasa de Éxito',
      color: 'cyan',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCounter
                key={index}
                icon={Icon}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
                delay={index * 100}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function StatCounter({ icon: Icon, target, suffix, label, color, delay, isVisible }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        const newCount = Math.min(Math.floor(increment * currentStep), target);
        setCount(newCount);

        if (currentStep >= steps) {
          clearInterval(interval);
          setCount(target);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  const colorClasses = {
    purple: {
      bg: 'from-purple-600 to-purple-800',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/50',
    },
    cyan: {
      bg: 'from-cyan-600 to-cyan-800',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/50',
    },
  };

  const currentColor = colorClasses[color as keyof typeof colorClasses];

  return (
    <div className="group text-center">
      <div className="flex justify-center mb-4">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${currentColor.bg} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg ${currentColor.glow}`}
        >
          <Icon size={32} className="text-white" />
        </div>
      </div>
      <h3
        className={`text-4xl md:text-5xl mb-2 ${currentColor.text}`}
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        {count}{suffix}
      </h3>
      <p className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </p>
    </div>
  );
}
