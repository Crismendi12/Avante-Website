import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsVisible(true);

      // Detectar si está sobre un elemento interactivo
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], .interactive-card');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Smooth lerp (interpolación lineal) para seguimiento suave
      const ease = 0.15;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Glow principal - más grande y difuso */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: isHovering ? '300px' : '250px',
          height: isHovering ? '300px' : '250px',
          transform: 'translate(-50%, -50%)',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(249, 180, 55, 0.08) 0%, rgba(152, 80, 154, 0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(66, 70, 140, 0.06) 0%, rgba(152, 80, 154, 0.03) 40%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease, width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform, opacity'
        }}
      />

      {/* Punto central sutil */}
      
    </>
  );
}
