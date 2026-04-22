import { CSSProperties, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
}

export function Button({ children, variant = 'primary', onClick, href, style }: ButtonProps) {
  const baseStyles: CSSProperties = {
    padding: variant === 'text' ? '0' : '14px 28px',
    fontSize: '15px',
    fontWeight: 'var(--font-weight-semibold)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    background: 'none',
    textDecoration: 'none',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    ...style
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      borderRadius: 'var(--avante-radius-16)',
      boxShadow: '0 0 0 rgba(249, 180, 55, 0)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--avante-text-primary)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: 'var(--avante-radius-16)',
    },
    text: {
      color: 'var(--avante-text-secondary)',
      padding: 0,
    }
  };

  const finalStyles = { ...baseStyles, ...variantStyles[variant] };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.opacity = '0.95';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(249, 180, 55, 0.25)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
    } else {
      e.currentTarget.style.opacity = '0.7';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 0 0 rgba(249, 180, 55, 0)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
    } else {
      e.currentTarget.style.opacity = '1';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className="avante-button"
        style={finalStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="avante-button"
      style={finalStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}