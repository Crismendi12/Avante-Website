import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Nav
    'nav.thesis': 'Tese',
    'nav.playbook': 'Playbook',
    'nav.team': 'Time',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'nav.what': 'O que Fazemos',
    'nav.brazil': 'Brasil',
    'nav.cta': 'Começar',
    'nav.cta.primary': 'Seja Parceiro Avante',
    'nav.cta.secondary': 'Ver o Sistema',
    
    // Hero
    'hero.tagline': 'Venture Building + Investimento em Estágio Inicial',
    'hero.headline': 'Co-fundamos empresas do zero e investimos em startups pré-tração no Brasil.',
    
    // CTA
    'cta.title': 'Pronto para construir?',
    'cta.compact': 'Entre em Contato',
    
    // Contact
    'contact.title': 'Vamos construir juntos',
    
    // What We Do
    'whatwedo.title.line1': 'Duas formas de trabalhar com Avante:',
    'whatwedo.title.line2': 'Venture building ou investimento em estágio inicial.',
    
    // System
    'system.title': 'O Sistema Avante',
    'system.subtitle': 'Um loop repetível para lançar 3–4 ventures por ano',
    
    // Team
    'team.title': 'Construído por operadores que já estiveram lá.',
    'team.subtitle': 'Construímos, escalamos e saímos.',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    
    // Footer
    'footer.tagline': 'Construindo campeões verticais AI-native no Brasil.',
    'footer.copyright': '© 2026 Avante. Todos os direitos reservados.',
  },
  en: {
    // Nav
    'nav.thesis': 'Thesis',
    'nav.playbook': 'Playbook',
    'nav.team': 'Team',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.what': 'What We Do',
    'nav.brazil': 'Brazil',
    'nav.cta': 'Get Started',
    'nav.cta.primary': 'Partner with Avante',
    'nav.cta.secondary': 'See the System',
    
    // Hero
    'hero.tagline': 'Venture Building + Early-Stage Investment',
    'hero.headline': 'We co-found companies from scratch and invest in pre-traction startups in Brazil.',
    
    // CTA
    'cta.title': 'Ready to build?',
    'cta.compact': 'Get in Touch',
    
    // Contact
    'contact.title': "Let's build together",
    
    // What We Do
    'whatwedo.title.line1': 'Two ways to work with Avante:',
    'whatwedo.title.line2': 'Venture building or early-stage investment.',
    
    // System
    'system.title': 'The Avante System',
    'system.subtitle': 'A repeatable loop to launch 3–4 ventures per year',
    
    // Team
    'team.title': 'Built by operators who have been there.',
    'team.subtitle': 'We have built, scaled, and exited.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // Footer
    'footer.tagline': 'Building AI-native vertical champions in Brazil.',
    'footer.copyright': '© 2026 Avante. All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
