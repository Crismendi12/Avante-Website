import { ReactNode, CSSProperties } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  maxWidth?: string;
  style?: CSSProperties;
  sectionNumber?: string;
  accentColor?: string;
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = 'left',
  maxWidth = '700px',
  style,
  sectionNumber,
  accentColor
}: SectionHeaderProps) {
  return (
    <div 
      style={{ 
        maxWidth,
        textAlign: align,
        margin: align === 'center' ? '0 auto var(--avante-space-12) auto' : '0 0 var(--avante-space-12) 0',
        ...style
      }}
    >
      {sectionNumber && (
        <div style={{ 
          fontSize: '11px', 
          color: accentColor || 'rgba(249, 180, 55, 0.5)', 
          fontWeight: '600',
          letterSpacing: '0.15em',
          marginBottom: 'var(--avante-space-2)',
          textTransform: 'uppercase'
        }}>
          {sectionNumber}
        </div>
      )}
      
      {eyebrow && (
        <div 
          className="avante-small"
          style={{
            display: 'inline-flex',
            padding: 'var(--avante-space-1) var(--avante-space-2)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '100px',
            color: 'var(--avante-text-secondary)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--avante-space-3)',
            letterSpacing: '0.05em'
          }}
        >
          {eyebrow}
        </div>
      )}
      
      <h2 className="avante-h2" style={{ color: 'var(--avante-text-primary)', marginTop: sectionNumber ? 'var(--avante-space-2)' : 'var(--avante-space-4)' }}>
        {title}
      </h2>
      
      {description && (
        <p 
          className="avante-body" 
          style={{ 
            color: 'var(--avante-text-secondary)', 
            marginTop: 'var(--avante-space-4)' 
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}