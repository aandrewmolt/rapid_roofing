import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Shield, Award, Star, Search, FileText, Camera, X, ChevronRight, Eye } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import FloatingCTA from '../components/FloatingCTA';
import SEOHead from '../components/SEOHead';

const BRAND = {
  name: 'Rapid Roofing',
  phone: '(281) 798-1357',
  phoneHref: 'tel:+12817981357',
  logo: '🏠',
  logoSize: 'text-4xl',
  offer: '$500 OFF + FREE Professional Inspection',
  offerDetails: 'No-obligation comprehensive roof inspection',
  trustBadges: ['100% FREE Inspection', 'No Pressure Sales', 'Licensed & Insured']
};

const LeadForm: React.FC<{ isPopup?: boolean; onClose?: () => void }> = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    concern: 'general',
    timeframe: 'asap'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Free Inspection',
        event_label: 'Lead Form',
        value: 1
      });
    }
    
    console.log('Inspection form submitted:', { ...formData, timestamp: new Date().toISOString() });
    alert(`Thank you! We'll contact you within 30 minutes to schedule your FREE roof inspection.`);
    if (onClose) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className={`${isPopup ? 'p-6' : 'bg-white rounded-lg shadow-xl p-8'} space-y-4`}>
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
          <Eye className="inline w-6 h-6 text-brand-blue mr-2" />
          {isPopup ? 'Wait! Get Your FREE Inspection' : 'Schedule Your FREE Roof Inspection'}
        </h3>
        <p className="text-brand-blue font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">No obligation - just valuable information!</p>
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
        placeholder="Property Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      />

      <select
        name="concern"
        value={formData.concern}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      >
        <option value="general">General Roof Health Check</option>
        <option value="leak">Possible Leak Issues</option>
        <option value="storm">Storm Damage Assessment</option>
        <option value="age">Aging Roof Evaluation</option>
        <option value="insurance">Insurance Claim Inspection</option>
      </select>

      <select
        name="timeframe"
        value={formData.timeframe}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
      >
        <option value="asap">This Week</option>
        <option value="week">Next Week</option>
        <option value="month">This Month</option>
        <option value="flexible">I'm Flexible</option>
      </select>

      <button
        type="submit"
        className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg"
      >
        {isPopup ? 'Claim Your FREE Inspection →' : 'Schedule FREE Inspection + $500 OFF'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to receive calls/texts to schedule your inspection
      </p>
    </form>
  );
};

const ExitIntentPopup: React.FC = () => {
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
        }, 35000);
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
      <div className="bg-white rounded-xl max-w-md w-full relative">
        <div className="bg-brand-blue text-white p-4 rounded-t-xl">
          <h2 className="text-2xl font-bold">👁️ Free Look - No Commitment!</h2>
        </div>
        <LeadForm isPopup={true} onClose={() => setShow(false)} />
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
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_call', {
              event_category: 'Free Inspection',
              event_label: 'Mobile Call Bar',
              value: 1
            });
          }
        }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold">FREE Inspection: {BRAND.phone}</span>
      </a>
    </div>
  );
};

const FreeInspectionPage: React.FC = () => {
  useEffect(() => {
    // SEO and page tracking
    document.title = "FREE Roof Inspection Houston TX | $500 OFF | No Obligation | (281) 798-1357";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "FREE professional roof inspection in Houston TX. No obligation. Comprehensive report + $500 OFF repairs. Licensed inspectors. Call (281) 798-1357!");
    }

    // Page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Free Roof Inspection',
        page_location: window.location.href
      });
    }
  }, []);

  const inspectionServices = [
    { icon: <Search className="w-8 h-8" />, title: 'Comprehensive Assessment', desc: 'Complete inspection of all roof components and systems' },
    { icon: <Camera className="w-8 h-8" />, title: 'Photo Documentation', desc: 'Detailed photos of any issues or concerns found' },
    { icon: <FileText className="w-8 h-8" />, title: 'Written Report', desc: 'Professional report with recommendations and cost estimates' },
    { icon: <Shield className="w-8 h-8" />, title: 'Insurance Assessment', desc: 'Documentation suitable for insurance claims if needed' }
  ];

  const reviews = [
    { name: 'Carol Peterson', location: 'Cypress', text: 'They found a small issue I never would have noticed. Fixed it before it became a major problem. The inspection was truly free!', rating: 5 },
    { name: 'Tom Rodriguez', location: 'Spring', text: 'Professional, thorough, and no pressure at all. Got a detailed report and photos. Highly recommend the free inspection!', rating: 5 },
    { name: 'Linda Chen', location: 'Katy', text: 'Best decision I made for my home. They found hail damage my insurance covered. Saved me thousands!', rating: 5 }
  ];

  const inspectionProcess = [
    { step: 1, title: 'Schedule Online or Call', desc: 'Quick and easy scheduling at your convenience' },
    { step: 2, title: 'Professional Inspection', desc: '45-minute comprehensive roof assessment' },
    { step: 3, title: 'Detailed Photo Report', desc: 'Receive written report with photos same day' },
    { step: 4, title: 'No-Pressure Consultation', desc: 'Review findings and options at your pace' }
  ];

  const whatWeCheck = [
    'Shingle condition and granule loss',
    'Flashing around chimneys and vents',
    'Gutter attachment and drainage',
    'Soffit and fascia condition',
    'Attic ventilation effectiveness',
    'Signs of water damage or leaks',
    'Storm or hail damage assessment',
    'Overall structural integrity'
  ];

  const faqs = [
    { q: 'Is the inspection really free with no strings attached?', a: 'Yes! Our inspection is completely free with no obligation. We believe informed homeowners make the best decisions, so we provide valuable information regardless of whether you need our services.' },
    { q: 'How long does the inspection take?', a: 'A thorough inspection typically takes 45-60 minutes. We check every aspect of your roof system and provide a comprehensive assessment.' },
    { q: 'Will you try to sell me a new roof?', a: 'No pressure, ever! We provide honest assessments and recommendations. Many inspections result in simple maintenance advice rather than major work.' },
    { q: 'What if you find problems during the inspection?', a: 'We\'ll document everything with photos and provide a written report. You\'ll get honest recommendations and can decide if and when to address any issues we find.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="FREE Roof Inspection Houston TX | $500 OFF | No Obligation | (281) 798-1357"
        description="FREE professional roof inspection in Houston TX. No obligation. Comprehensive report + $500 OFF repairs. Licensed inspectors. Call (281) 798-1357!"
        keywords="free roof inspection houston, roof inspection, no obligation roof check, houston roof inspection"
        serviceName="FREE Professional Roof Inspection"
        serviceArea="Houston Metro Area"
      />
      <LandingHeader />
      <ExitIntentPopup />
      <MobileCallBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-blue-dark text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-brand-gold text-white px-4 py-2 rounded-full mb-6">
                <Eye className="w-5 h-5 mr-2" />
                <span className="font-semibold">100% FREE - No Strings Attached!</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                FREE Professional Roof Inspection
                <span className="block text-brand-gold text-3xl lg:text-4xl mt-2">Know Your Roof's True Condition</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90">
                Don't wait for a leak to discover roof problems. Get a comprehensive, 
                professional inspection at no cost - with no obligation or pressure to buy anything.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors shadow-xl"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Free Inspection',
                        event_label: 'Hero CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: {BRAND.phone}
                </a>
                <button
                  onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Schedule Inspection
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {BRAND.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="hero-form">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included in Your FREE Inspection
            </h2>
            <p className="text-xl text-gray-600">
              Professional assessment of all roof components - at no cost to you
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {whatWeCheck.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-brand-blue/10 border border-brand-blue/20 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Professional Inspection Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive documentation and assessment you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionServices.map((service, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-white border border-gray-200">
                <div className="text-brand-blue mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From scheduling to detailed report - here's what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {inspectionProcess.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-brand-blue/10 border-2 border-brand-blue/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-brand-blue">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                  {idx < inspectionProcess.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-brand-blue" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Houston Homeowners Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (600+ Inspection Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-brand-blue/10 border-2 border-brand-blue/20 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location} Resident</div>
                <div className="text-xs text-brand-blue font-bold mt-2">✓ FREE INSPECTION COMPLETED</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Our FREE Inspection Is Different
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Eye />, title: '100% No-Pressure Promise', desc: 'We provide honest assessments with no sales pressure. Many inspections result in peace of mind, not repairs.' },
                  { icon: <Camera />, title: 'Professional Documentation', desc: 'Detailed photos and written reports you can share with insurance or use for future reference.' },
                  { icon: <Award />, title: 'Licensed & Certified', desc: 'Our inspectors are licensed professionals with years of experience and industry certifications.' },
                  { icon: <Shield />, title: 'Insurance Expertise', desc: 'We know what insurance companies look for and can help document claims if issues are found.' }
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

            <div className="bg-brand-gold/10 border-2 border-brand-gold/20 p-8 rounded-xl">
              <div className="bg-brand-gold text-white p-4 rounded-t-lg -mx-8 -mt-8 mb-6">
                <h3 className="text-2xl font-bold text-center">👁️ FREE Inspection Special</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-gold mb-4">100% FREE</div>
                <div className="text-2xl font-semibold mb-2">+ $500 OFF Any Needed Repairs</div>
                <p className="text-gray-600 mb-6">No strings attached - just valuable information</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors w-full"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Free Inspection',
                        event_label: 'Special Offer CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule FREE Inspection
                </a>
                <p className="text-sm text-gray-500 mt-4">Available this week • No obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            FREE Inspection Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-brand-blue/10 border-l-4 border-brand-blue rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2 text-brand-blue">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Wait for Problems - Prevent Them!
          </h2>
          <p className="text-xl mb-8">
            Get peace of mind with a professional roof inspection. Completely free, no strings attached, no pressure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-brand-gold text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-brand-gold-light transition-colors shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call', {
                    event_category: 'Free Inspection',
                    event_label: 'Final CTA',
                    value: 1
                  });
                }
              }}
            >
              <Phone className="w-8 h-8 mr-3" />
              {BRAND.phone}
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Schedule Inspection
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-lg font-semibold mt-6">
            100% FREE • No Pressure • Licensed & Insured
          </p>
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default FreeInspectionPage;