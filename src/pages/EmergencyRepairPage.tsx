import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Clock, Shield, Award, Star, AlertTriangle, Zap, X, ChevronRight } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import FloatingCTA from '../components/FloatingCTA';
import SEOHead from '../components/SEOHead';

const BRAND = {
  name: 'Rapid Roofing',
  phone: '(281) 798-1357',
  phoneHref: 'tel:+12817981357',
  logo: '🏠',
  offer: '$500 OFF + Free Emergency Assessment',
  offerDetails: 'Limited time offer for emergency repairs',
  trustBadges: ['24/7 Emergency Response', 'Licensed & Insured', 'Lifetime Warranty']
};

const LeadForm: React.FC<{ isPopup?: boolean; onClose?: () => void }> = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    emergency: 'leak'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Emergency Repair',
        event_label: 'Lead Form',
        value: 1
      });
    }
    
    console.log('Emergency form submitted:', { ...formData, timestamp: new Date().toISOString() });
    alert(`Thank you! Emergency crews are being dispatched. We'll contact you within 5 minutes.`);
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
          <AlertTriangle className="inline w-6 h-6 text-red-600 mr-2" />
          {isPopup ? 'Emergency Crews Available NOW' : 'Get Emergency Help NOW'}
        </h3>
        <p className="text-red-600 font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">5-minute emergency response guarantee</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (URGENT)"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
      />

      <input
        type="text"
        name="address"
        placeholder="Property Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
      />

      <select
        name="emergency"
        value={formData.emergency}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
      >
        <option value="leak">Roof Leak (Active)</option>
        <option value="storm">Storm Damage</option>
        <option value="wind">Wind Damage</option>
        <option value="tree">Tree Damage</option>
        <option value="other">Other Emergency</option>
      </select>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200 shadow-lg animate-pulse"
      >
        {isPopup ? 'DISPATCH EMERGENCY CREW NOW →' : 'GET EMERGENCY HELP - 5 MIN RESPONSE'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to receive emergency response calls/texts
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
        }, 20000); // Faster for emergencies
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
        <div className="bg-red-600 text-white p-4 rounded-t-xl">
          <h2 className="text-2xl font-bold">🚨 EMERGENCY ALERT</h2>
        </div>
        <LeadForm isPopup={true} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

const MobileCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 z-40 md:hidden animate-pulse">
      <a
        href={BRAND.phoneHref}
        className="flex items-center justify-center space-x-2"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_call', {
              event_category: 'Emergency Repair',
              event_label: 'Mobile Call Bar',
              value: 1
            });
          }
        }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold">EMERGENCY: {BRAND.phone}</span>
      </a>
    </div>
  );
};

