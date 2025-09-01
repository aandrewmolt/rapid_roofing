import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle, Clock, Shield, Award, Star, MapPin, Users, Heart, X, ChevronRight, AlertCircle, Home } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import FloatingCTA from '../components/FloatingCTA';
import SEOHead from '../components/SEOHead';

const BRAND = {
  name: 'Rapid Roofing',
  phone: '(281) 798-1357',
  phoneHref: 'tel:+12817981357',
  logo: '🏠',
  offer: '$500 OFF + FREE Estimate',
  offerDetails: 'Special discount for local neighbors',
  trustBadges: ['Local Houston Company', 'Family Owned & Operated', '15+ Years in Community']
};

const LeadForm: React.FC<{ isPopup?: boolean; onClose?: () => void }> = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    neighborhood: '',
    service: 'estimate'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Local Roofer',
        event_label: 'Lead Form',
        value: 1
      });
    }
    
    console.log('Local roofer form submitted:', { ...formData, timestamp: new Date().toISOString() });
    alert(`Thank you! Your local roofing team will contact you within 30 minutes.`);
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
          <Heart className="inline w-6 h-6 text-purple-600 mr-2" />
          {isPopup ? 'Wait! Get Your Local Roofer Quote' : 'Connect with Your Local Roofers'}
        </h3>
        <p className="text-purple-600 font-semibold text-lg">{BRAND.offer}</p>
        {isPopup && (
          <p className="text-sm text-gray-600 mt-2">Special pricing for neighbors!</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      <input
        type="text"
        name="address"
        placeholder="Property Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      <input
        type="text"
        name="neighborhood"
        placeholder="Neighborhood (e.g., Cypress, Spring, Katy)"
        value={formData.neighborhood}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      >
        <option value="estimate">Free Estimate</option>
        <option value="repair">Roof Repair</option>
        <option value="replacement">Roof Replacement</option>
        <option value="maintenance">Maintenance Service</option>
        <option value="inspection">Inspection</option>
      </select>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg"
      >
        {isPopup ? 'Get My Local Quote →' : 'Connect with Local Team + $500 OFF'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to receive calls/texts from your local roofing team
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
        }, 40000);
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
        <div className="bg-purple-600 text-white p-4 rounded-t-xl">
          <h2 className="text-2xl font-bold">🏡 Your Local Roofers!</h2>
        </div>
        <LeadForm isPopup={true} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

const MobileCallBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white p-4 z-40 md:hidden">
      <a
        href={BRAND.phoneHref}
        className="flex items-center justify-center space-x-2"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_call', {
              event_category: 'Local Roofer',
              event_label: 'Mobile Call Bar',
              value: 1
            });
          }
        }}
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="font-bold">Local Team: {BRAND.phone}</span>
      </a>
    </div>
  );
};

