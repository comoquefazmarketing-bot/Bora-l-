/* @author Felipe Makarios | Maestro - BORA LÁ */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HPCalculator from './components/HPCalculator';
import KarenChat from './components/KarenChat';
import HomePage from './pages/HomePage';
import SpaceDetails from './pages/SpaceDetails';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import PartnersSelection from './pages/PartnersSelection';
import WelcomePartner from './pages/WelcomePartner';
import PartnersPlans from './pages/PartnersPlans';
import HireServices from './pages/HireServices';
import FAQ from './pages/FAQ';

export default function App() {
  const openSidebar = () => window.dispatchEvent(new CustomEvent('openSidebar'));

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00BFA6] selection:text-white">
      <Header onOpenMenu={openSidebar} />
      <Sidebar />
      <HPCalculator />
      <KarenChat />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/partners" element={<PartnersSelection />} />
          <Route path="/investir" element={<PartnersPlans />} />
          <Route path="/welcome-partner" element={<WelcomePartner />} />
          <Route path="/hire" element={<HireServices />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    </div>
  );
}