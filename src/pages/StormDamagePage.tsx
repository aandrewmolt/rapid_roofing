import React, { useState } from 'react';
import { Phone, FileText, Camera, CheckCircle, AlertCircle, Shield, CloudRain, Wind, Home, DollarSign, Clock } from 'lucide-react';

const StormDamagePage: React.FC = () => {
  const [damageType, setDamageType] = useState('');
  
  const damageTypes = [
    { id: 'hail', name: 'Hail Damage', icon: '🌨️', desc: 'Dents, cracks, exposed mat' },
    { id: 'wind', name: 'Wind Damage', icon: '💨', desc: 'Missing shingles, lifted edges' },
    { id: 'tree', name: 'Tree Damage', icon: '🌳', desc: 'Impact damage, holes' },
    { id: 'water', name: 'Water Damage', icon: '💧', desc: 'Active leaks, water stains' },
  ];

  const insuranceCompanies = [
    'State Farm', 'Allstate', 'USAA', 'Farmers', 'Progressive', 
    'Liberty Mutual', 'Nationwide', 'American Family', 'Travelers'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero with Insurance Focus */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue/20 to-brand-navy text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Insurance Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full inline-flex items-center">
                <Shield className="w-5 h-5 mr-2 text-brand-gold" />
                <span className="font-semibold">Insurance Claim Specialists</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-center mb-6">
              Storm Damage? We Handle Your Insurance Claim
            </h1>
            
            <p className="text-xl text-center mb-8 text-gray-200 max-w-3xl mx-auto">
              Don't get shortchanged by insurance. We document everything, meet adjusters, 
              and ensure you get the maximum coverage you deserve.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: <DollarSign />, stat: '$18.5M', label: 'Claims Approved' },
                { icon: <CheckCircle />, stat: '98%', label: 'Approval Rate' },
                { icon: <Clock />, stat: '48hr', label: 'Claim Filing' },
                { icon: <FileText />, stat: 'Free', label: 'Claim Help' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-brand-gold flex justify-center mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold">{item.stat}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:2817981357"
                className="inline-flex items-center justify-center bg-brand-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Free Inspection
              </a>
              <button className="inline-flex items-center justify-center bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                <Camera className="w-5 h-5 mr-2" />
                Upload Damage Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Damage Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Type of Storm Damage Do You Have?</h2>
          <p className="text-center text-gray-600 mb-8">Click to see if it's covered by insurance</p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {damageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setDamageType(type.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  damageType === type.id 
                    ? 'border-brand-blue bg-brand-blue/5 scale-105' 
                    : 'border-gray-200 hover:border-brand-blue/50'
                }`}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="font-bold mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
                {damageType === type.id && (
                  <div className="mt-3 text-green-600 font-semibold">
                    ✓ Usually Covered
                  </div>
                )}
              </button>
            ))}
          </div>

          {damageType && (
            <div className="mt-8 p-6 bg-green-50 rounded-xl max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Good News!</h3>
                  <p className="text-gray-700">
                    This type of damage is typically covered by homeowner's insurance. 
                    We'll help document everything and work directly with your adjuster to maximize your claim.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Insurance Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Make Insurance Claims Simple
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Insurance Process:</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Free Inspection', desc: 'We document all damage with photos & measurements' },
                    { step: '2', title: 'File Your Claim', desc: 'We help you file or review your existing claim' },
                    { step: '3', title: 'Meet Adjuster', desc: 'We meet with YOUR adjuster to ensure nothing is missed' },
                    { step: '4', title: 'Negotiate If Needed', desc: 'We fight for full coverage if initial offer is low' },
                    { step: '5', title: 'Complete Repairs', desc: 'Quality work with insurance-approved materials' },
                    { step: '6', title: 'Final Documentation', desc: 'We handle all paperwork & warranty registration' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance Companies We Work With */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-center">
                  We Work With All Major Insurance Companies
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {insuranceCompanies.map((company) => (
                    <div key={company} className="text-center p-3 bg-gray-50 rounded text-sm font-medium">
                      {company}
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-brand-gold/10 rounded-lg">
                  <p className="text-center font-semibold text-brand-gold">
                    Average Claim: $12,847
                  </p>
                  <p className="text-center text-sm text-gray-600 mt-1">
                    Don't settle for less!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Don't Make These Insurance Mistakes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Accepting the first offer without inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Missing hidden damage (decking, underlayment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Signing over your insurance check to anyone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span>Waiting too long to file (most policies have deadlines)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Recent Insurance Win</h2>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
              <p className="text-lg mb-4">
                "State Farm initially offered us $3,200 for our hail damage. Rapid Roofing met with 
                our adjuster and got it increased to $14,700 - enough for a complete roof replacement. 
                They handled everything!"
              </p>
              <p className="font-semibold">- Sarah M., Cypress TX</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">$3,200</div>
                <div className="text-sm opacity-90">Initial Offer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$14,700</div>
                <div className="text-sm opacity-90">Final Settlement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-gold">$11,500</div>
                <div className="text-sm opacity-90">Extra We Got Them</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Don't Let Insurance Shortchange You
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Free inspection • We handle everything • No upfront costs
          </p>
          <a 
            href="tel:2817981357"
            className="inline-flex items-center bg-brand-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-brand-gold/90 transition-colors"
          >
            <Phone className="w-6 h-6 mr-3" />
            Get Free Storm Damage Inspection
          </a>
          <p className="mt-4 text-sm text-gray-400">
            We only get paid when your insurance pays
          </p>
        </div>
      </section>
    </div>
  );
};

export default StormDamagePage;