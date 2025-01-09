import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ResultPage from "./components/ResultPage";
import Stats from "./components/Stats";
import IntroMission from "./components/IntroMission";
import DeepFakeCases from "./components/DeepFakeCases";
import WhatWeOffer from "./components/WhatWeOffer";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <IntroMission />
      <DeepFakeCases />
      <WhatWeOffer />
      <OurTeam />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/mission" element={<IntroMission />} />
          <Route path="/news" element={<DeepFakeCases />} />
          <Route path="/features" element={<WhatWeOffer />} />
          <Route path="/contact" element={<OurTeam />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
