import React, { useState } from 'react';
import { Calculator, Home, TrendingUp, DollarSign, PieChart, FileText, ArrowRight, Check, Info } from 'lucide-react';
import Header from '../components/Header';
import LandingPageFooter from '../components/LandingPageFooter';
import TrustBadges from '../components/TrustBadges';
import ImageGallery from '../components/ImageGallery';
import FloatingCTA from '../components/FloatingCTA';

const RoofCostCypressPage: React.FC = () => {
  const [homeSize, setHomeSize] = useState(2500);
  const [roofComplexity, setRoofComplexity] = useState('moderate');
  const [material, setMaterial] = useState('architectural');
  const [showFinancing, setShowFinancing] = useState(false);
  
  const materials = {
    '3tab': { 
      name: '3-Tab Shingles', 
      pricePerSqFt: 3.50, 
      warranty: 20,
      pros: ['Most affordable', 'Quick installation', 'Good for simple roofs'],
      lifespan: '15-20 years'
    },
    'architectural': { 
      name: 'Architectural Shingles', 
      pricePerSqFt: 4.50, 
      warranty: 30,
      pros: ['Best value', 'Wind resistant', 'Attractive appearance'],
      lifespan: '25-30 years'
    },
    'premium': { 
      name: 'Premium/Designer Shingles', 
      pricePerSqFt: 6.50, 
      warranty: 50,
      pros: ['Luxury appearance', 'Impact resistant', 'Energy efficient'],
      lifespan: '30-50 years'
    },
    'metal': { 
      name: 'Standing Seam Metal', 
      pricePerSqFt: 9.00, 
      warranty: 50,
      pros: ['Longest lasting', 'Energy savings', 'Insurance discounts'],
      lifespan: '40-70 years'
    },
    'tile': { 
      name: 'Clay/Concrete Tile', 
      pricePerSqFt: 11.00, 
      warranty: 50,
      pros: ['Mediterranean style', 'Fire resistant', 'Low maintenance'],
      lifespan: '50-100 years'
    }
  };

  const complexityMultiplier = {
    simple: 0.9,
    moderate: 1.0,
    complex: 1.2
  };

  const calculateRoofArea = () => {
    // Rough estimate: home size * 1.3 for ranch, * 1.5 for two-story
    return Math.round(homeSize * 1.4);
  };

  const calculatePrice = () => {
    const roofArea = calculateRoofArea();
    const basePrice = roofArea * materials[material as keyof typeof materials].pricePerSqFt;
    const complexityAdjustment = basePrice * complexityMultiplier[roofComplexity as keyof typeof complexityMultiplier];
    const laborAndOverhead = complexityAdjustment * 0.4;
    return Math.round(complexityAdjustment + laborAndOverhead);
  };

  const calculateMonthlyPayment = (months: number) => {
    const principal = calculatePrice();
    const rate = months === 12 ? 0 : 0.089 / 12; // 0% for 12 months, 8.9% APR otherwise
    if (rate === 0) return Math.round(principal / months);
    const payment = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    return Math.round(payment);
  };

  const calculateROI = () => {
    const cost = calculatePrice();
    const homeValue = 350000; // Average Cypress home value
    const valueIncrease = cost * 0.68; // 68% ROI typical for roof replacement
    return Math.round(valueIncrease);
  };

  const cypressFactors = [
    { factor: 'Hurricane Season', impact: '+15%', description: 'June-November wind damage risk' },
    { factor: 'Humidity', impact: '+10%', description: 'Accelerates shingle deterioration' },
    { factor: 'Hail Storms', impact: '+20%', description: 'Spring hail common in Cypress' },
    { factor: 'Heat', impact: '+5%', description: 'Summer temps over 95°F' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TrustBadges />

      {/* Hero with Calculator */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue/10 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* SEO-Optimized Heading */}
            <div className="text-center mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Roof Replacement Cost Calculator
                <span className="block text-brand-blue mt-2">Cypress, TX 2024</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant, accurate roofing prices for Cypress homes. Updated pricing for 77433, 77429, and 77410 zip codes.
              </p>
            </div>

            {/* Main Calculator */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-brand-blue text-white p-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Personalized Roof Replacement Quote for Cypress
                </h2>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Inputs */}
                  <div className="space-y-6">
                    {/* Home Size */}
                    <div>
                      <label className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Home Size (sq ft)</span>
                        <span className="text-brand-blue font-bold text-lg">{homeSize.toLocaleString()} sq ft</span>
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="5000"
                        step="100"
                        value={homeSize}
                        onChange={(e) => setHomeSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1,000</span>
                        <span>5,000</span>
                      </div>
                    </div>

                    {/* Roof Complexity */}
                    <div>
                      <label className="font-semibold mb-2 block">Roof Complexity</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'simple', label: 'Simple', desc: 'Few angles' },
                          { value: 'moderate', label: 'Moderate', desc: 'Some dormers' },
                          { value: 'complex', label: 'Complex', desc: 'Many features' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setRoofComplexity(option.value)}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              roofComplexity === option.value
                                ? 'border-brand-blue bg-brand-blue/5'
                                : 'border-gray-200 hover:border-brand-blue/50'
                            }`}
                          >
                            <div className="font-medium">{option.label}</div>
                            <div className="text-xs text-gray-600">{option.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Material Selection */}
                    <div>
                      <label className="font-semibold mb-2 block">Roofing Material</label>
                      <div className="space-y-2">
                        {Object.entries(materials).map(([key, mat]) => (
                          <label
                            key={key}
                            className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              material === key
                                ? 'border-brand-blue bg-brand-blue/5'
                                : 'border-gray-200 hover:border-brand-blue/50'
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
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="font-semibold">{mat.name}</div>
                                <div className="text-sm text-gray-600">{mat.lifespan} • {mat.warranty}yr warranty</div>
                              </div>
                              <div className="text-right ml-4">
                                <div className="font-bold text-brand-blue">${mat.pricePerSqFt}/sq ft</div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    {/* Price Display */}
                    <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4">Your Estimated Cost</h3>
                      
                      <div className="text-5xl font-bold mb-2">
                        ${calculatePrice().toLocaleString()}
                      </div>
                      <div className="text-sm opacity-90 mb-4">
                        Total replacement cost for {calculateRoofArea().toLocaleString()} sq ft roof
                      </div>

                      <div className="border-t border-white/20 pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Material ({materials[material as keyof typeof materials].name}):</span>
                          <span className="font-bold">
                            ${Math.round(calculateRoofArea() * materials[material as keyof typeof materials].pricePerSqFt).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Labor & Installation:</span>
                          <span className="font-bold">
                            ${Math.round(calculatePrice() * 0.4).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowFinancing(!showFinancing)}
                        className="w-full mt-4 bg-white text-brand-blue py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                      >
                        View Financing Options →
                      </button>
                    </div>

                    {/* Financing Options */}
                    {showFinancing && (
                      <div className="bg-green-50 rounded-xl p-6 mb-6">
                        <h4 className="font-bold mb-4 text-green-800">Financing Available</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">12 Months Same as Cash</div>
                                <div className="text-sm text-gray-600">0% APR</div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-brand-blue">
                                  ${calculateMonthlyPayment(12)}/mo
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">60 Month Plan</div>
                                <div className="text-sm text-gray-600">8.9% APR</div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-brand-blue">
                                  ${calculateMonthlyPayment(60)}/mo
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ROI Calculator */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-bold mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-brand-blue" />
                        Return on Investment
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Home Value Increase:</span>
                          <span className="font-bold text-green-600">+${calculateROI().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Insurance Savings (annual):</span>
                          <span className="font-bold text-green-600">~$420</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Energy Savings (annual):</span>
                          <span className="font-bold text-green-600">~$240</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cypress-Specific Factors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Roofing Costs More in Cypress, TX
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {cypressFactors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{factor.factor}</h3>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                      {factor.impact}
                    </span>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-gold/10 rounded-xl p-6 text-center">
              <p className="text-lg">
                <strong>Average Cypress roof lasts:</strong> 18-22 years (vs. 25-30 national average)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Due to extreme weather conditions specific to the Houston area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compare Roofing Materials for Cypress Homes
          </h2>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Material</th>
                  <th className="px-6 py-4 text-center">Cost/Sq Ft</th>
                  <th className="px-6 py-4 text-center">Lifespan</th>
                  <th className="px-6 py-4 text-center">Wind Rating</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">3-Tab Shingles</td>
                  <td className="px-6 py-4 text-center">$3.50</td>
                  <td className="px-6 py-4 text-center">15-20 yrs</td>
                  <td className="px-6 py-4 text-center">60-70 mph</td>
                  <td className="px-6 py-4">Budget-conscious homeowners</td>
                </tr>
                <tr className="border-b bg-blue-50">
                  <td className="px-6 py-4 font-semibold">
                    Architectural <span className="text-brand-gold">★ MOST POPULAR</span>
                  </td>
                  <td className="px-6 py-4 text-center">$4.50</td>
                  <td className="px-6 py-4 text-center">25-30 yrs</td>
                  <td className="px-6 py-4 text-center">110-130 mph</td>
                  <td className="px-6 py-4">Best value for Cypress weather</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Premium Shingles</td>
                  <td className="px-6 py-4 text-center">$6.50</td>
                  <td className="px-6 py-4 text-center">30-50 yrs</td>
                  <td className="px-6 py-4 text-center">130-150 mph</td>
                  <td className="px-6 py-4">Luxury homes, HOA requirements</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Metal Roofing</td>
                  <td className="px-6 py-4 text-center">$9.00</td>
                  <td className="px-6 py-4 text-center">40-70 yrs</td>
                  <td className="px-6 py-4 text-center">140-160 mph</td>
                  <td className="px-6 py-4">Maximum durability & energy savings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Local Pricing Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            2024 Cypress Roofing Price Trends
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Average Costs by Neighborhood</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Bridgeland:</span>
                      <span className="font-bold">$12,000 - $18,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fairfield:</span>
                      <span className="font-bold">$10,000 - $15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coles Crossing:</span>
                      <span className="font-bold">$11,000 - $16,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Towne Lake:</span>
                      <span className="font-bold">$13,000 - $20,000</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Price Factors</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">HOA requirements may limit material choices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Hurricane season (June-Nov) sees 20% price increase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Spring hail damage creates high demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">2024 material costs up 8% from 2023</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-center">
                  <Info className="inline w-5 h-5 text-yellow-600 mr-2" />
                  <strong>Pro Tip:</strong> Schedule replacement in January-March for best prices (10-15% savings)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get Your Exact Roof Replacement Quote
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Free inspection • Detailed estimate • No obligations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2817981357"
              className="inline-flex items-center bg-brand-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-brand-gold-light transition-colors"
            >
              <Calculator className="w-6 h-6 mr-3" />
              Get Exact Quote Now
            </a>
            <button className="inline-flex items-center bg-white text-brand-blue px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
              <FileText className="w-6 h-6 mr-3" />
              Email Me Estimate
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Serving all Cypress zip codes: 77433, 77429, 77410
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ImageGallery 
            title="Our Recent Roof Replacements in Cypress"
            images={[]}
          />
        </div>
      </section>

      <LandingPageFooter />
      <FloatingCTA />
    </div>
  );
};

export default RoofCostCypressPage;