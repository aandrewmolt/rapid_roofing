import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Clock, Shield, Award, Star, Home, DollarSign, Zap, X, ChevronRight, TrendingUp } from 'lucide-react';
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
  offer: '$2,000 OFF + 0% Financing Available',
  offerDetails: 'Limited time offer for complete roof replacements',
  trustBadges: ['GAF Master Elite Certified', 'Lifetime Warranty', '0% Financing Available']
};

const LeadForm: React.FC<{ isPopup?: boolean; onClose?: () => void }> = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    roofSize: 'medium',
    timeline: 'asap'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Roof Replacement',
        event_label: 'Lead Form',
        value: 1
      });
    }
    
    console.log('Replacement form submitted:', { ...formData, timestamp: new Date().toISOString() });
    alert(`Thank you! We'll contact you within 30 minutes with your roof replacement quote.`);
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
          <TrendingUp className="inline w-6 h-6 text-brand-gold mr-2" />
          {isPopup ? 'Wait! Get Your FREE Replacement Quote' : 'Get Your FREE New Roof Quote'}
        </h3>
        <p className="text-brand-gold font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">Limited availability - book now!</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      />

      <input
        type="text"
        name="address"
        placeholder="Property Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      />

      <select
        name="roofSize"
        value={formData.roofSize}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      >
        <option value="small">Small Home (Under 1,500 sq ft)</option>
        <option value="medium">Medium Home (1,500-2,500 sq ft)</option>
        <option value="large">Large Home (2,500-4,000 sq ft)</option>
        <option value="xlarge">Extra Large Home (Over 4,000 sq ft)</option>
      </select>

      <select
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent text-base"
      >
        <option value="asap">As Soon As Possible</option>
        <option value="month">Within 1 Month</option>
        <option value="quarter">Within 3 Months</option>
        <option value="planning">Just Planning Ahead</option>
      </select>

      <button
        type="submit"
        className="w-full bg-brand-gold text-white py-4 min-h-[44px] rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors duration-200 shadow-lg"
      >
        {isPopup ? 'Claim Your $2,000 OFF Now →' : 'Get Free Quote + $2,000 OFF'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to receive calls/texts about your new roof project
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
        }, 45000);
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
          <h2 className="text-2xl font-bold">💎 Premium Offer!</h2>
        </div>
        <LeadForm isPopup={true} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

const MobileCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-blue text-white p-3 z-40 md:hidden shadow-lg border-t-2 border-white/20">
      <a
        href={BRAND.phoneHref}
        className="flex items-center justify-center space-x-2 min-h-[44px] rounded-lg bg-brand-blue hover:bg-brand-blue-dark transition-colors"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_call', {
              event_category: 'Roof Replacement',
              event_label: 'Mobile Call Bar',
              value: 1
            });
          }
        }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold">New Roof: {BRAND.phone}</span>
      </a>
    </div>
  );
};

