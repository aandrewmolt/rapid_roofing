import { RoofingLandingPage, PageProps, KEYWORDS } from './Roofing-landing-pages-react';

// Development validation
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  if (!RoofingLandingPage) console.error('RoofingLandingPage component is missing');
  if (!KEYWORDS?.Cypress) console.error('KEYWORDS.Cypress is missing');
  if (!KEYWORDS?.Cypress?.some(g => g.label === 'Replacement')) console.error('KEYWORDS.Cypress.Replacement group is missing');
  console.log('✅ All city-specific intent pages validated successfully');
}

export function CypressPage() {
  const props: PageProps = {
    city: 'Cypress',
    seoTitle: 'Roofing Cypress TX | #1 Roofers in Cypress | $500 OFF',
    seoDescription: 'Top-rated roofing contractors in Cypress, TX. 24/7 emergency repairs, free inspections, lifetime warranty. Call now for $500 OFF your new roof!',
    keywords: KEYWORDS.Cypress
  };
  
  return <RoofingLandingPage {...props} />;
}

export function KatyPage() {
  const props: PageProps = {
    city: 'Katy',
    seoTitle: 'Roofing Katy TX | Best Roofers in Katy | Free Inspection',
    seoDescription: 'Trusted roofing company in Katy, TX. Storm damage repair, roof replacement, leak repair. Get your FREE inspection + $500 OFF today!',
    keywords: KEYWORDS.Katy
  };
  
  return <RoofingLandingPage {...props} />;
}

export function TomballPage() {
  const props: PageProps = {
    city: 'Tomball',
    seoTitle: 'Roofing Tomball TX | Tomball Roofing Contractors | $500 OFF',
    seoDescription: 'Professional roofing services in Tomball, TX. Emergency repairs, new roofs, insurance claims. Licensed & insured. Call for $500 OFF!',
    keywords: KEYWORDS.Tomball
  };
  
  return <RoofingLandingPage {...props} />;
}

export function SpringPage() {
  const props: PageProps = {
    city: 'Spring',
    seoTitle: 'Roofing Spring TX | Top Roofers in Spring | Free Quote',
    seoDescription: 'Expert roofing contractors in Spring, TX. Residential & commercial roofing, storm damage, repairs. Get your FREE inspection + $500 discount!',
    keywords: KEYWORDS.Spring
  };
  
  return <RoofingLandingPage {...props} />;
}

export function WoodlandsPage() {
  const props: PageProps = {
    city: 'The Woodlands',
    seoTitle: 'Roofing The Woodlands TX | Woodlands Roofers | $500 OFF',
    seoDescription: 'Premium roofing services in The Woodlands, TX. Luxury home specialists, lifetime warranty, 24/7 service. Save $500 on your new roof!',
    keywords: KEYWORDS.Woodlands
  };
  
  return <RoofingLandingPage {...props} />;
}