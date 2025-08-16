import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

// Logo URL direct
const logicyLogo = '/lovable-uploads/bf7b75bd-bbc4-4ea9-8372-c927a61de59b.png';

// Simple icon replacements
const MenuIcon = () => (
  <div className="w-5 h-5 flex flex-col justify-center space-y-1">
    <div className="w-full h-0.5 bg-current"></div>
    <div className="w-full h-0.5 bg-current"></div>
    <div className="w-full h-0.5 bg-current"></div>
  </div>
);

const XIcon = () => (
  <div className="w-5 h-5 relative">
    <div className="absolute top-2 left-0 w-full h-0.5 bg-current transform rotate-45"></div>
    <div className="absolute top-2 left-0 w-full h-0.5 bg-current transform -rotate-45"></div>
  </div>
);

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'tracking', label: t('nav.tracking') },
    { key: 'services', label: t('nav.services') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logicyLogo} alt="LOGICY TRANSPORT" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  currentPage === item.key ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <LanguageSelector />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-2 py-2 text-sm font-medium transition-smooth hover:text-primary ${
                    currentPage === item.key ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}