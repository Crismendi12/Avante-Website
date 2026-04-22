import { ReactNode } from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function ScrollRevealSection({ children, className, style, id }: ScrollRevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0.85,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </section>
  );
}