const LocalRooferPage: React.FC = () => {
  useEffect(() => {
    // SEO and page tracking
    document.title = "Local Roofers Houston TX | Family Owned | 15+ Years | (281) 798-1357";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Local Houston roofers. Family owned & operated for 15+ years. Your neighbors' trusted roofing company. $500 OFF. Call (281) 798-1357!");
    }

    // Page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Local Roofer',
        page_location: window.location.href
      });
    }
  }, []);

  const localServices = [
    { icon: <Home className="w-8 h-8" />, title: 'Neighborhood Expert', desc: 'We know Houston weather and building codes inside out' },
    { icon: <Users className="w-8 h-8" />, title: 'Community Focused', desc: 'Your neighbors are our references - we live here too' },
    { icon: <Clock className="w-8 h-8" />, title: 'Quick Response', desc: 'Local team means faster service and better availability' },
    { icon: <Heart className="w-8 h-8" />, title: 'Personal Service', desc: 'You work with the same team from start to finish' }
  ];

  const neighborhoods = [
    'Cypress', 'Katy', 'Spring', 'Tomball', 'The Woodlands', 'Sugar Land',
    'Humble', 'Kingwood', 'Atascocita', 'Conroe', 'Magnolia', 'Richmond'
  ];

  const reviews = [
    { name: 'Jennifer Walsh', location: 'Fairfield, Cypress', text: 'These guys are our neighbors! They know the area and did amazing work on our roof after the hail storm. Highly recommend!', rating: 5 },
    { name: 'Carlos Martinez', location: 'Grand Lakes, Katy', text: 'Family-owned business that treats customers like family. Fair prices, quality work, and they stand behind their warranty.', rating: 5 },
    { name: 'Sarah Kim', location: 'Creekside, Tomball', text: 'Found them through my neighbor\'s recommendation. Best decision ever! Professional, local, and they care about our community.', rating: 5 }
  ];

  const localAdvantages = [
    { step: 1, title: 'We Live Here Too', desc: 'Our families are part of this community' },
    { step: 2, title: 'Know Local Codes', desc: 'Expert in Houston building requirements' },
    { step: 3, title: 'Weather Experts', desc: 'Understand Texas storms and humidity' },
    { step: 4, title: 'Neighbor References', desc: 'Your neighbors are our best advertising' }
  ];

  const faqs = [
    { q: 'Are you really a local Houston company?', a: 'Yes! We\'ve been based in the Houston metro area for over 15 years. Our owner lives in Cypress and our crews are all local residents who understand Houston\'s unique weather challenges.' },
    { q: 'Do you work in my specific neighborhood?', a: 'We serve all of Greater Houston including Cypress, Katy, Spring, Tomball, The Woodlands, and surrounding communities. If you\'re in the Houston area, we can help!' },
    { q: 'What makes you different from national roofing companies?', a: 'As a local company, you get personal service from the same team throughout your project. We know local building codes, work with local suppliers, and our reputation depends on satisfied neighbors.' },
    { q: 'Can you provide local references?', a: 'Absolutely! We have hundreds of satisfied customers throughout the Houston area and can provide references from your specific neighborhood upon request.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Local Roofers Houston TX | Family Owned | 15+ Years | (281) 798-1357"
        description="Local Houston roofers. Family owned & operated for 15+ years. Your neighbors' trusted roofing company. $500 OFF. Call (281) 798-1357!"
        keywords="local roofers houston, houston roofing company, local roofing contractors, family owned roofers houston"
        serviceName="Local Houston Roofing Services"
        serviceArea="Houston Metro Area"
      />
      <LandingHeader />
      <ExitIntentPopup />
      <MobileCallBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Your Local Houston Neighbors!</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Your Local Roofers
                <span className="block text-orange-300 text-3xl lg:text-4xl mt-2">Family Owned • Community Focused</span>
              </h1>
              
              <p className="text-xl mb-8 text-purple-100">
                We're not just your roofers - we're your neighbors! Family-owned and operated 
                in Houston for over 15 years. Your community is our community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Local Roofer',
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
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Get Local Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {BRAND.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <MapPin className="inline w-8 h-8 text-purple-600 mr-2" />
              Proudly Serving Greater Houston
            </h2>
            <p className="text-xl text-gray-600">
              Your local roofing team is active in these Houston communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-purple-50 border border-purple-200 p-3 rounded-lg text-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-purple-600">
                Don't see your area? Call us - we likely serve your neighborhood too!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantages */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Local Advantage
            </h2>
            <p className="text-xl text-gray-600">
              Why choose local roofers over national chains?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {localAdvantages.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-purple-800">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                  {idx < localAdvantages.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Local Roofing Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete roofing services from your Houston neighbors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localServices.map((service, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-purple-50 border border-purple-200">
                <div className="text-purple-600 mb-4 flex justify-center">{service.icon}</div>
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
              What Your Neighbors Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">5.0 Average (400+ Local Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
                <div className="text-xs text-purple-600 font-bold mt-2">✓ VERIFIED LOCAL CUSTOMER</div>
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
                Why Houston Families Choose Us
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: <Heart />, title: 'Family Owned & Operated', desc: 'Three generations of roofers serving Houston families with integrity and pride.' },
                  { icon: <MapPin />, title: 'Community Reputation', desc: 'Our reputation is built on satisfied neighbors. Word-of-mouth is our best advertising.' },
                  { icon: <Shield />, title: 'Local Warranty Support', desc: 'When you need warranty service, we\'re right here in your community.' },
                  { icon: <Users />, title: 'Personal Relationships', desc: 'You work with real people who care about you and your home.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="text-purple-600 flex-shrink-0">{React.cloneElement(item.icon, { className: 'w-6 h-6' })}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-xl">
              <div className="bg-orange-500 text-white p-4 rounded-t-lg -mx-8 -mt-8 mb-6">
                <h3 className="text-2xl font-bold text-center">🏡 Neighbor Special</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-4">$500 OFF</div>
                <div className="text-2xl font-semibold mb-2">+ FREE Estimate</div>
                <p className="text-gray-600 mb-6">Special pricing for our Houston neighbors</p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors w-full"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'phone_call', {
                        event_category: 'Local Roofer',
                        event_label: 'Special Offer CTA',
                        value: 1
                      });
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Your Local Team
                </a>
                <p className="text-sm text-gray-500 mt-4">Family owned • Community focused • Your neighbors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Local Roofing Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2 text-purple-800">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work with Your Local Roofing Team?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of Houston families who chose their local neighbors for roofing. Personal service, community trust!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center bg-orange-500 text-white px-12 py-6 rounded-lg font-bold text-2xl hover:bg-orange-600 transition-colors shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'phone_call', {
                    event_category: 'Local Roofer',
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
              className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get Local Quote
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <p className="text-lg font-semibold mt-6">
            Family Owned • Local • Your Neighbors
          </p>
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default LocalRooferPage;