import React, { useState, useEffect } from 'react';
import { Wind, AlertTriangle, Shield, FileText, Camera, CheckCircle, DollarSign, Clock, MapPin } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';

const StormDamageHoustonPage: React.FC = () => {
  const [selectedDamage, setSelectedDamage] = useState<string[]>([]);
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [showStormAlert, setShowStormAlert] = useState(true);

  useEffect(() => {
    // Check for recent storms (simulated)
    const timer = setTimeout(() => {
      setShowStormAlert(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const damageTypes = [
    { id: 'missing-shingles', name: 'Missing Shingles', severity: 'High', covered: true },
    { id: 'hail-dents', name: 'Hail Dents/Impacts', severity: 'High', covered: true },
    { id: 'wind-damage', name: 'Wind Lift/Creasing', severity: 'Medium', covered: true },
    { id: 'tree-damage', name: 'Tree/Debris Impact', severity: 'High', covered: true },
    { id: 'water-spots', name: 'Interior Water Spots', severity: 'High', covered: true },
    { id: 'gutter-damage', name: 'Gutter Damage', severity: 'Medium', covered: true },
  ];

  const insuranceCompanies = [
    'State Farm', 'Allstate', 'USAA', 'Farmers', 'Progressive',
    'Liberty Mutual', 'Nationwide', 'Travelers', 'American Family', 'Chubb'
  ];

  const recentStorms = [
    { date: 'May 16, 2024', name: 'Derecho Event', winds: '100mph', areas: 'Cypress, Spring, Kingwood' },
    { date: 'April 28, 2024', name: 'Hailstorm', hail: '2.5"', areas: 'Katy, Sugar Land, Cypress' },
    { date: 'March 15, 2024', name: 'Tornado', category: 'EF2', areas: 'North Houston, Conroe' },
  ];

  const handleDamageToggle = (damageId: string) => {
    setSelectedDamage(prev =>
      prev.includes(damageId)
        ? prev.filter(id => id !== damageId)
        : [...prev, damageId]
    );
  };

  const calculateClaimEstimate = () => {
    const baseAmount = 8000;
    const perDamageAmount = 2500;
    return baseAmount + (selectedDamage.length * perDamageAmount);
  };

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Storm Alert Banner */}
      {showStormAlert && (
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 animate-pulse">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">STORM ALERT: Recent hail damage reported in Houston/Cypress area</span>
              <button
                onClick={() => setShowStormAlert(false)}
                className="ml-4 text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-brand-navy text-white py-6 sm:py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 98% Claims Approved Badge */}
            <div className="bg-green-500/20 border border-green-400/30 rounded-lg px-3 py-1.5 max-w-fit mx-auto mb-3">
              <p className="text-green-400 font-bold text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                98% Claims Approved
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-3">
              Storm Damage Claims
              <span className="block text-brand-gold text-2xl sm:text-3xl lg:text-4xl mt-1">Houston & Cypress</span>
            </h1>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <DollarSign className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm">Deductible Only</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Claims Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <Clock className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold">48hr</div>
                <div className="text-sm">Claim Filing</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Inspection</div>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2817981357"
                className="inline-flex items-center justify-center bg-brand-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors"
              >
                <Shield className="w-5 h-5 mr-2" />
                Start Insurance Claim
              </a>
              <button className="inline-flex items-center justify-center bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                <Camera className="w-5 h-5 mr-2" />
                Upload Damage Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Storm Activity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Storm Activity in Houston/Cypress Area
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 mb-8">
              {recentStorms.map((storm, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                          {storm.date}
                        </span>
                        <h3 className="font-bold text-lg">{storm.name}</h3>
                      </div>
                      <p className="text-gray-600">
                        {storm.winds && `Wind speeds: ${storm.winds} • `}
                        {storm.hail && `Hail size: ${storm.hail} • `}
                        {storm.category && `Category: ${storm.category} • `}
                        Affected: {storm.areas}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-green-600 font-semibold">Insurance Approved</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Time-Sensitive Insurance Filing</h3>
                  <p className="text-gray-700">
                    Most insurance policies require storm damage claims within 1 year of the event. 
                    The May 16th derecho claims deadline is approaching. Don't lose your coverage!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Damage Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Check Your Storm Damage Coverage
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select all damage types you've noticed. We'll estimate your insurance claim value.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Damage Selector */}
              <div>
                <h3 className="font-bold text-lg mb-4">What damage do you see?</h3>
                <div className="space-y-3">
                  {damageTypes.map((damage) => (
                    <label
                      key={damage.id}
                      className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedDamage.includes(damage.id)
                          ? 'border-brand-blue bg-brand-blue/5'
                          : 'border-gray-200 hover:border-brand-blue/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedDamage.includes(damage.id)}
                        onChange={() => handleDamageToggle(damage.id)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded ${
                            selectedDamage.includes(damage.id) ? 'bg-brand-blue' : 'bg-gray-300'
                          }`}>
                            {selectedDamage.includes(damage.id) && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold">{damage.name}</div>
                            <div className="text-sm text-gray-600">
                              Severity: <span className={`font-semibold ${
                                damage.severity === 'High' ? 'text-red-600' : 'text-yellow-600'
                              }`}>{damage.severity}</span>
                            </div>
                          </div>
                        </div>
                        {damage.covered && (
                          <span className="text-green-600 text-sm font-semibold">Covered</span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                {/* Insurance Company Selector */}
                <div className="mt-6">
                  <label className="block font-bold text-lg mb-3">Your Insurance Company</label>
                  <select
                    value={insuranceCompany}
                    onChange={(e) => setInsuranceCompany(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none"
                  >
                    <option value="">Select your insurance...</option>
                    {insuranceCompanies.map((company) => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Claim Estimate */}
              <div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 sticky top-24">
                  <h3 className="font-bold text-lg mb-4">Your Estimated Claim Value</h3>
                  
                  {selectedDamage.length > 0 ? (
                    <>
                      <div className="text-4xl font-bold text-green-600 mb-4">
                        ${calculateClaimEstimate().toLocaleString()}
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span>Damage items selected:</span>
                          <span className="font-semibold">{selectedDamage.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Coverage probability:</span>
                          <span className="font-semibold text-green-600">98%</span>
                        </div>
                        {insuranceCompany && (
                          <div className="flex justify-between text-sm">
                            <span>{insuranceCompany} deductible:</span>
                            <span className="font-semibold">~$1,000-2,500</span>
                          </div>
                        )}
                      </div>

                      <div className="bg-white rounded-lg p-4 mb-4">
                        <h4 className="font-semibold mb-2">What we'll do:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Document all damage with photos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Meet with YOUR adjuster</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Ensure nothing is missed</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>Handle all paperwork</span>
                          </li>
                        </ul>
                      </div>

                      <a
                        href="tel:2817981357"
                        className="block w-full bg-brand-blue text-white py-3 rounded-lg font-bold text-center hover:bg-brand-blue-dark transition-colors"
                      >
                        Start Your Claim Now →
                      </a>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Wind className="w-16 h-16 mx-auto mb-3 text-gray-300" />
                      <p>Select damage types to see your estimated claim value</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Storm Damage Insurance Process
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-blue"></div>
              
              {[
                {
                  day: 'Day 1',
                  title: 'Free Inspection',
                  desc: 'We document all storm damage with detailed photos and measurements',
                  icon: <Camera className="w-6 h-6" />
                },
                {
                  day: 'Day 2',
                  title: 'File Your Claim',
                  desc: 'We help file your claim with all necessary documentation',
                  icon: <FileText className="w-6 h-6" />
                },
                {
                  day: 'Day 3-5',
                  title: 'Meet Adjuster',
                  desc: 'We meet with YOUR insurance adjuster to ensure full coverage',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  day: 'Day 7-10',
                  title: 'Begin Repairs',
                  desc: 'Once approved, we start repairs immediately with quality materials',
                  icon: <CheckCircle className="w-6 h-6" />
                }
              ].map((step, idx) => (
                <div key={idx} className={`flex items-center mb-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="flex-1">
                    <div className={`bg-white rounded-lg p-6 shadow-lg ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white">
                          {step.icon}
                        </div>
                        <span className="text-brand-blue font-bold">{step.day}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-brand-blue rounded-full items-center justify-center text-white font-bold z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Houston Storm Damage Claims We've Won
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                location: 'Cypress (77433)',
                storm: 'May 16 Derecho',
                initial: '$4,200',
                final: '$18,500',
                increase: '+$14,300'
              },
              {
                location: 'Katy (77450)',
                storm: 'April Hailstorm',
                initial: '$2,800',
                final: '$12,700',
                increase: '+$9,900'
              },
              {
                location: 'Spring (77379)',
                storm: 'March Tornado',
                initial: '$6,500',
                final: '$24,300',
                increase: '+$17,800'
              }
            ].map((claim, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-center mb-4">
                  <p className="font-bold text-lg">{claim.location}</p>
                  <p className="text-sm text-gray-600">{claim.storm}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Initial offer:</span>
                    <span className="line-through text-gray-500">{claim.initial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final settlement:</span>
                    <span className="font-bold text-green-600">{claim.final}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between">
                      <span>We got them:</span>
                      <span className="font-bold text-brand-gold text-lg">{claim.increase}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg">
              Total additional coverage recovered for Houston homeowners in 2024:{' '}
              <span className="font-bold text-brand-blue text-2xl">$3.2 Million</span>
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Storm Damage Service Areas
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-brand-blue" />
                    Northwest Houston
                  </h3>
                  <ul className="space-y-2">
                    {['Cypress (77433, 77429)', 'Spring (77379, 77388)', 'Tomball (77375, 77377)', 'The Woodlands (77380, 77389)'].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-brand-blue" />
                    West Houston
                  </h3>
                  <ul className="space-y-2">
                    {['Katy (77450, 77494)', 'Sugar Land (77479, 77498)', 'Richmond (77406, 77407)', 'Fulshear (77441)'].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-brand-blue/10 rounded-lg text-center">
                <p className="font-semibold">
                  24/7 Emergency Response Throughout Greater Houston
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't Let Insurance Companies Shortchange You
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            We've helped Houston homeowners recover millions in storm damage claims. 
            Free inspection, no upfront costs.
          </p>
          <a
            href="tel:2817981357"
            className="inline-flex items-center bg-brand-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-brand-gold-light transition-colors"
          >
            <Shield className="w-6 h-6 mr-3" />
            Start Your Storm Damage Claim
          </a>
          <p className="mt-6 text-sm text-gray-300">
            Serving all Houston, Cypress, Katy, Spring, and surrounding areas
          </p>
        </div>
      </section>

      <LandingPageFooter />
    </div>
  );
};

export default StormDamageHoustonPage;