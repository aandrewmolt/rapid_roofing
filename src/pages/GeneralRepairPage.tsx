import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Clock, Shield, Award, Star, Home, Droplets, Wind, X, ChevronRight, AlertCircle, Wrench } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import FloatingCTA from '../components/FloatingCTA';
import SEOHead from '../components/SEOHead';
import { sendFormEmail, FormSuccessMessage, FormErrorMessage } from '../utils/emailService';

const BRAND = {
  name: 'Rapid Roofing',
  phone: '(281) 798-1357',
  phoneHref: 'tel:+12817981357',
  logo: '🏠',
  logoSize: 'text-4xl',
  offer: '$500 OFF + Free Inspection',
  offerDetails: 'Limited time offer for roof repairs',
  trustBadges: ['Licensed & Insured', 'Lifetime Warranty', 'Insurance Specialists']
};

const LeadForm: React.FC<{ isPopup?: boolean; onClose?: () => void }> = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'repair'
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    // Conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'General Repair',
        event_label: 'Lead Form',
        value: 1
      });
    }
    
    // Send email via EmailJS
    const result = await sendFormEmail(formData, 'Houston', '/general-repair');
    
    if (result.success) {
      setSubmitStatus('success');
      setStatusMessage(result.message);
      // Reset form after 3 seconds if successful
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', address: '', service: 'repair' });
        if (onClose) onClose();
      }, 3000);
    } else {
      setSubmitStatus('error');
      setStatusMessage(result.message);
    }
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
          <Wrench className="inline w-6 h-6 text-brand-blue mr-2" />
          {isPopup ? 'Wait! Get Your FREE Repair Quote' : 'Get Your FREE Roof Repair Quote'}
        </h3>
        <p className="text-brand-blue font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">Limited spots available this week</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-base min-h-[44px]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-base min-h-[44px]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-base min-h-[44px]"
      />

      <input
        type="text"
        name="address"
        placeholder="Property Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-base min-h-[44px]"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-base min-h-[44px]"
      >
        <option value="repair">Roof Repair</option>
        <option value="leak">Leak Repair</option>
        <option value="shingles">Shingle Replacement</option>
        <option value="gutters">Gutter Repair</option>
        <option value="inspection">Free Inspection</option>
      </select>

      {submitStatus === 'success' ? (
        <FormSuccessMessage message={statusMessage} />
      ) : submitStatus === 'error' ? (
        <FormErrorMessage message={statusMessage} />
      ) : (
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="w-full bg-brand-blue text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-brand-blue-dark transition-colors duration-200 shadow-lg min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitStatus === 'loading' ? 'Sending...' : (isPopup ? 'Claim Your $500 OFF Now →' : 'Get Free Repair Quote + $500 OFF')}
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
        <div className="bg-brand-blue text-white p-3 sm:p-4 rounded-t-xl sticky top-0 z-10">
          <h2 className="text-xl sm:text-2xl font-bold">⏰ Don't Leave Yet!</h2>
        </div>
        <LeadForm isPopup={true} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

const MobileCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-blue text-white p-3 sm:p-4 z-40 md:hidden shadow-lg">
      <a
        href={BRAND.phoneHref}
        className="flex items-center justify-center space-x-2"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_call', {
              event_category: 'General Repair',
              event_label: 'Mobile Call Bar',
              value: 1
            });
          }
        }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-sm sm:text-base">Call Now: {BRAND.phone}</span>
      </a>
    </div>
  );
};

