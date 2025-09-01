import React, { useState } from 'react';
import { Building, Shield, Clock, DollarSign, Wrench, FileText, CheckCircle, TrendingUp, Award, Phone, Calculator, Users } from 'lucide-react';
import LandingHeader from '../components/LandingHeader';
import LandingPageFooter from '../components/LandingPageFooter';
import QuickLeadForm from '../components/QuickLeadForm';

const CommercialCypressPage: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [roofType, setRoofType] = useState('');
  const [sqFootage, setSqFootage] = useState(10000);

  const businessTypes = [
    { id: 'retail', name: 'Retail Store', icon: '🏪', needs: 'Customer safety, quick repairs' },
    { id: 'warehouse', name: 'Warehouse', icon: '🏭', needs: 'Large flat roofs, loading dock protection' },
    { id: 'office', name: 'Office Building', icon: '🏢', needs: 'Professional appearance, minimal disruption' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️', needs: 'Health code compliance, grease venting' },
    { id: 'medical', name: 'Medical Facility', icon: '🏥', needs: '24/7 operations, patient safety' },
    { id: 'industrial', name: 'Industrial', icon: '⚙️', needs: 'Heavy-duty materials, equipment protection' }
  ];

  const roofTypes = [
    { id: 'tpo', name: 'TPO', lifespan: '20-30 years', cost: '$5-8/sq ft', best: 'Energy efficiency' },
    { id: 'epdm', name: 'EPDM Rubber', lifespan: '25-30 years', cost: '$4-7/sq ft', best: 'Durability' },
    { id: 'modified', name: 'Modified Bitumen', lifespan: '20 years', cost: '$3-6/sq ft', best: 'Budget-friendly' },
    { id: 'metal', name: 'Metal Roofing', lifespan: '40-70 years', cost: '$7-12/sq ft', best: 'Longevity' },
    { id: 'builtup', name: 'Built-Up (BUR)', lifespan: '15-30 years', cost: '$4-7/sq ft', best: 'Flat roofs' }
  ];

  const commercialClients = [
    { name: 'Cypress Town Center', type: 'Retail Complex', size: '45,000 sq ft' },
    { name: 'Northwest Medical', type: 'Medical Office', size: '28,000 sq ft' },
    { name: 'Cypress Distribution Hub', type: 'Warehouse', size: '120,000 sq ft' },
    { name: 'Bridgeland Business Park', type: 'Office Complex', size: '65,000 sq ft' }
  ];

  const maintenancePlans = [
    { name: 'Basic', visits: 2, price: '$1,500', features: ['Bi-annual inspections', 'Priority scheduling', 'Basic repairs included'] },
    { name: 'Professional', visits: 4, price: '$3,500', features: ['Quarterly inspections', 'All minor repairs', '24/7 emergency response', 'Detailed reports'] },
    { name: 'Enterprise', visits: 12, price: '$8,000', features: ['Monthly inspections', 'Unlimited repairs', 'Dedicated account manager', 'Warranty extensions'] }
  ];

  const calculateEstimate = () => {
    const baseRate = roofType === 'tpo' ? 6.5 : roofType === 'metal' ? 9.5 : 5.5;
    return Math.round(sqFootage * baseRate);
  };

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy text-white py-6 sm:py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* B2B Trust Signals */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur px-3 py-2 rounded-full inline-flex items-center">
                <Building className="w-4 h-4 mr-2 text-brand-gold" />
                <span className="font-semibold text-sm sm:text-base">500+ Commercial Projects</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-3 py-2 rounded-full inline-flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-brand-gold" />
                <span className="font-semibold text-sm sm:text-base">Net 30 Terms</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-3 py-2 rounded-full inline-flex items-center">
                <Shield className="w-4 h-4 mr-2 text-brand-gold" />
                <span className="font-semibold text-sm sm:text-base">$5M Insurance</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4">
              Commercial Roofing Contractors
              <span className="block text-brand-gold mt-2">Cypress, TX</span>
            </h1>

            <p className="text-lg sm:text-xl text-center mb-6 text-gray-200 max-w-3xl mx-auto">
              Minimal business disruption • Weekend/night work available • 
              Maintenance plans • All commercial roof types
            </p>

            {/* Primary CTA - Phone */}
            <div className="text-center mb-6">
              <a
                href="tel:2817981357"
                className="inline-flex items-center bg-brand-gold text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-brand-gold-light transition-colors mb-4 shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Get Commercial Quote: (281) 798-1357
              </a>
              <p className="text-sm text-gray-300">
                Free assessment • Net 30 available • Weekend scheduling
              </p>
            </div>

            {/* Quick Lead Form with Company Field */}
            <div className="max-w-md mx-auto mb-8">
              <QuickLeadForm 
                placeholder="Company name & address"
                buttonText="Get Commercial Quote"
                showCompanyField={true}
              />
            </div>

            {/* Quick Stats - Compact for mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center">
                <Building className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="text-xl font-bold">500+</p>
                <p className="text-xs sm:text-sm">Commercial Projects</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="text-xl font-bold">24/7</p>
                <p className="text-xs sm:text-sm">Emergency Service</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="text-xl font-bold">Net 30</p>
                <p className="text-xs sm:text-sm">Payment Terms</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="text-xl font-bold">15+</p>
                <p className="text-xs sm:text-sm">Crew Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Type Selector */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Specialized Solutions for Your Business Type
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every business has unique roofing needs. We understand yours.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setBusinessType(type.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    businessType === type.id
                      ? 'border-brand-blue bg-brand-blue/5 shadow-lg'
                      : 'border-gray-200 hover:border-brand-blue/50 bg-white'
                  }`}
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600">{type.needs}</p>
                  {businessType === type.id && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-brand-blue font-semibold">✓ Specialized expertise</p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {businessType && (
              <div className="mt-8 bg-brand-gold/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Our {businessTypes.find(t => t.id === businessType)?.name} Experience</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">50+</p>
                    <p className="text-sm">Projects completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">98%</p>
                    <p className="text-sm">On-time completion</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">Zero</p>
                    <p className="text-sm">Business interruptions</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Commercial Roof Replacement Cost Estimator
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Inputs */}
                <div>
                  <div className="mb-6">
                    <label className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Building Size (sq ft)</span>
                      <span className="text-brand-blue font-bold text-lg">{sqFootage.toLocaleString()} sq ft</span>
                    </label>
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="1000"
                      value={sqFootage}
                      onChange={(e) => setSqFootage(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5,000</span>
                      <span>100,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold mb-3 block">Roof System Type</label>
                    <div className="space-y-2">
                      {roofTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            roofType === type.id
                              ? 'border-brand-blue bg-brand-blue/5'
                              : 'border-gray-200 hover:border-brand-blue/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="roofType"
                            value={type.id}
                            checked={roofType === type.id}
                            onChange={(e) => setRoofType(e.target.value)}
                            className="sr-only"
                          />
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold">{type.name}</div>
                              <div className="text-sm text-gray-600">{type.lifespan} • Best for: {type.best}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-brand-blue">{type.cost}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  {roofType && (
                    <div className="bg-gradient-to-br from-brand-blue to-brand-navy text-white rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Estimated Project Cost</h3>
                      
                      <div className="text-5xl font-bold mb-2">
                        ${calculateEstimate().toLocaleString()}
                      </div>
                      <div className="text-sm opacity-90 mb-6">
                        For {sqFootage.toLocaleString()} sq ft {roofTypes.find(t => t.id === roofType)?.name} roof
                      </div>

                      <div className="space-y-3 border-t border-white/20 pt-4">
                        <div className="flex justify-between text-sm">
                          <span>Materials:</span>
                          <span>${Math.round(calculateEstimate() * 0.6).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Labor:</span>
                          <span>${Math.round(calculateEstimate() * 0.3).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Disposal & Permits:</span>
                          <span>${Math.round(calculateEstimate() * 0.1).toLocaleString()}</span>
                        </div>
                      </div>

                      <button className="w-full mt-6 bg-white text-brand-blue py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                        Get Detailed Quote →
                      </button>
                    </div>
                  )}

                  <div className="mt-6 bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-800">Tax Benefits Available</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Section 179 deduction for roof replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Energy-efficient roof tax credits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Accelerated depreciation available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Commercial Projects in Cypress
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {commercialClients.map((client, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{client.name}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600">{client.type}</span>
                      <span className="font-semibold text-brand-blue">{client.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Completed on time and under budget</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                Trusted by <span className="font-bold text-brand-blue">200+ Cypress businesses</span> for their roofing needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Commercial Roof Maintenance Plans
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Extend your roof's life by 40% with preventive maintenance. All plans include priority emergency service.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {maintenancePlans.map((plan, idx) => (
                <div key={idx} className={`rounded-xl p-6 ${
                  idx === 1 ? 'bg-brand-blue text-white shadow-xl scale-105' : 'bg-gray-50'
                }`}>
                  {idx === 1 && (
                    <div className="text-center mb-3">
                      <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-1">
                    {plan.price}<span className="text-lg font-normal">/year</span>
                  </div>
                  <p className={`text-sm mb-4 ${idx === 1 ? 'text-gray-200' : 'text-gray-600'}`}>
                    {plan.visits} inspections per year
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                          idx === 1 ? 'text-brand-gold' : 'text-green-600'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 py-3 rounded-lg font-bold transition-colors ${
                    idx === 1
                      ? 'bg-white text-brand-blue hover:bg-gray-100'
                      : 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Cypress Businesses Choose Rapid Roofing
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Minimal Business Disruption</h3>
                    <p className="text-gray-600">Weekend and night work available. We work around your schedule, not the other way around.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">$5 Million Insurance Coverage</h3>
                    <p className="text-gray-600">Full liability and workers' comp protection. Your business assets are protected.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Flexible Payment Terms</h3>
                    <p className="text-gray-600">Net 30/60/90 available for qualified businesses. No large upfront payments required.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Asset Management</h3>
                    <p className="text-gray-600">We track your roof's condition and provide budget forecasting for replacements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">24/7 Emergency Response</h3>
                    <p className="text-gray-600">Storm damage? Leak? We're available round the clock for emergency repairs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Manufacturer Warranties</h3>
                    <p className="text-gray-600">GAF, Firestone, and Carlisle certified. Get the best warranties in the industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get Your Free Commercial Roof Assessment
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Detailed inspection • Budget planning • Maintenance recommendations • No obligation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2817981357"
              className="inline-flex items-center bg-brand-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-brand-gold-light transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              (281) 798-1357
            </a>
            <button className="inline-flex items-center bg-white text-brand-blue px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
              <Calculator className="w-6 h-6 mr-3" />
              Get Instant Quote
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Serving commercial properties throughout Cypress, Katy, Spring, and Northwest Houston
          </p>
        </div>
      </section>

      <LandingPageFooter />
    </div>
  );
};

export default CommercialCypressPage;