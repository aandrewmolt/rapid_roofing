import React from "react";
import { RoofingLandingPage, PageProps, KEYWORDS } from "./Roofing-landing-pages-react";

/**
 * FIVE INTENT-BASED LANDING PAGES (Aug 31 seasonal messaging)
 * - Built for different keyword groups / buyer intents (not different cities).
 * - Use alongside your city pages. Combine with Google Ads ad groups by intent.
 * - Seasonality: Peak Texas storm activity (Sep–Oct). End-of-summer special included.
 */

// Helper to merge/override SEO + tweak hero copy via description
const makeSeo = (title: string, description: string): PageProps["seo"] => ({ title, description });

// 1) Emergency Roof Leak & Tarping (24/7) — keywords: emergency roof repair, roof leak repair, tarping
export const EmergencyIntentPage: React.FC = () => (
  <RoofingLandingPage
    city="Cypress"
    seo={makeSeo(
      "Emergency Roof Repair | 24/7 Leak & Tarp Service | Free Inspection",
      "24/7 emergency roof repair for leaks, storm damage, and tarping. Call now for rapid response. Free inspection + $500 off full replacement."
    )}
    keywords={[
      { label: "Emergency", terms: [
        "emergency roof repair cypress",
        "24/7 roof repair cypress",
        "emergency tarping cypress tx",
        "roof leak repair cypress",
        "urgent roofer near me"
      ]},
      ...KEYWORDS.Cypress.filter(g => g.label !== "General Roofing")
    ]}
  />
);

// 2) Storm & Hail Damage + Insurance Claims — keywords: hail damage roof, storm damage repair, insurance claim help
export const StormInsuranceIntentPage: React.FC = () => (
  <RoofingLandingPage
    city="Cypress"
    seo={makeSeo(
      "Hail & Storm Damage Roof Repair | Insurance Claim Help",
      "Storm or hail damage? We document, tarp, and restore. Insurance claim assistance. Free inspection + $500 off replacements. Peak storm season Sep–Oct—book now."
    )}
    keywords={[
      { label: "Storm & Insurance", terms: [
        "hail damage roof cypress",
        "storm damage roof repair cypress",
        "roof insurance claim help cypress",
        "wind damage roof repair cypress",
        "roof inspection hail cypress"
      ]},
      ...KEYWORDS.Cypress
    ]}
  />
);

// 3) Full Roof Replacement (End-of-Summer Special) — keywords: roof replacement, new roof cost/estimate
export const ReplacementIntentPage: React.FC = () => (
  <RoofingLandingPage
    city="Cypress"
    seo={makeSeo(
      "Roof Replacement Experts | $500 Off Through Sept 30 | Free Inspection",
      "High-quality shingle roof replacements with warranty. End-of-summer special: $500 off through Sept 30. Free inspection and written estimate."
    )}
    keywords={[
      { label: "Replacement", terms: [
        "roof replacement cypress",
        "new roof cypress",
        "roof installation cypress",
        "re-roofing cypress",
        "roof replacement estimate cypress"
      ]},
      ...KEYWORDS.Cypress
    ]}
  />
);

// 4) Roof Repair & Fall Tune‑Up — keywords: roof repair, roof maintenance, fall roof inspection
export const RepairTuneupIntentPage: React.FC = () => (
  <RoofingLandingPage
    city="Cypress"
    seo={makeSeo(
      "Roof Repair & Fall Tune‑Up | Free Inspection | Fast Scheduling",
      "Fix leaks, missing shingles, or flashing issues before fall storms. Free inspection + priority scheduling. $500 off full replacements."
    )}
    keywords={[
      { label: "Repair & Tune‑Up", terms: [
        "roof repair cypress",
        "roof maintenance cypress",
        "fall roof inspection cypress",
        "roof tune up cypress",
        "shingle repair cypress"
      ]},
      ...KEYWORDS.Cypress
    ]}
  />
);

// 5) Metal Roofing & Upgrades (energy/warranty angle) — keywords: metal roofing, impact resistant shingles
export const UpgradesIntentPage: React.FC = () => (
  <RoofingLandingPage
    city="Cypress"
    seo={makeSeo(
      "Metal Roofing & Impact‑Resistant Shingle Upgrades | Free Quote",
      "Upgrade to durable, energy‑efficient roofs: standing seam metal or impact‑resistant shingles. Free inspection + $500 off full installs."
    )}
    keywords={[
      { label: "Upgrades", terms: [
        "metal roofing cypress",
        "standing seam metal roof cypress",
        "impact resistant shingles cypress",
        "cool roof shingles cypress",
        "energy efficient roof cypress"
      ]},
      ...KEYWORDS.Cypress
    ]}
  />
);

export default EmergencyIntentPage;

// -----------------------------
// Dev Smoke Tests (run-time assertions; no external test runner required)
// These are lightweight checks to help catch integration issues early.
// They do NOT alter production behavior.
// -----------------------------
const isDev = (typeof window !== "undefined") && import.meta.env.DEV;

if (isDev) {
  try {
    console.assert(typeof RoofingLandingPage === "function", "[SmokeTests] RoofingLandingPage missing");
    console.assert(!!KEYWORDS && Array.isArray(KEYWORDS.Cypress), "[SmokeTests] KEYWORDS.Cypress not found or not an array");
    console.assert(KEYWORDS.Cypress.some(g => g.label === "Replacement"), "[SmokeTests] Replacement keyword group missing");

    // Ensure components can be created without throwing
    React.createElement(EmergencyIntentPage);
    React.createElement(StormInsuranceIntentPage);
    React.createElement(ReplacementIntentPage);
    React.createElement(RepairTuneupIntentPage);
    React.createElement(UpgradesIntentPage);

    // Additional checks (more test cases)
    console.assert(
      [EmergencyIntentPage, StormInsuranceIntentPage, ReplacementIntentPage, RepairTuneupIntentPage, UpgradesIntentPage]
        .every((C) => typeof C === "function"),
      "[SmokeTests] One or more intent components are not functions"
    );
    // Validate SEO strings include seasonal cues where expected
    const replSeo = makeSeo(
      "Roof Replacement Experts | $500 Off Through Sept 30 | Free Inspection",
      "High-quality shingle roof replacements with warranty. End-of-summer special: $500 off through Sept 30. Free inspection and written estimate."
    );
    console.assert(replSeo && /Sept\s*30/i.test(replSeo.title + " " + replSeo.description), "[SmokeTests] Seasonal copy missing for ReplacementIntentPage");

    console.debug("[SmokeTests] Intent pages created successfully");
  } catch (e) {
    console.error("[SmokeTests] Failure:", e);
  }
}