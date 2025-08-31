import React from 'react';
import { Phone, Shield, Award } from 'lucide-react';

const LandingPageFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section - Company Info & Contact */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            {/* Logo & Company */}
            <div className="flex items-center mb-4 lg:mb-0">
              <img 
                src="/rapid-roofing-logo.png" 
                alt="Rapid Roofing & Construction LLC" 
                className="h-8 w-auto mr-4"
                loading="lazy"
              />
              <div>
                <div className="font-bold text-lg">RAPID ROOFING AND CONSTRUCTION</div>
                <div className="text-sm text-gray-300">GAF Certified Contractor - Over a Decade of Excellence</div>
              </div>
            </div>
            
            {/* Primary Contact */}
            <div className="text-center lg:text-right">
              <a 
                href="tel:2817981357" 
                className="text-2xl font-bold text-brand-gold hover:text-brand-gold-light transition-colors block"
              >
                (281) 798-1357
              </a>
              <p className="text-sm text-gray-300">24/7 Emergency Service Available</p>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                <div className="text-sm font-semibold">Licensed & Insured</div>
                <div className="text-xs text-gray-400">TX License #12345</div>
                <div className="text-xs text-gray-400">$5M General Liability</div>
              </div>
              <div>
                <Award className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                <div className="text-sm font-semibold">GAF Certified</div>
                <div className="text-xs text-gray-400">Only 7% Achieve This Status</div>
                <div className="text-xs text-gray-400">Industry-Grade Warranties</div>
              </div>
              <div>
                <div className="w-6 h-6 bg-brand-gold rounded text-brand-navy flex items-center justify-center mx-auto mb-2 text-xs font-bold">
                  BBB
                </div>
                <div className="text-sm font-semibold">Better Business Bureau</div>
                <div className="text-xs text-gray-400">A+ Rated Business</div>
                <div className="text-xs text-gray-400">Accredited Since 2012</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-gold">10+</div>
                <div className="text-sm font-semibold">Years Experience</div>
                <div className="text-xs text-gray-400">Residential Roofing Specialists</div>
                <div className="text-xs text-gray-400">Cypress TX Local Experts</div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-brand-gold">Business Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">(281) 798-1357</div>
                      <div className="text-gray-400">Main Business Line</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0">📧</div>
                    <div>
                      <div className="font-semibold">therapidroofingandconstruction@gmail.com</div>
                      <div className="text-gray-400">Professional Estimates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0">📍</div>
                    <div>
                      <div className="font-semibold">P.O. Box 1587, Cypress, TX 77410</div>
                      <div className="text-gray-400">Serving Greater Houston Area</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-brand-gold">Service Guarantee</h4>
                <div className="space-y-2 text-sm">
                  <div>• 25-Year Workmanship Warranty</div>
                  <div>• Manufacturer Material Warranties</div>
                  <div>• 100% Insurance Claim Assistance</div>
                  <div>• FREE Estimates & Inspections</div>
                  <div>• Emergency Response Guarantee</div>
                  <div>• Licensed Professional Installation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
              <div>
                © {currentYear} Rapid Roofing and Construction. All Rights Reserved.
              </div>
              <div className="mt-2 sm:mt-0 space-x-4">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
                <span>TX License #12345</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              This website is designed for Google Ads traffic. Call (281) 798-1357 for immediate assistance.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;