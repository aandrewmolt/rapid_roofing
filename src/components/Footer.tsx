import React from 'react';
import { Phone, Mail, MapPin, Facebook, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Emergency Roof Repair', path: '/emergency' },
    { name: 'Storm Damage Repair', path: '/storm-damage' },
    { name: 'Roof Replacement', path: '/roof-replacement' },
    { name: 'Roof Inspection', path: '/free-inspection-cypress' },
    { name: 'Commercial Roofing', path: '/commercial-cypress' },
    { name: 'Metal Roofing', path: '/metal-roofing' },
  ];

  const serviceAreas = [
    'Cypress, TX',
    'Katy, TX',
    'Spring, TX',
    'Tomball, TX',
    'The Woodlands, TX',
    'Houston, TX',
  ];

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/rapid-roofing-logo.png" 
                alt="Rapid Roofing & Construction LLC" 
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted roofing partner in Cypress and the Greater Houston Area. 
              24/7 emergency service available.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RapidRoofingandConstructionLLC/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-dark transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-gold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:2817981357"
                className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">(281) 798-1357</div>
                  <div className="text-sm">24/7 Emergency Service</div>
                </div>
              </a>
              <a
                href="mailto:therapidroofingandconstruction@gmail.com"
                className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm break-all">
                  therapidroofingandconstruction@gmail.com
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  P.O. Box 1587<br />
                  Cypress, TX 77410
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="w-5 h-5 text-brand-gold" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="w-5 h-5 text-brand-gold" />
              <span>GAF Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-brand-gold" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Rapid Roofing & Construction LLC. All rights reserved.</p>
            <p className="mt-2">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              {' | '}
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;