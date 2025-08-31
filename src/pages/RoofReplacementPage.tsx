import React, { useState } from 'react';
import { Phone, Calculator, Home, TrendingUp, Award, Calendar, DollarSign, ChevronRight, Check, X } from 'lucide-react';

const RoofReplacementPage: React.FC = () => {
  const [roofSize, setRoofSize] = useState(2000);
  const [material, setMaterial] = useState('architectural');
  
  const materials = {
    '3tab': { name: '3-Tab Shingles', price: 3.50, warranty: 20 },
    'architectural': { name: 'Architectural Shingles', price: 4.50, warranty: 30 },
    'premium': { name: 'Premium Shingles', price: 6.00, warranty: 50 },
    'metal': { name: 'Standing Seam Metal', price: 8.50, warranty: 50 },
  };

  const calculatePrice = () => {
    const basePrice = roofSize * materials[material as keyof typeof materials].price;
    const laborAndMisc = basePrice * 0.4;
    return Math.round(basePrice + laborAndMisc);
  };

  const monthlyPayment = () => {
    const total = calculatePrice();
    return Math.round(total / 60); // 60 month financing
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Calculator */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue/10 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-brand-gold text-white px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-semibold">September Special: $500 OFF Ends Soon!</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Roof Replacement <span className="text-brand-blue">Done Right</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                25-year workmanship warranty • Insurance approved • Financing available
              </p>
            </div>

            {/* Interactive Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-brand-blue" />
                Instant Roof Replacement Estimate
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Roof Size (sq ft)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    className="w-full mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1,000</span>
                    <span className="font-bold text-brand-blue text-lg">{roofSize.toLocaleString()} sq ft</span>
                    <span>5,000</span>
                  </div>

                  <label className="block text-sm font-semibold mb-2 mt-6">
                    Roofing Material
                  </label>
                  <div className="space-y-2">
                    {Object.entries(materials).map(([key, mat]) => (
                      <label
                        key={key}
                        className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          material === key ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-200 hover:border-brand-blue/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="material"
                          value={key}
                          checked={material === key}
                          onChange={(e) => setMaterial(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold">{mat.name}</div>
                            <div className="text-sm text-gray-600">{mat.warranty} year warranty</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">${mat.price}/sq ft</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Your Estimate</h3>
                    
                    <div className="text-5xl font-bold mb-2">
                      ${calculatePrice().toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90 mb-4">
                      Total replacement cost
                    </div>

                    <div className="border-t border-white/20 pt-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <span>With $500 Sept Special:</span>
                        <span className="font-bold text-brand-gold">
                          ${(calculatePrice() - 500).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly payment (60mo):</span>
                        <span className="font-bold">${monthlyPayment()}/mo</span>
                      </div>
                    </div>

                    <a
                      href="tel:2817981357"
                      className="block w-full bg-white text-brand-blue py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                    >
                      Get Exact Quote →
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">This Estimate Includes:</h4>
                    <ul className="space-y-1 text-sm">
                      {[
                        'Complete tear-off of old roof',
                        'New underlayment & ice barrier',
                        'All materials & labor',
                        'Permit & disposal fees',
                        '25-year workmanship warranty'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Replace Your Roof Now?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <TrendingUp className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Increase Home Value</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+$15,000</div>
              <p className="text-gray-600">
                Average home value increase with new roof (85% ROI)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <DollarSign className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Save on Energy</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$200/mo</div>
              <p className="text-gray-600">
                Average savings with modern, energy-efficient materials
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Award className="w-12 h-12 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Insurance Discounts</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">15-20%</div>
              <p className="text-gray-600">
                Potential insurance savings with impact-resistant shingles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Flexible Financing Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Cash Discount</h3>
                <div className="text-3xl font-bold text-brand-blue mb-4">5% OFF</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Biggest savings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>No interest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Priority scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-brand-blue rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">12 Months Same as Cash</h3>
                <div className="text-3xl font-bold text-brand-blue mb-4">0% APR</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>No interest if paid in 12mo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Low monthly payments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Quick approval</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Extended Terms</h3>
                <div className="text-3xl font-bold text-brand-blue mb-4">60 Months</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Lowest monthly payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Fixed rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>No prepayment penalty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Roof Replacements in Your Area
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { location: 'Cypress, TX', days: '2 days', material: 'Architectural Shingles', color: 'Weathered Wood' },
              { location: 'Katy, TX', days: '1 day', material: 'Premium Shingles', color: 'Charcoal Black' },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    [Before/After Image]
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{project.location}</h3>
                      <p className="text-sm text-gray-600">Completed in {project.days}</p>
                    </div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material:</span>
                      <span className="font-semibold">{project.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Color:</span>
                      <span className="font-semibold">{project.color}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            September Special: $500 OFF Any Complete Replacement
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Plus free upgrade to architectural shingles (save $800 more)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:2817981357"
              className="inline-flex items-center bg-brand-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-brand-gold/90 transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Get Your Free Quote
            </a>
            <button className="inline-flex items-center bg-white text-brand-blue px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
              <Calculator className="w-6 h-6 mr-3" />
              Email Me Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoofReplacementPage;