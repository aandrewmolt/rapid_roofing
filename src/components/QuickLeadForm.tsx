import React, { useState } from 'react';
import { Phone, ArrowRight, Building } from 'lucide-react';

interface QuickLeadFormProps {
  variant?: 'inline' | 'compact';
  buttonText?: string;
  placeholder?: string;
  showCompanyField?: boolean;
}

const QuickLeadForm: React.FC<QuickLeadFormProps> = ({ 
  variant = 'compact',
  buttonText = 'Get Instant Quote',
  placeholder = 'Enter your phone number',
  showCompanyField = false
}) => {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setIsSubmitting(true);
    // In production, this would submit to your CRM/backend
    window.location.href = `tel:2817981357`;
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedNumber);
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="space-y-3">
          {showCompanyField && (
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-base"
                required
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-base"
                maxLength={14}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    );
  }

  // Compact version for tight spaces
  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur rounded-lg p-3">
      <div className="space-y-2">
        {showCompanyField && (
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className="w-full px-3 py-2 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            required
          />
        )}
        <div className="flex items-center gap-2">
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder={showCompanyField ? "Phone number" : "Quick Quote: Phone #"}
            className="flex-1 px-3 py-2 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            maxLength={14}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-brand-gold text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-brand-gold-light transition-colors"
          >
            Go
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuickLeadForm;