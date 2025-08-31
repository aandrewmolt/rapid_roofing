import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <>
      {/* Main floating button */}
      <div className="fixed bottom-6 right-6 z-40">
        {showButtons ? (
          <div className="space-y-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/12817981357?text=I%20need%20emergency%20roof%20repair%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            
            {/* Phone */}
            <a
              href="tel:2817981357"
              className="flex items-center justify-center w-14 h-14 bg-brand-blue text-white rounded-full shadow-lg hover:bg-brand-blue-dark transition-all transform hover:scale-110"
              aria-label="Call Now"
            >
              <Phone className="w-6 h-6" />
            </a>
            
            {/* Close button */}
            <button
              onClick={() => setShowButtons(false)}
              className="flex items-center justify-center w-14 h-14 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowButtons(true)}
            className="flex items-center justify-center w-16 h-16 bg-brand-gold text-white rounded-full shadow-2xl hover:bg-brand-gold-light transition-all transform hover:scale-110 animate-pulse-gold"
            aria-label="Contact Options"
          >
            <Phone className="w-7 h-7" />
          </button>
        )}
      </div>

      {/* Mobile-only sticky call bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        <a
          href="tel:2817981357"
          className="flex items-center justify-center bg-brand-gold text-white py-4 font-bold text-lg hover:bg-brand-gold-light transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now: (281) 798-1357
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;