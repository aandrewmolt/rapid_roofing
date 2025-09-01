import React from 'react';
import { Phone } from 'lucide-react';

const LandingHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - No link, just branding */}
          <div className="flex items-center">
            <img 
              src="/rapid-roofing-logo.png" 
              alt="Rapid Roofing & Construction" 
              className="h-10 sm:h-12 w-auto"
              loading="eager"
            />
          </div>

          {/* Phone CTA - Primary action */}
          <a
            href="tel:2817981357"
            className="flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark transition-colors"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="hidden sm:block">
              <div className="text-sm text-gray-600">24/7 Emergency</div>
              <div className="text-lg font-bold">(281) 798-1357</div>
            </div>
            <div className="sm:hidden font-bold text-lg">(281) 798-1357</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;