// EmailJS Configuration
// IMPORTANT: You need to sign up at https://www.emailjs.com/ and get your credentials
// 
// Steps to set up:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.) in the Email Services section
// 3. Create an email template in the Email Templates section
// 4. Get your Service ID, Template ID, and Public Key from the dashboard
// 5. Replace the placeholder values below with your actual credentials

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS Service ID (found in Email Services section)
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  
  // Replace with your EmailJS Template ID (found in Email Templates section)
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_xyz789'
  
  // Replace with your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'AbCdEfGhIjKlMnOpQrSt'
};

// Email template parameters that will be sent
export interface EmailTemplateParams {
  from_name: string;      // Customer's name
  from_email: string;     // Customer's email
  from_phone: string;     // Customer's phone
  property_address: string; // Property address
  service_type: string;   // Type of service requested
  city?: string;          // City/location
  message?: string;       // Additional message/details
  page_url?: string;      // Which page the form was submitted from
  timestamp?: string;     // When the form was submitted
}