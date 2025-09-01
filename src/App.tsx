import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CypressPage, KatyPage, TomballPage, SpringPage, WoodlandsPage } from './city-specific-intents';
// Import the new unique pages
import EmergencyRoofPage from './pages/EmergencyRoofPage';
import StormDamagePage from './pages/StormDamagePage';
import RoofReplacementPage from './pages/NewRoofReplacementPage';
import { 
  RepairTuneupIntentPage, 
  UpgradesIntentPage 
} from './service-intent-pages';
// Import the new keyword-targeted landing pages
import EmergencyCypressPage from './pages/EmergencyCypressPage';
import RoofCostCypressPage from './pages/RoofCostCypressPage';
import StormDamageHoustonPage from './pages/StormDamageHoustonPage';
import FreeInspectionCypressPage from './pages/FreeInspectionCypressPage';
import CommercialCypressPage from './pages/CommercialCypressPage';
// Import the new Google Ads landing pages
import EmergencyRepairPage from './pages/EmergencyRepairPage';
import GeneralRepairPage from './pages/GeneralRepairPage';
import FreeInspectionPage from './pages/FreeInspectionPage';
import LocalRooferPage from './pages/LocalRooferPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/cypress" replace />} />
          
          {/* City-specific routes */}
          <Route path="/cypress" element={<CypressPage />} />
          <Route path="/katy" element={<KatyPage />} />
          <Route path="/tomball" element={<TomballPage />} />
          <Route path="/spring" element={<SpringPage />} />
          <Route path="/woodlands" element={<WoodlandsPage />} />
          <Route path="/the-woodlands" element={<Navigate to="/woodlands" replace />} />
          
          {/* Service-specific intent routes - NEW UNIQUE PAGES */}
          <Route path="/emergency" element={<EmergencyRoofPage />} />
          <Route path="/storm-damage" element={<StormDamagePage />} />
          <Route path="/roof-replacement" element={<RoofReplacementPage />} />
          <Route path="/roof-repair" element={<RepairTuneupIntentPage />} />
          <Route path="/metal-roofing" element={<UpgradesIntentPage />} />
          
          {/* Keyword-targeted landing pages for Google Ads */}
          <Route path="/emergency-cypress" element={<EmergencyCypressPage />} />
          <Route path="/roof-cost-cypress" element={<RoofCostCypressPage />} />
          <Route path="/storm-damage-houston" element={<StormDamageHoustonPage />} />
          <Route path="/free-inspection-cypress" element={<FreeInspectionCypressPage />} />
          <Route path="/commercial-cypress" element={<CommercialCypressPage />} />
          
          {/* New Google Ads landing pages */}
          <Route path="/emergency-repair" element={<EmergencyRepairPage />} />
          <Route path="/general-repair" element={<GeneralRepairPage />} />
          <Route path="/free-inspection" element={<FreeInspectionPage />} />
          <Route path="/local-roofer" element={<LocalRooferPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;