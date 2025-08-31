import React, { useState } from 'react';
import { Calendar, ClipboardCheck, Camera, FileText, Clock, MapPin, CheckCircle, AlertCircle, Star, Phone, ChevronRight, Shield, Award } from 'lucide-react';
import Header from '../components/Header';
import LandingPageFooter from '../components/LandingPageFooter';
import QuickLeadForm from '../components/QuickLeadForm';

const FreeInspectionCypressPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roofAge: '',
    concerns: ''
  });

  const inspectionPoints = [
    'Shingle condition and lifespan remaining',
    'Hidden storm and hail damage',
    'Flashing and seal integrity',
    'Ventilation and insulation efficiency',
    'Gutter system and drainage',
    'Decking and structural integrity',
    'Attic moisture and leak detection',
    'Chimney and skylight seals',
    'Valley and ridge condition',
    'Fascia and soffit damage',
    'Overall roof age assessment',
    'Energy efficiency opportunities',
    'Insurance claim potential',
    'Warranty status review',
    'Code compliance check',
    'Pest and animal damage',
    'Moss and algae growth',
    'Previous repair quality',
    'Ice dam prevention',
    'Emergency repair needs',
    'Cost-saving recommendations'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM'
  ];

  const neighborhoods = [
    'Bridgeland', 'Fairfield', 'Coles Crossing', 'Towne Lake',
    'Blackhorse Ranch', 'Lakes of Rosehill', 'Stone Gate', 'Cypress Creek Lakes'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Inspection requested:', { ...formData, date: selectedDate, time: selectedTime });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-navy text-white py-6 sm:py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full inline-flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="font-semibold text-sm sm:text-base">GAF Certified</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full inline-flex items-center">
                <Clock className="w-4 h-4 text-brand-gold mr-2" />
                <span className="font-semibold text-sm sm:text-base">Same Day Available</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full inline-flex items-center">
                <Shield className="w-4 h-4 text-brand-gold mr-2" />
                <span className="font-semibold text-sm sm:text-base">Free Inspection</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4">
              Free Roof Inspection Near Me
              <span className="block text-brand-gold mt-2">Cypress, TX 77433</span>
            </h1>

            <p className="text-lg sm:text-xl text-center mb-6 text-gray-200 max-w-3xl mx-auto">
              21-point inspection • Detailed report with photos • No obligations • 
              Insurance claim assessment included
            </p>

            {/* Primary CTA - Phone */}
            <div className="text-center mb-6">
              <a
                href="tel:2817981357"
                className="inline-flex items-center bg-brand-gold text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-brand-gold-light transition-colors mb-4 shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Book Now: (281) 798-1357
              </a>
              <p className="text-sm text-gray-300">
                Next available: Today 2:00 PM • Tomorrow 9:00 AM
              </p>
            </div>

            {/* Quick Lead Form */}
            <div className="max-w-md mx-auto mb-8">
              <QuickLeadForm 
                placeholder="Enter address for instant quote"
                buttonText="Get Free Inspection"
              />
            </div>

            {/* Quick Benefits - Compact for mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="text-center">
                <ClipboardCheck className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="font-semibold text-sm">21-Point Check</p>
              </div>
              <div className="text-center">
                <Camera className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="font-semibold text-sm">Photo Report</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="font-semibold text-sm">Written Estimate</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-brand-gold mx-auto mb-1" />
                <p className="font-semibold text-sm">Insured & Licensed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Schedule Your Free Inspection Today
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Calendar and Time Selection */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-brand-blue" />
                    Choose Your Inspection Date
                  </h3>
                  
                  {/* Simple Date Selector */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {['Today', 'Tomorrow', 'This Week'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedDate(option)}
                        className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                          selectedDate === option
                            ? 'border-brand-blue bg-brand-blue text-white'
                            : 'border-gray-200 hover:border-brand-blue'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <h4 className="font-semibold mb-3">Available Time Slots</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border transition-all text-sm ${
                          selectedTime === time
                            ? 'border-brand-blue bg-brand-blue text-white'
                            : 'border-gray-200 hover:border-brand-blue'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-brand-gold/10 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">1</span>
                      <div>
                        <p className="font-semibold">Arrival & Introduction (5 min)</p>
                        <p className="text-sm text-gray-600">Our certified inspector arrives on time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">2</span>
                      <div>
                        <p className="font-semibold">Exterior Inspection (20 min)</p>
                        <p className="text-sm text-gray-600">Complete roof assessment with photos</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">3</span>
                      <div>
                        <p className="font-semibold">Interior Check (10 min)</p>
                        <p className="text-sm text-gray-600">Attic and ceiling inspection for leaks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">4</span>
                      <div>
                        <p className="font-semibold">Report & Quote (15 min)</p>
                        <p className="text-sm text-gray-600">Detailed findings with repair options</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-lg mb-6">Your Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                          placeholder="(281) 798-1357"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                          placeholder="john@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1">Property Address *</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                        placeholder="123 Main St, Cypress, TX 77433"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1">Roof Age (if known)</label>
                      <select
                        value={formData.roofAge}
                        onChange={(e) => setFormData({...formData, roofAge: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                      >
                        <option value="">Not sure</option>
                        <option value="0-5">0-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1">Specific Concerns (optional)</label>
                      <textarea
                        value={formData.concerns}
                        onChange={(e) => setFormData({...formData, concerns: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none"
                        rows={3}
                        placeholder="Leaks, missing shingles, storm damage, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-gold-light transition-colors"
                    >
                      Schedule Free Inspection →
                    </button>

                    <p className="text-center text-sm text-gray-600">
                      Or call now: <a href="tel:2817981357" className="font-bold text-brand-blue">(281) 798-1357</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21-Point Inspection Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Comprehensive 21-Point Roof Inspection
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most Cypress roofing companies check 5-10 items. We inspect everything that matters.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {inspectionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">What You'll Receive</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                      <span>Detailed photo report of all findings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                      <span>Remaining roof lifespan estimate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                      <span>Insurance claim assessment (if applicable)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                      <span>Written repair/replacement quote</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                      <span>Maintenance recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Free Inspections Available Throughout Cypress
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-brand-blue text-white p-6">
                <h3 className="text-xl font-bold flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Cypress Neighborhoods We Serve Daily
                </h3>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {neighborhoods.map((neighborhood) => (
                    <div key={neighborhood} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">2,847</p>
                    <p className="text-sm text-gray-600">Cypress roofs inspected</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">&lt; 2hr</p>
                    <p className="text-sm text-gray-600">Average response time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-blue">100%</p>
                    <p className="text-sm text-gray-600">Free, no obligation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Warning Signs You Need an Inspection Now
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-lg mb-4 text-red-800">Urgent Signs</h3>
                <ul className="space-y-3">
                  {[
                    'Water stains on ceiling',
                    'Missing or damaged shingles',
                    'Sagging roof areas',
                    'Daylight through roof boards',
                    'Active leaks during rain'
                  ].map((sign) => (
                    <li key={sign} className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-4 text-yellow-800">Early Warning Signs</h3>
                <ul className="space-y-3">
                  {[
                    'Roof is 15+ years old',
                    'Granules in gutters',
                    'Curling shingle edges',
                    'Dark streaks on roof',
                    'Higher energy bills'
                  ].map((sign) => (
                    <li key={sign} className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                <strong>Did you know?</strong> The average Cypress homeowner waits 2 years too long 
                for an inspection, resulting in $3,000+ in preventable damage.
              </p>
              <a
                href="tel:2817981357"
                className="inline-flex items-center bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-blue-dark transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Inspected Today - It's Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Cypress Neighbors Say
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                location: 'Bridgeland',
                text: 'The inspection found hail damage I never knew about. Insurance covered the entire replacement!',
                savings: 'Saved $14,000'
              },
              {
                name: 'Mike T.',
                location: 'Fairfield',
                text: 'Very thorough inspection. They found issues my previous roofer missed. Highly recommend.',
                savings: 'Prevented major leak'
              },
              {
                name: 'Jennifer K.',
                location: 'Coles Crossing',
                text: 'Free inspection turned into insurance claim. They handled everything. Amazing service!',
                savings: 'Saved $11,500'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm font-bold text-green-600 mt-1">{testimonial.savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Schedule Your Free Roof Inspection Today
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            No cost, no obligation. Just honest answers about your roof's condition.
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
              <Calendar className="w-6 h-6 mr-3" />
              Book Online Now
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Available 7 days a week • Serving Cypress, TX 77433, 77429, 77410
          </p>
        </div>
      </section>

      <LandingPageFooter />
    </div>
  );
};

export default FreeInspectionCypressPage;