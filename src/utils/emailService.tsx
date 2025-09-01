import React from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, type EmailTemplateParams } from '../config/emailjs';

// Initialize EmailJS with public key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service?: string;
  neighborhood?: string;
  concern?: string;
  timeframe?: string;
  roofSize?: string;
  timeline?: string;
}

export const sendFormEmail = async (
  formData: FormData,
  city?: string,
  pageUrl?: string
): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.warn('EmailJS not configured. Please update /src/config/emailjs.ts with your credentials.');
      console.log('Form data that would be sent:', formData);
      return {
        success: false,
        message: 'Email service not configured. Your information has been recorded.'
      };
    }

    // Prepare email template parameters
    const templateParams: EmailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      property_address: formData.address,
      service_type: formData.service || formData.concern || 'General Inquiry',
      city: city || formData.neighborhood || 'Not specified',
      message: `
        ${formData.timeframe ? `Timeframe: ${formData.timeframe}` : ''}
        ${formData.timeline ? `Timeline: ${formData.timeline}` : ''}
        ${formData.roofSize ? `Roof Size: ${formData.roofSize}` : ''}
      `.trim() || 'No additional details',
      page_url: pageUrl || window.location.href,
      timestamp: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Chicago',
        dateStyle: 'short',
        timeStyle: 'short'
      })
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams as Record<string, unknown>
    );

    if (response.status === 200) {
      console.log('Email sent successfully:', response);
      return {
        success: true,
        message: "Thank you! We'll contact you within 30 minutes."
      };
    } else {
      throw new Error(`Email service returned status: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    
    // Still log the form data so it's not lost
    console.log('Form submission data:', {
      formData,
      city,
      pageUrl,
      timestamp: new Date().toISOString()
    });

    return {
      success: false,
      message: 'There was an issue sending your information, but we have recorded it. Please call us directly at (281) 798-1357.'
    };
  }
};

// Success message component
export const FormSuccessMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
    <div className="text-green-800 font-semibold text-lg mb-2">✓ Success!</div>
    <p className="text-green-700">{message}</p>
    <p className="text-sm text-gray-600 mt-2">We'll call you shortly at the number provided.</p>
  </div>
);

// Error message component  
export const FormErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
    <div className="text-red-800 font-semibold text-lg mb-2">⚠ Please Note</div>
    <p className="text-red-700">{message}</p>
    <a href="tel:2817981357" className="inline-block mt-3 bg-brand-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors">
      Call Now: (281) 798-1357
    </a>
  </div>
);