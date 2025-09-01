import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Clock, Shield, Award, Star, Home, Droplets, Wind, X, ChevronRight, AlertCircle } from 'lucide-react';
import LandingHeader from './components/LandingHeader';
import LandingPageFooter from './components/LandingPageFooter';

export interface KeywordGroup {
  label: string;
  terms: string[];
}

export interface PageProps {
  city: string;
  cityDisplay?: string;
  seoTitle?: string;
  seoDescription?: string;
  seo?: {
    title: string;
    description: string;
  };
  keywords: KeywordGroup[] | typeof KEYWORDS[keyof typeof KEYWORDS];
}

export const BRAND = {
  name: 'Rapid Roofing',
  phone: '(281) 798-1357',
  phoneHref: 'tel:+12817981357',
  logo: '🏠',
  offer: '$500 OFF + Free Inspection',
  offerDetails: 'Limited time offer for new customers',
  trustBadges: ['Licensed & Insured', '24/7 Emergency Service', 'Lifetime Warranty'],
  cities: ['Cypress', 'Katy', 'Tomball', 'Spring', 'The Woodlands']
};

export const KEYWORDS = {
  Cypress: [
    { label: 'General Roofing', terms: ['roofing cypress tx', 'roofers in cypress', 'roofing contractors cypress', 'cypress roofing company'] },
    { label: 'Repair', terms: ['roof repair cypress', 'roof leak repair cypress', 'emergency roof repair cypress', 'storm damage cypress'] },
    { label: 'Replacement', terms: ['roof replacement cypress', 'new roof cypress', 'roof installation cypress', 're-roofing cypress'] },
    { label: 'Inspection', terms: ['free roof inspection cypress', 'roof estimate cypress', 'roof quote cypress'] }
  ],
  Katy: [
    { label: 'General Roofing', terms: ['roofing katy tx', 'roofers in katy', 'roofing contractors katy', 'katy roofing company'] },
    { label: 'Repair', terms: ['roof repair katy', 'roof leak repair katy', 'emergency roof repair katy', 'hail damage katy'] },
    { label: 'Replacement', terms: ['roof replacement katy', 'new roof katy', 'roof installation katy', 're-roofing katy'] },
    { label: 'Inspection', terms: ['free roof inspection katy', 'roof estimate katy', 'roof quote katy'] }
  ],
  Tomball: [
    { label: 'General Roofing', terms: ['roofing tomball tx', 'roofers in tomball', 'roofing contractors tomball', 'tomball roofing company'] },
    { label: 'Repair', terms: ['roof repair tomball', 'roof leak repair tomball', 'emergency roof repair tomball', 'storm damage tomball'] },
    { label: 'Replacement', terms: ['roof replacement tomball', 'new roof tomball', 'roof installation tomball', 're-roofing tomball'] },
    { label: 'Inspection', terms: ['free roof inspection tomball', 'roof estimate tomball', 'roof quote tomball'] }
  ],
  Spring: [
    { label: 'General Roofing', terms: ['roofing spring tx', 'roofers in spring', 'roofing contractors spring', 'spring roofing company'] },
    { label: 'Repair', terms: ['roof repair spring', 'roof leak repair spring', 'emergency roof repair spring', 'wind damage spring'] },
    { label: 'Replacement', terms: ['roof replacement spring', 'new roof spring', 'roof installation spring', 're-roofing spring'] },
    { label: 'Inspection', terms: ['free roof inspection spring', 'roof estimate spring', 'roof quote spring'] }
  ],
  Woodlands: [
    { label: 'General Roofing', terms: ['roofing the woodlands tx', 'roofers in the woodlands', 'roofing contractors woodlands', 'woodlands roofing company'] },
    { label: 'Repair', terms: ['roof repair woodlands', 'roof leak repair woodlands', 'emergency roof repair woodlands', 'storm damage woodlands'] },
    { label: 'Replacement', terms: ['roof replacement woodlands', 'new roof woodlands', 'roof installation woodlands', 're-roofing woodlands'] },
    { label: 'Inspection', terms: ['free roof inspection woodlands', 'roof estimate woodlands', 'roof quote woodlands'] }
  ]
};

const LeadForm: React.FC<{ city: string; isPopup?: boolean; onClose?: () => void }> = ({ city, isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'inspection'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your CRM endpoint
    console.log('Form submitted:', { ...formData, city, timestamp: new Date().toISOString() });
    alert(`Thank you! We'll contact you within 30 minutes about your ${city} roofing needs.`);
    if (onClose) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`${isPopup ? 'p-4 sm:p-6' : 'bg-white rounded-lg shadow-xl p-6 sm:p-8'} space-y-3 sm:space-y-4`}>
      {isPopup && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {isPopup ? '⏰ Wait! Get Your FREE Inspection' : 'Get Your FREE Roof Inspection'}
        </h3>
        <p className="text-brand-gold font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">Limited spots available for {city} residents</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      />

      <input
        type="text"
        name="address"
        placeholder={`Address in ${city}`}
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      >
        <option value="inspection">Free Inspection</option>
        <option value="repair">Roof Repair</option>
        <option value="replacement">Roof Replacement</option>
        <option value="emergency">Emergency Service</option>
      </select>

      {submitStatus === 'success' ? (
        <FormSuccessMessage message={statusMessage} />
      ) : submitStatus === 'error' ? (
        <FormErrorMessage message={statusMessage} />
      ) : (
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitStatus === 'loading' ? 'Sending...' : (isPopup ? 'Claim Your $500 OFF Now →' : 'Get Free Inspection + $500 OFF')}
        </button>
      )}

      {submitStatus === 'idle' && (
        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to receive calls/texts about your roofing project
        </p>
      )}
    </form>
  );
};

const ExitIntentPopup: React.FC<{ city: string }> = ({ city }) => {
  const [show, setShow] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownRef.current) {
        setShow(true);
        hasShownRef.current = true;
      }
    };

    const handleMobileTimer = () => {
      if (window.innerWidth <= 768 && !hasShownRef.current) {
        setTimeout(() => {
          if (!hasShownRef.current) {
            setShow(true);
            hasShownRef.current = true;
          }
        }, 30000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    handleMobileTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <div className="bg-brand-gold text-white p-3 sm:p-4 rounded-t-xl sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-bold">⚠️ Don't Leave Yet!</h2>
        </div>
        <LeadForm city={city} isPopup={true} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

const MobileCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-blue text-white p-4 z-40 md:hidden">
      <a
        href={BRAND.phoneHref}
        className="flex items-center justify-center space-x-2"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold">Call Now: {BRAND.phone}</span>
      </a>
    </div>
  );
};

export const RoofingLandingPage: React.FC<PageProps> = ({ city, cityDisplay, seoTitle, seoDescription, seo }) => {
  const displayCity = cityDisplay || city;
  const title = seo?.title || seoTitle || `Roofing ${displayCity} TX | #1 Roofers | $500 OFF`;
  const description = seo?.description || seoDescription || `Professional roofing services in ${displayCity}, TX. Get $500 OFF + Free Inspection!`;
  
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  const services = [
    { icon: <Home className="w-8 h-8" />, title: 'Roof Replacement', desc: `Complete roof replacement services in ${displayCity}` },
    { icon: <Droplets className="w-8 h-8" />, title: 'Leak Repair', desc: 'Fast, reliable leak detection and repair' },
    { icon: <Wind className="w-8 h-8" />, title: 'Storm Damage', desc: '24/7 emergency storm damage response' },
    { icon: <Shield className="w-8 h-8" />, title: 'Free Inspection', desc: 'Comprehensive inspection at no cost' }
  ];

  const reviews = [
    { name: 'Sarah Johnson', location: displayCity, text: 'Rapid Roofing saved us after the last storm. Professional, fast, and the price was fair!', rating: 5 },
    { name: 'Mike Chen', location: displayCity, text: 'Got my entire roof replaced in one day. The crew was amazing and cleaned everything up.', rating: 5 },
    { name: 'Lisa Rodriguez', location: displayCity, text: 'Best roofing company in the area. They honored their quote and warranty is unbeatable.', rating: 5 }
  ];

  const faqs = [
    { q: `How quickly can you start my roofing project in ${displayCity}?`, a: `We typically begin projects in ${displayCity} within 24-48 hours for repairs and 3-5 days for replacements.` },
    { q: 'Is the $500 discount still available?', a: 'Yes! The $500 off promotion is available for a limited time for new customers.' },
    { q: 'Do you work with insurance companies?', a: 'Absolutely! We handle all insurance paperwork and work directly with adjusters.' },
    { q: 'What warranty do you offer?', a: 'We provide a lifetime warranty on workmanship and manufacturer warranties on all materials.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingHeader />
      <ExitIntentPopup city={displayCity} />
      <MobileCallBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-blue/20 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-brand-gold text-white px-4 py-2 rounded-full mb-6">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">{BRAND.offer} - Limited Time!</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                #1 Rated Roofing in {displayCity}, TX
              </h1>
              
              <p className="text-xl mb-8 text-gray-200">
                Professional roofing services with 24/7 emergency response. 
                Trusted by thousands of {displayCity} homeowners since 2010.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-blue-dark transition-colors shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {BRAND.phone}
                </a>
                <button
                  onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Get Free Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {BRAND.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="hero-form">
              <LeadForm city={displayCity} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Roofing Services in {displayCity}
            </h2>
            <p className="text-xl text-gray-600">
              Complete roofing solutions backed by lifetime warranty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What {displayCity} Homeowners Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (500+ Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location} Resident</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why {displayCity} Chooses Rapid Roofing
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Clock />, title: '24/7 Emergency Service', desc: 'Storm damage? We respond within 2 hours, any time.' },
                  { icon: <Shield />, title: 'Lifetime Warranty', desc: 'Industry-leading warranty on all workmanship.' },
                  { icon: <Award />, title: 'Licensed & Insured', desc: 'Fully licensed, bonded, and insured for your protection.' },
                  { icon: <CheckCircle />, title: 'No Hidden Fees', desc: 'Transparent pricing with no surprises.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="text-brand-blue flex-shrink-0">{React.cloneElement(item.icon, { className: 'w-6 h-6' })}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-gold/10 p-8 rounded-xl">
              <div className="bg-brand-gold text-white p-4 rounded-t-lg -mx-8 -mt-8 mb-6">
                <h3 className="text-2xl font-bold text-center">Limited Time Offer</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-gold mb-4">$500 OFF</div>
                <div className="text-2xl font-semibold mb-2">+ FREE Inspection</div>
                <p className="text-gray-600 mb-6">Valid for {displayCity} residents only</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-blue-dark transition-colors w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Claim Offer Now
                </a>
                <p className="text-sm text-gray-500 mt-4">Expires soon • Limited spots available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Protect Your {displayCity} Home?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied homeowners. Get your free inspection today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BRAND.phone}
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center bg-brand-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-navy/90 transition-colors shadow-xl"
            >
              Get Free Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <LandingPageFooter />
    </div>
  );
};