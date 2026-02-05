/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HPCalculator from './components/HPCalculator';
import KarenChat from './components/KarenChat';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

export default function App() {
  const openSidebar = () => window.dispatchEvent(new CustomEvent('openSidebar'));
  return (
    <div className="min-h-screen bg-white">
      {/* Componentes Globais Onipresentes */}
      <Header onOpenMenu={openSidebar} />
      <Sidebar />
      <HPCalculator />
      <KarenChat />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
    </div>
  );
}