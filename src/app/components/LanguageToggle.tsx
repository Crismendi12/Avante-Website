import { useLanguage } from '@/app/hooks/useLanguage';
import { memo } from 'react';

export const LanguageToggle = memo(function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--avante-space-3)',
        right: 'var(--avante-space-3)',
        zIndex: 1000,
        display: 'flex',
        gap: '4px',
        padding: '3px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: 'var(--avante-radius-8)',
        opacity: 0.4,
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
    >
      <button
        onClick={() => setLanguage('pt')}
        style={{
          padding: '2px 6px',
          fontSize: '10px',
          fontWeight: 'var(--font-weight-medium)',
          color: language === 'pt' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: language === 'pt' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          letterSpacing: '0.03em',
        }}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        style={{
          padding: '2px 6px',
          fontSize: '10px',
          fontWeight: 'var(--font-weight-medium)',
          color: language === 'en' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: language === 'en' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          letterSpacing: '0.03em',
        }}
      >
        EN
      </button>
    </div>
  );
});