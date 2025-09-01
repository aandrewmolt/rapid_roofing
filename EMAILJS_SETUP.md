# EmailJS Setup Instructions

## 1. Create EmailJS Account
Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

## 2. Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the authorization steps
5. Note your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

### Subject Line:
```
New Lead from {{from_name}} - {{service_type}} - Rapid Roofing
```

### Email Body (TO: therapidroofingandconstruction@gmail.com):
```
New Lead Submission from Rapid Roofing Website

CUSTOMER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Phone: {{from_phone}}
Email: {{from_email}}
Property Address: {{property_address}}
City/Area: {{city}}

SERVICE REQUEST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Type: {{service_type}}
Additional Details: {{message}}

SUBMISSION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page: {{page_url}}
Submitted: {{timestamp}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ FOLLOW UP WITHIN 30 MINUTES ⚡
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

4. Set "To Email" field to: `therapidroofingandconstruction@gmail.com`
5. Set "From Name" to: `Rapid Roofing Website`
6. Save the template
7. Note your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `AbCdEfGhIjKlMnOpQrSt`)

## 5. Update Configuration
Edit `/src/config/emailjs.ts` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID
- `YOUR_PUBLIC_KEY` with your Public Key

## 6. Test
Submit a form on any page and check if email arrives at therapidroofingandconstruction@gmail.com

## Free Tier Limits
- 200 emails per month
- 2 email templates
- If you need more, upgrade to paid plan ($9/month for 1,000 emails)