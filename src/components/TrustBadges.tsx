import React from 'react';
import { Shield, Award, Star, Clock, Users, CheckCircle } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {/* GAF Certified */}
          <div className="flex items-center gap-2 text-sm">
            <Award className="w-5 h-5 text-brand-gold" />
            <span className="font-semibold text-gray-700">GAF Certified</span>
          </div>
          
          {/* BBB A+ */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded text-white font-bold text-xs">
              BBB
            </div>
            <span className="font-semibold text-gray-700">A+ Rated</span>
          </div>
          
          {/* Google Reviews */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">4.9 (500+ Reviews)</span>
          </div>
          
          {/* Licensed & Insured */}
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-700">Licensed & Insured</span>
          </div>
          
          {/* 24/7 Service */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-gray-700">24/7 Emergency</span>
          </div>
          
          {/* Years in Business */}
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-5 h-5 text-brand-blue" />
            <span className="font-semibold text-gray-700">Since 2010</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;