const NewRoofReplacementPage: React.FC = () => {
  useEffect(() => {
    // SEO and page tracking
    document.title = "New Roof Installation Houston TX | $2,000 OFF | GAF Certified | (281) 798-1357";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Complete roof replacement in Houston TX. GAF Master Elite certified. $2,000 OFF + 0% financing. Lifetime warranty. Call (281) 798-1357!");
    }

    // Page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Roof Replacement',
        page_location: window.location.href
      });
    }
  }, []);

  const roofingMaterials = [
    { icon: <Home className="w-8 h-8" />, title: 'Architectural Shingles', desc: 'Premium GAF Timberline HD with 50-year warranty', popular: true },
    { icon: <Shield className="w-8 h-8" />, title: 'Impact Resistant', desc: 'Class 4 hail-resistant shingles for maximum protection' },
    { icon: <Award className="w-8 h-8" />, title: 'Designer Series', desc: 'Luxury shingles that look like slate or wood shake' },
    { icon: <Zap className="w-8 h-8" />, title: 'Energy Efficient', desc: 'Cool roof technology reduces energy costs up to 20%' }
  ];

  const reviews = [
    { name: 'David Rodriguez', location: 'Cypress', text: 'Got a complete new roof with GAF shingles. The crew was professional, finished in 2 days, and the warranty is amazing!', rating: 5 },
    { name: 'Sarah Williams', location: 'Spring', text: 'After Hurricane Harvey, we needed a new roof. Rapid Roofing handled everything with insurance. Beautiful results!', rating: 5 },
    { name: 'Michael Thompson', location: 'Katy', text: 'The 0% financing made it affordable. Our home value increased and energy bills went down. Excellent investment!', rating: 5 }
  ];

  const replacementProcess = [
    { step: 1, title: 'Free Inspection & Quote', desc: 'Drone inspection and detailed estimate with material options' },
    { step: 2, title: 'Insurance & Financing', desc: 'We handle insurance claims and offer 0% financing options' },
    { step: 3, title: 'Professional Installation', desc: 'GAF-certified installation with quality control checkpoints' },
    { step: 4, title: 'Final Inspection', desc: 'Complete cleanup and lifetime warranty activation' }
  ];

  const benefits = [
    'Increase home value by 15-20%',
    'Reduce energy costs up to 25%',
    'Eliminate costly repairs for decades',
    'Enhanced curb appeal and marketability',
    'Maximum storm protection',
    'Qualify for insurance discounts'
  ];

  const faqs = [
    { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements are completed in 2-3 days depending on size and weather. We work efficiently while maintaining the highest quality standards.' },
    { q: 'What financing options are available?', a: 'We offer 0% financing for qualified customers, plus multiple payment plans. Our financing specialists help you find the best option for your budget.' },
    { q: 'Will my homeowner insurance cover a new roof?', a: 'If your roof has storm damage, insurance typically covers replacement. We work directly with all major insurance companies and handle the entire claims process.' },
    { q: 'What warranty comes with a new roof?', a: 'GAF materials come with up to 50-year manufacturer warranty, plus our lifetime workmanship warranty. You\'re fully protected for decades to come.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <SEOHead
        title="New Roof Installation Houston TX | $2,000 OFF | GAF Certified | (281) 798-1357"
        description="Complete roof replacement in Houston TX. GAF Master Elite certified. $2,000 OFF + 0% financing. Lifetime warranty. Call (281) 798-1357!"
        keywords="roof replacement houston, new roof installation, roof replacement cost, GAF roofing, houston roofing contractors"
        serviceName="Complete Roof Replacement"
        serviceArea="Houston Metro Area"
      />
      <LandingHeader />
      <ExitIntentPopup />
      <MobileCallBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-blue-dark text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-brand-blue text-white px-4 py-2 rounded-full mb-6">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="font-semibold">{BRAND.offer} - Limited Time!</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                Complete Roof Replacement
                <span className="block text-brand-blue text-lg sm:text-xl md:text-2xl lg:text-4xl mt-2">Houston's Premier Installation</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90">
                Transform your home with a premium new roof. GAF Master Elite certified installers, 
                lifetime warranty, and 0% financing available. Increase your home value today!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-6 sm:px-8 py-4 min-h-[44px] rounded-lg font-bold text-base sm:text-lg hover:bg-brand-blue-dark transition-colors shadow-xl"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Roof Replacement',
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
                  className="inline-flex items-center justify-center bg-white text-brand-gold px-6 sm:px-8 py-4 min-h-[44px] rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Get Free Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {BRAND.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-brand-blue" />
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Replace Your Roof Now?
            </h2>
            <p className="text-xl text-gray-600">
              A new roof is one of the best investments you can make in your home
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Premium Roofing Material Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose from the industry's best materials for your new roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roofingMaterials.map((material, idx) => (
              <div key={idx} className={`relative text-center p-6 rounded-lg hover:shadow-xl transition-shadow ${material.popular ? 'bg-brand-gold/10 border-2 border-brand-gold' : 'bg-white border border-gray-200'}`}>
                {material.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-brand-gold mb-4 flex justify-center">{material.icon}</div>
                <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                <p className="text-gray-600">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Professional Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              From quote to completion - here's what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {replacementProcess.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-brand-gold/10 border-2 border-brand-gold/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-brand-gold">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                  {idx < replacementProcess.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-brand-gold" />
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
              New Roof Success Stories
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (300+ New Roof Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-brand-gold/10 border-2 border-brand-gold/20 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location} Resident</div>
                <div className="text-xs text-brand-gold font-bold mt-2">✓ NEW ROOF COMPLETED</div>
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
                Why We're Houston's #1 Choice for New Roofs
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Award />, title: 'GAF Master Elite Certified', desc: 'Top 3% of roofing contractors nationwide. Premium warranties available.' },
                  { icon: <DollarSign />, title: '0% Financing Available', desc: 'Qualified customers can get 0% financing with flexible payment options.' },
                  { icon: <Clock />, title: 'Quick Installation', desc: 'Most roofs completed in 2-3 days with minimal disruption to your life.' },
                  { icon: <Shield />, title: 'Lifetime Workmanship Warranty', desc: 'Industry-leading warranty on installation plus material warranties.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="text-brand-gold flex-shrink-0">{React.cloneElement(item.icon, { className: 'w-6 h-6' })}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-blue/10 border-2 border-brand-blue/20 p-8 rounded-xl">
              <div className="bg-brand-blue text-white p-4 rounded-t-lg -mx-8 -mt-8 mb-6">
                <h3 className="text-2xl font-bold text-center">💎 New Roof Special</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-blue mb-4">$2,000 OFF</div>
                <div className="text-2xl font-semibold mb-2">+ 0% Financing Available</div>
                <p className="text-gray-600 mb-6">Complete roof replacement packages</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-blue-dark transition-colors w-full"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Roof Replacement',
                        event_label: 'Special Offer CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your New Roof Quote
                </a>
                <p className="text-sm text-gray-500 mt-4">Limited time • GAF Master Elite installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Roof Replacement Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-brand-gold/10 border-l-4 border-brand-gold rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2 text-brand-gold">{faq.q}</h3>
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
            Ready to Transform Your Home with a New Roof?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of Houston homeowners who chose premium roof replacement. Get your quote and $2,000 discount today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-brand-blue text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-brand-blue-dark transition-colors shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call', {
                    event_category: 'Roof Replacement',
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
              className="inline-flex items-center justify-center bg-white text-brand-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get Free Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-lg font-semibold mt-6">
            GAF Master Elite • 0% Financing • Lifetime Warranty
          </p>
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default NewRoofReplacementPage;