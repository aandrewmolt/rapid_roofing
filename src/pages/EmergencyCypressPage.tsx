import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, Clock, Shield, MapPin, Star, ChevronRight, CheckCircle, Zap, Award } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import ImageGallery from '../components/ImageGallery';
import FloatingCTA from '../components/FloatingCTA';
import SEOHead from '../components/SEOHead';
import QuickLeadForm from '../components/QuickLeadForm';

const EmergencyCypressPage: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Show chat after 10 seconds
    const chatTimer = setTimeout(() => {
      setShowChat(true);
    }, 10000);

    return () => {
      clearTimeout(chatTimer);
    };
  }, []);


  const emergencySteps = [
    { time: 'Within 5 min', action: 'Your call answered by local team' },
    { time: '15 min', action: 'Emergency crew dispatched' },
    { time: '45-60 min', action: 'Arrival at your Cypress home' },
    { time: '90 min', action: 'Leak stopped, damage contained' }
  ];

  const recentEmergencies = [
    { location: 'Bridgeland, Cypress', time: '2 hours ago', issue: 'Tree damage from storm' },
    { location: 'Fairfield, Cypress', time: '4 hours ago', issue: 'Severe roof leak' },
    { location: 'Coles Crossing, Cypress', time: 'Yesterday', issue: 'Wind damage repair' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Emergency Roof Repair Cypress TX | 24/7 Service | (281) 798-1357"
        description="Emergency roof repair in Cypress TX. 24/7 response, average 47-minute arrival. Storm damage, leaks, wind damage. Call (281) 798-1357 now!"
        keywords="emergency roof repair cypress tx, 24 hour roofing cypress, emergency leak repair, storm damage cypress"
        serviceName="Emergency Roof Repair"
        serviceArea="Cypress, TX"
      />
      <LandingHeader />
      
      {/* Emergency Alert Bar - Compressed for mobile */}
      <div className="bg-red-600 text-white py-1.5 animate-pulse">
        <div className="container mx-auto px-2 flex items-center justify-center gap-1 sm:gap-2">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-bold text-xs sm:text-sm">EMERGENCY CREWS AVAILABLE NOW</span>
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-b from-gray-900 to-brand-navy text-white py-6 sm:py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Trust Signals - Above fold on mobile */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-sm">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white/90">GAF Certified</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-white/90">24/7 Emergency</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-3 sm:mb-4">
              EMERGENCY ROOF REPAIR
              <span className="block text-brand-gold text-2xl sm:text-3xl lg:text-5xl mt-1">CYPRESS, TEXAS</span>
            </h1>

            {/* Response Time Badge - Critical trust signal */}
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 max-w-fit mx-auto mb-4">
              <p className="text-brand-gold font-bold text-lg sm:text-xl">⚡ 47 Min Response Time</p>
            </div>

            {/* Single Primary CTA - Phone */}
            <div className="mb-4">
              <a
                href="tel:2817981357"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl animate-pulse mx-auto w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                CALL NOW: (281) 798-1357
              </a>
            </div>

            {/* Quick Lead Form - For non-phone users */}
            <QuickLeadForm 
              variant="inline" 
              buttonText="Get Help Now"
              placeholder="Quick quote: Your phone #"
            />
            
            {/* Secondary Actions - Below primary CTA */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300 mb-2">Or tap for other options:</p>
              <button
                onClick={() => setShowChat(true)}
                className="text-brand-gold underline text-sm hover:text-brand-gold-light"
              >
                💬 Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <Zap className="inline w-8 h-8 text-yellow-500 mr-2" />
            Rapid Response Timeline for Cypress Residents
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {emergencySteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {idx + 1}
                    </div>
                    <div className="text-brand-gold font-bold mb-2">{step.time}</div>
                    <p className="text-sm text-gray-700">{step.action}</p>
                  </div>
                  {idx < emergencySteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-brand-blue" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Emergency Calls */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Emergency Calls in Cypress
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {recentEmergencies.map((emergency, idx) => (
              <div key={idx} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-lg">{emergency.location}</p>
                    <p className="text-gray-600">{emergency.issue}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{emergency.time}</p>
                    <p className="text-green-600 font-semibold">✓ Resolved</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold">
              Join <span className="text-brand-blue">287 Cypress homeowners</span> who called us this month
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              We Cover All Cypress Neighborhoods
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-brand-blue">North Cypress</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Bridgeland
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Towne Lake
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Cypress Creek Lakes
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-brand-blue">Central Cypress</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Fairfield
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Coles Crossing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Stone Gate
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-brand-blue">South Cypress</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Blackhorse Ranch
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Lakes of Rosehill
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Miramesa
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-brand-blue/10 rounded-lg text-center">
                <p className="text-lg">
                  <strong>Average Response Time:</strong>{' '}
                  <span className="text-brand-blue font-bold">47 minutes</span> anywhere in Cypress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="w-12 h-12 text-brand-gold mx-auto mb-3" />
                <p className="font-bold">Fully Insured</p>
                <p className="text-sm text-gray-600">$2M Liability</p>
              </div>
              <div>
                <Clock className="w-12 h-12 text-brand-gold mx-auto mb-3" />
                <p className="font-bold">24/7 Service</p>
                <p className="text-sm text-gray-600">365 Days/Year</p>
              </div>
              <div>
                <Star className="w-12 h-12 text-brand-gold mx-auto mb-3" />
                <p className="font-bold">5-Star Rated</p>
                <p className="text-sm text-gray-600">500+ Reviews</p>
              </div>
              <div>
                <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-3" />
                <p className="font-bold">Local Team</p>
                <p className="text-sm text-gray-600">Based in Cypress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ImageGallery 
            title="Recent Emergency Repairs in Cypress"
            images={[]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Water Damage Spreads Fast in Cypress's Humid Climate
          </h2>
          <p className="text-xl mb-8">
            Every minute counts. Our emergency crews are standing by.
          </p>
          <a
            href="tel:2817981357"
            className="inline-flex items-center bg-white text-red-600 px-12 py-5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            <Phone className="w-8 h-8 mr-3" />
            (281) 798-1357 - CALL NOW
          </a>
          <p className="mt-4 text-sm">
            Serving Cypress, Fairfield, Bridgeland, and all 77433, 77429, 77410 zip codes
          </p>
        </div>
      </section>

      {/* Live Chat Widget (Simulated) */}
      {showChat && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-4 w-80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold">Emergency Support</span>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Hi! I see you're in Cypress. We have crews available now. How can we help?
            </p>
            <button className="w-full bg-brand-blue text-white py-2 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors">
              Start Emergency Chat
            </button>
          </div>
        </div>
      )}

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default EmergencyCypressPage;