const EmergencyRepairPage: React.FC = () => {
  useEffect(() => {
    // SEO and page tracking
    document.title = "Emergency Roof Repair | 24/7 Service | 5-Min Response | (281) 798-1357";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Emergency roof repair available 24/7. 5-minute response time. Storm damage, leaks, wind damage. Call (281) 798-1357 now!");
    }

    // Page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Emergency Roof Repair',
        page_location: window.location.href
      });
    }
  }, []);

  const emergencyServices = [
    { icon: <AlertTriangle className="w-8 h-8" />, title: 'Active Leak Repair', desc: 'Stop water damage immediately with emergency tarping and repair' },
    { icon: <Zap className="w-8 h-8" />, title: 'Storm Damage Response', desc: '24/7 emergency response for hurricane and hail damage' },
    { icon: <Clock className="w-8 h-8" />, title: 'Wind Damage Repair', desc: 'Emergency stabilization for wind-damaged roofs' },
    { icon: <Shield className="w-8 h-8" />, title: 'Emergency Tarping', desc: 'Immediate protection until permanent repairs can be made' }
  ];

  const reviews = [
    { name: 'Maria Gonzalez', location: 'Cypress', text: 'Called at 2 AM during the storm - they were here in 20 minutes! Saved my home from major water damage.', rating: 5 },
    { name: 'James Wilson', location: 'Spring', text: 'Tree fell on our roof during Harvey. Rapid Roofing had it covered and fixed same day. Amazing service!', rating: 5 },
    { name: 'Ashley Chen', location: 'Katy', text: 'Emergency leak in the middle of the night. They answered immediately and stopped the water damage. Lifesavers!', rating: 5 }
  ];

  const emergencySteps = [
    { step: 1, time: '0-5 min', action: 'Your emergency call answered by local dispatcher' },
    { step: 2, time: '5-15 min', action: 'Emergency crew dispatched with GPS tracking' },
    { step: 3, time: '15-45 min', action: 'Arrival at your property with emergency supplies' },
    { step: 4, time: '45-90 min', action: 'Water damage stopped, temporary protection installed' }
  ];

  const faqs = [
    { q: 'How fast do you respond to emergency calls?', a: 'We guarantee a 5-minute phone response and aim to arrive on-site within 45 minutes for true emergencies.' },
    { q: 'Do you work 24/7 including holidays?', a: 'Yes! We have emergency crews available 24/7, 365 days a year including all holidays.' },
    { q: 'Will insurance cover emergency roof repairs?', a: 'Most homeowner insurance policies cover emergency repairs. We work directly with all major insurance companies and handle the paperwork.' },
    { q: 'What if I need permanent repairs after emergency service?', a: 'We provide seamless transition from emergency service to permanent repairs with the same crew and warranty coverage.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Emergency Roof Repair | 24/7 Service | 5-Min Response | (281) 798-1357"
        description="Emergency roof repair available 24/7. 5-minute response time. Storm damage, leaks, wind damage. Call (281) 798-1357 now!"
        keywords="emergency roof repair, 24 hour roofing, emergency leak repair, storm damage repair, wind damage repair, emergency roofer"
        serviceName="Emergency Roof Repair"
        serviceArea="Houston Metro Area"
      />
      <LandingHeader />
      <ExitIntentPopup />
      <MobileCallBar />

      {/* Emergency Alert Bar */}
      <div className="bg-red-600 text-white py-2 animate-pulse">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">🚨 EMERGENCY CREWS AVAILABLE NOW - 5 MINUTE RESPONSE 🚨</span>
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full mb-6 animate-pulse">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-bold">5-MINUTE EMERGENCY RESPONSE</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                EMERGENCY ROOF REPAIR
                <span className="block text-yellow-300 text-3xl lg:text-4xl mt-2">24/7 CREWS AVAILABLE</span>
              </h1>
              
              <p className="text-xl mb-8 text-red-100">
                Water damage spreads FAST. Our emergency crews respond within 5 minutes, 
                arrive within 45 minutes. Don't wait - every second counts!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-xl animate-pulse"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Emergency Repair',
                        event_label: 'Hero CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  EMERGENCY: {BRAND.phone}
                </a>
                <button
                  onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Get Emergency Help
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {BRAND.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
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

      {/* Emergency Response Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <Zap className="inline w-8 h-8 text-red-600 mr-2" />
              Emergency Response Timeline
            </h2>
            <p className="text-xl text-gray-600">
              From your call to water damage stopped - here's exactly what happens
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {emergencySteps.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="text-red-600 font-bold mb-2">{item.time}</div>
                    <p className="text-sm text-gray-700">{item.action}</p>
                  </div>
                  {idx < emergencySteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Emergency Roofing Services
            </h2>
            <p className="text-xl text-gray-600">
              Immediate response for all roofing emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, idx) => (
              <div key={idx} className="bg-white text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
                <div className="text-red-600 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Emergency Heroes - Real Stories
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (500+ Emergency Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-green-50 border-2 border-green-200 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location} Resident</div>
                <div className="text-xs text-green-600 font-bold mt-2">✓ EMERGENCY RESOLVED</div>
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
                Why We're Houston's #1 Emergency Roofers
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Clock />, title: '5-Minute Response Guarantee', desc: 'Your emergency call answered within 5 minutes, crews dispatched immediately.' },
                  { icon: <Shield />, title: 'Emergency Insurance Specialists', desc: 'We handle all insurance paperwork for storm and emergency damage.' },
                  { icon: <Award />, title: 'Emergency Equipment Ready', desc: '24/7 emergency supplies: tarps, generators, safety equipment always stocked.' },
                  { icon: <CheckCircle />, title: 'Stop Water Damage FAST', desc: 'Our priority is stopping water damage within the first hour.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="text-red-600 flex-shrink-0">{React.cloneElement(item.icon, { className: 'w-6 h-6' })}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
              <div className="bg-red-600 text-white p-4 rounded-t-lg -mx-8 -mt-8 mb-6">
                <h3 className="text-2xl font-bold text-center">🚨 EMERGENCY SPECIAL</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-4">$500 OFF</div>
                <div className="text-2xl font-semibold mb-2">+ FREE Emergency Assessment</div>
                <p className="text-gray-600 mb-6">Valid for emergency repairs only</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors w-full animate-pulse"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Emergency Repair',
                        event_label: 'Emergency Special CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  GET EMERGENCY HELP NOW
                </a>
                <p className="text-sm text-gray-500 mt-4">Available 24/7 • Crews standing by</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Emergency Roofing FAQs
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2 text-red-800">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            🚨 EVERY SECOND COUNTS - DON'T WAIT! 🚨
          </h2>
          <p className="text-xl mb-8">
            Water damage doubles every hour. Our emergency crews are standing by RIGHT NOW!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-yellow-500 text-black px-12 py-6 rounded-lg font-bold text-2xl hover:bg-yellow-400 transition-colors shadow-xl animate-pulse"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call', {
                    event_category: 'Emergency Repair',
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
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Emergency Form
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-lg font-bold mt-6 animate-pulse">
            CREWS AVAILABLE NOW • 5-MINUTE RESPONSE GUARANTEE
          </p>
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default EmergencyRepairPage;