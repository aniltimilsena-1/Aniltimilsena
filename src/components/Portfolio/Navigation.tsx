import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass-card border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-serif font-bold gradient-text">
            AT
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`nav-link capitalize text-sm font-medium transition-colors duration-300 ${activeSection === item
                  ? 'text-primary active'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden text-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1 fade-in-up">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all duration-300 ${activeSection === item
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
