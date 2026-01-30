/* @author Felipe Makarios | Creator - Bora Lá */
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
      {/* Este componente ativa o rastreio automático de visitas no Vercel */}
      <Analytics />
    </>
  );
}

export default App;