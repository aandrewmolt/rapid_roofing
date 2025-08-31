import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Emergency Service', path: '/emergency' },
    { name: 'Storm Damage', path: '/storm-damage' },
    { name: 'Roof Replacement', path: '/roof-replacement' },
    { name: 'Free Inspection', path: '/free-inspection-cypress' },
    { name: 'Commercial', path: '/commercial-cypress' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/rapid-roofing-logo.png" 
              alt="Rapid Roofing & Construction LLC" 
              className="h-14 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2817981357"
              className="flex items-center gap-2 text-brand-blue font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>(281) 798-1357</span>
            </a>
            <Link
              to="/free-inspection-cypress"
              className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-gold-light transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-blue" />
            ) : (
              <Menu className="w-6 h-6 text-brand-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:2817981357"
                  className="flex items-center gap-2 text-brand-blue font-bold text-lg py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(281) 798-1357</span>
                </a>
                <Link
                  to="/free-inspection-cypress"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-brand-gold text-white px-6 py-3 rounded-lg font-bold text-center mt-4 hover:bg-brand-gold-light transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;