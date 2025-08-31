import React, { useState, useEffect } from 'react';
import { Phone, Clock, AlertTriangle, Shield, Zap, CloudRain, Wind, CheckCircle } from 'lucide-react';

const EmergencyRoofPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-gray-900 to-black">
      {/* URGENT HERO - Different from normal pages */}
      <div className="relative">
        <div className="absolute inset-0 bg-red-900/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 py-8">
          {/* Emergency Alert Bar */}
          <div className="bg-red-600 text-white p-3 rounded-lg mb-6 flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-6 h-6 mr-2" />
            <span className="font-bold text-lg">EMERGENCY RESPONSE AVAILABLE 24/7</span>
          </div>

          {/* Two Column Emergency Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-2xl">RAPID RESPONSE</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight">
                ROOF<br/>
                <span className="text-red-500">EMERGENCY?</span>
              </h1>
              
              <p className="text-2xl mb-6 text-gray-200">
                We're on our way in <span className="text-yellow-400 font-bold">60 minutes or less</span>
              </p>

              {/* Emergency Types Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
                  <CloudRain className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-bold">Active Leaks</h3>
                  <p className="text-sm text-gray-300">Water pouring in? We'll stop it.</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-red-500/50">
                  <Wind className="w-8 h-8 text-gray-400 mb-2" />
                  <h3 className="font-bold">Storm Damage</h3>
                  <p className="text-sm text-gray-300">Missing shingles, torn roof.</p>
                </div>
              </div>

              {/* Giant Call Button */}
              <a 
                href="tel:2817981357"
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-6 rounded-xl text-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone className="w-8 h-8 mr-3 animate-pulse" />
                CALL NOW: (281) 798-1357
              </a>
            </div>

            {/* Emergency Response Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-red-600 text-white p-4 text-center">
                <h2 className="text-2xl font-bold">Emergency Response Active</h2>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Next crew dispatches in:</p>
                  <div className="flex justify-center gap-2 text-4xl font-bold">
                    <div className="bg-gray-100 px-4 py-2 rounded">
                      <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                      <p className="text-xs text-gray-500">HRS</p>
                    </div>
                    <span className="self-center">:</span>
                    <div className="bg-gray-100 px-4 py-2 rounded">
                      <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <p className="text-xs text-gray-500">MIN</p>
                    </div>
                    <span className="self-center">:</span>
                    <div className="bg-gray-100 px-4 py-2 rounded">
                      <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <p className="text-xs text-gray-500">SEC</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-3">What We'll Do:</h3>
                  {[
                    'Immediate temporary fix to stop damage',
                    'Full damage assessment & photos',
                    'Insurance documentation',
                    'Permanent repair quote on-site'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-center font-bold text-lg">
                    Emergency Rate: <span className="text-3xl text-brand-blue">$299</span>
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    (Credited toward permanent repair)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Process - Visual Timeline */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Emergency Response Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-red-600"></div>
              
              {[
                { time: '0-5 min', title: 'Your Call', desc: 'We answer 24/7, dispatch immediately' },
                { time: '5-15 min', title: 'Crew Mobilizes', desc: 'Team loads emergency supplies & tarps' },
                { time: '30-60 min', title: 'On Site', desc: 'We arrive and assess damage' },
                { time: '60-90 min', title: 'Damage Stopped', desc: 'Temporary fix installed, leak stopped' },
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center mb-8">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {idx + 1}
                  </div>
                  <div className="ml-8 flex-1 bg-gray-900 p-6 rounded-lg">
                    <div className="text-yellow-400 font-bold mb-1">{step.time}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals for Emergency */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: <Clock className="w-12 h-12" />, stat: '24/7', label: 'Always Available' },
              { icon: <Zap className="w-12 h-12" />, stat: '<60min', label: 'Response Time' },
              { icon: <Shield className="w-12 h-12" />, stat: '100%', label: 'Insured Work' },
              { icon: <Phone className="w-12 h-12" />, stat: '5min', label: 'Call Back Time' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-yellow-400 flex justify-center mb-3">{item.icon}</div>
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Wait - Water Damage Gets Worse Fast
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every minute counts when your roof is compromised
          </p>
          <a 
            href="tel:2817981357"
            className="inline-flex items-center bg-white text-red-600 px-12 py-5 rounded-lg text-2xl font-bold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-8 h-8 mr-3" />
            CALL EMERGENCY LINE NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRoofPage;