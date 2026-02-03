/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes Globais
import Sidebar from './components/Sidebar';
import KarenChat from './components/KarenChat';
import HPCalculator from './components/HPCalculator';

// Páginas Principais
import HomePage from './pages/HomePage';
import SpaceDetails from './pages/SpaceDetails';
import BlogPage from './pages/BlogPage';
import BlogManifesto from './pages/BlogManifesto';

// Artigos
import MasterNovoHorizonte from './pages/articles/MasterNovoHorizonte';
import SegredoCostela from './pages/articles/SegredoCostela';
import ChecklistChacara from './pages/articles/ChecklistChacara';
import MelhoresChacaras from './pages/articles/MelhoresChacaras';
import CalculadoraGuia from './pages/articles/CalculadoraGuia';

export default function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {/* COMERCIAL & PRODUTO */}
        <Route path="/" element={<HomePage />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        
        {/* HUB DE CONTEÚDO */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/manifesto" element={<BlogManifesto />} />
        
        {/* ACADEMIA LÁ (ARTIGOS) */}
        <Route path="/blog/master-novo-horizonte" element={<MasterNovoHorizonte />} />
        <Route path="/blog/segredo-costela" element={<SegredoCostela />} />
        <Route path="/blog/checklist-chacara" element={<ChecklistChacara />} />
        <Route path="/blog/melhores-areas-lazer-nh" element={<MelhoresChacaras />} />
        <Route path="/blog/calculadora-churrasco" element={<CalculadoraGuia />} />
      </Routes>
      <KarenChat />
      <HPCalculator />
    </>
  );
}