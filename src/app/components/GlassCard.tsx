import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  padding?: string;
  style?: CSSProperties;
}

export function GlassCard({ 
  children, 
  padding = 'var(--avante-space-5)',
  style 
}: GlassCardProps) {
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 'var(--avante-radius-32)',
        padding,
        ...style
      }}
    >
      {children}
    </div>
  );
}
