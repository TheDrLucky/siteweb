import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

// Import pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LimovaPage from "./pages/LimovaPage";
import AgentPage from "./pages/AgentPage";
import ContactPage from "./pages/ContactPage";

// Import SEO pages
import BureauEtudesPage from "./pages/seo/BureauEtudesPage";
import SolutionPage from "./pages/seo/SolutionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/limova" element={<LimovaPage />} />
            <Route path="/limova/agents/:agentId" element={<AgentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* SEO Routes - Bureau d'études */}
            <Route path="/domotique/bureau-etudes-domotique" element={<BureauEtudesPage service="domotique" />} />
            <Route path="/securite/bureau-etudes-securite" element={<BureauEtudesPage service="securite" />} />
            <Route path="/informatique/bureau-etudes-informatique" element={<BureauEtudesPage service="informatique" />} />
            <Route path="/ia/bureau-etudes-ia" element={<BureauEtudesPage service="ia" />} />
            
            {/* SEO Routes - Solutions Domotique */}
            <Route path="/domotique/luminaire-connecte" element={<SolutionPage service="domotique" solution="luminaire-connecte" />} />
            <Route path="/domotique/chauffage-connecte" element={<SolutionPage service="domotique" solution="chauffage-connecte" />} />
            <Route path="/domotique/volet-roulant-connecte" element={<SolutionPage service="domotique" solution="volet-roulant-connecte" />} />
            <Route path="/domotique/gestion-energie-connectee" element={<SolutionPage service="domotique" solution="gestion-energie-connectee" />} />
            <Route path="/domotique/arrosage-automatique-connecte" element={<SolutionPage service="domotique" solution="arrosage-automatique-connecte" />} />
            <Route path="/domotique/scenarios-personnalises" element={<SolutionPage service="domotique" solution="scenarios-personnalises" />} />
            <Route path="/domotique/securite-domestique-connectee" element={<SolutionPage service="domotique" solution="securite-domestique-connectee" />} />
            <Route path="/domotique/multimedia-connecte" element={<SolutionPage service="domotique" solution="multimedia-connecte" />} />
            <Route path="/domotique/portes-portails-connectes" element={<SolutionPage service="domotique" solution="portes-portails-connectes" />} />
            <Route path="/domotique/robot-tondeuse-connecte" element={<SolutionPage service="domotique" solution="robot-tondeuse-connecte" />} />
            
            {/* SEO Routes - Solutions Sécurité */}
            <Route path="/securite/ajax-systems-alarme" element={<SolutionPage service="securite" solution="ajax-systems-alarme" />} />
            <Route path="/securite/grundig-videosurveillance" element={<SolutionPage service="securite" solution="grundig-videosurveillance" />} />
            <Route path="/securite/controle-acces-professionnel" element={<SolutionPage service="securite" solution="controle-acces-professionnel" />} />
            <Route path="/securite/telesurveillance-cors-online" element={<SolutionPage service="securite" solution="telesurveillance-cors-online" />} />
            <Route path="/securite/securitas-technologie" element={<SolutionPage service="securite" solution="securitas-technologie" />} />
            
            {/* SEO Routes - Solutions Informatique */}
            <Route path="/informatique/reseau-informatique" element={<SolutionPage service="informatique" solution="reseau-informatique" />} />
            <Route path="/informatique/serveur-nas" element={<SolutionPage service="informatique" solution="serveur-nas" />} />
            <Route path="/informatique/securite-informatique" element={<SolutionPage service="informatique" solution="securite-informatique" />} />
            <Route path="/informatique/solutions-cloud" element={<SolutionPage service="informatique" solution="solutions-cloud" />} />
            
            {/* SEO Routes - Solutions IA */}
            <Route path="/ia/limova-intelligence-artificielle" element={<SolutionPage service="ia" solution="limova-intelligence-artificielle" />} />
            <Route path="/ia/chatbot-intelligent" element={<SolutionPage service="ia" solution="chatbot-intelligent" />} />
            <Route path="/ia/automatisation-ia" element={<SolutionPage service="ia" solution="automatisation-ia" />} />
            <Route path="/ia/analyse-donnees-ia" element={<SolutionPage service="ia" solution="analyse-donnees-ia" />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;