const GeneralRepairPage: React.FC = () => {
  useEffect(() => {
    // SEO and page tracking
    document.title = "Roof Repair Houston TX | Licensed Roofers | $500 OFF | (281) 798-1357";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Professional roof repair in Houston TX. Licensed & insured. $500 OFF + free inspection. Leak repair, shingles, gutters. Call (281) 798-1357!");
    }

    // Page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'General Roof Repair',
        page_location: window.location.href
      });
    }
  }, []);

  const repairServices = [
    { icon: <Droplets className="w-8 h-8" />, title: 'Leak Repair', desc: 'Fast, permanent solutions for all types of roof leaks' },
    { icon: <Home className="w-8 h-8" />, title: 'Shingle Replacement', desc: 'Replace damaged, missing, or worn shingles with precision' },
    { icon: <Wind className="w-8 h-8" />, title: 'Storm Damage Repair', desc: 'Complete restoration after hail, wind, or weather damage' },
    { icon: <Shield className="w-8 h-8" />, title: 'Preventive Maintenance', desc: 'Regular maintenance to prevent costly future repairs' }
  ];

  const reviews = [
    { name: 'Jennifer Martinez', location: 'Cypress', text: 'Had a leak in my kitchen. They found and fixed it same day, plus gave me a great warranty. Highly recommend!', rating: 5 },
    { name: 'Robert Taylor', location: 'Spring', text: 'Professional crew, fair pricing, and the repair has held up perfectly through two hurricane seasons.', rating: 5 },
    { name: 'Amanda Johnson', location: 'Katy', text: 'They repaired storm damage and worked directly with my insurance. Made the whole process stress-free.', rating: 5 }
  ];

  const repairProcess = [
    { step: 1, title: 'Free Inspection', desc: 'Comprehensive roof assessment at no cost' },
    { step: 2, title: 'Detailed Estimate', desc: 'Written quote with photos and materials breakdown' },
    { step: 3, title: 'Professional Repair', desc: 'Expert repair using premium materials' },
    { step: 4, title: 'Quality Guarantee', desc: 'Lifetime warranty on all workmanship' }
  ];

  const faqs = [
    { q: 'How do I know if my roof needs repair?', a: 'Signs include water stains on ceilings, missing/damaged shingles, granules in gutters, or visible light in the attic. We provide free inspections to assess your needs.' },
    { q: 'Will insurance cover my roof repairs?', a: 'Many roof repairs are covered by homeowner insurance, especially storm damage. We work directly with all major insurance companies and handle the claims process.' },
    { q: 'How long do roof repairs take?', a: 'Most repairs can be completed in 1-2 days depending on scope. We provide accurate timelines during your free estimate and stick to our schedule.' },
    { q: 'What warranty do you offer on repairs?', a: 'We provide a lifetime warranty on workmanship plus manufacturer warranties on all materials. Your repair investment is fully protected.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <SEOHead
        title="Roof Repair Houston TX | Licensed Roofers | $500 OFF | (281) 798-1357"
        description="Professional roof repair in Houston TX. Licensed & insured. $500 OFF + free inspection. Leak repair, shingles, gutters. Call (281) 798-1357!"
        keywords="roof repair houston, roof leak repair, shingle replacement, storm damage repair, houston roofers, roof contractors houston"
        serviceName="Professional Roof Repair"
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
              <div className="inline-flex items-center bg-brand-gold text-white px-4 py-2 rounded-full mb-6">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">{BRAND.offer} - Limited Time!</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
                Professional Roof Repair
                <span className="block text-brand-gold text-2xl sm:text-3xl lg:text-4xl mt-2">Houston's Most Trusted</span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Expert roof repairs with lifetime warranty. Licensed, insured, and trusted by 
                thousands of Houston homeowners for over 15 years.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-brand-gold-light transition-colors shadow-xl min-h-[44px] w-full sm:w-auto"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'General Repair',
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
                  className="inline-flex items-center justify-center bg-white text-brand-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl min-h-[44px] w-full sm:w-auto"
                >
                  Get Free Quote
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

      {/* Repair Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete Roof Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional solutions for every roofing problem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairServices.map((service, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-brand-blue/10 border border-brand-blue/20">
                <div className="text-brand-blue mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Professional Repair Process
            </h2>
            <p className="text-xl text-gray-600">
              From inspection to completion - here's what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {repairProcess.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white border-2 border-brand-blue/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-brand-blue">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                  {idx < repairProcess.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-brand-blue" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Houston Homeowners Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (750+ Reviews)</span>
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
                <div className="text-xs text-brand-blue font-bold mt-2">✓ VERIFIED CUSTOMER</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Houston Trusts Our Roof Repairs
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Clock />, title: 'Same-Day Service Available', desc: 'Most repairs completed within 24-48 hours of approval.' },
                  { icon: <Shield />, title: 'Lifetime Workmanship Warranty', desc: 'Industry-leading warranty on all repair work performed.' },
                  { icon: <Award />, title: 'Insurance Claim Specialists', desc: 'We handle all paperwork and work directly with adjusters.' },
                  { icon: <CheckCircle />, title: 'Premium Materials Only', desc: 'GAF, Owens Corning, and other top-tier roofing materials.' }
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
                <h3 className="text-2xl font-bold text-center">Limited Time Special</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-gold mb-4">$500 OFF</div>
                <div className="text-2xl font-semibold mb-2">+ FREE Inspection</div>
                <p className="text-gray-600 mb-6">Valid for roof repairs over $2,500</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-brand-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors w-full"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'General Repair',
                        event_label: 'Special Offer CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Claim Your Discount
                </a>
                <p className="text-sm text-gray-500 mt-4">Expires soon • New customers only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Roof Repair Frequently Asked Questions
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
            Ready to Fix Your Roof the Right Way?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied Houston homeowners. Get your free inspection and $500 discount today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-brand-gold text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-brand-gold-light transition-colors shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call', {
                    event_category: 'General Repair',
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
              Get Free Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-lg font-semibold mt-6">
            Licensed • Insured • Lifetime Warranty
          </p>
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default GeneralRepairPage;