import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar Fixo na Esquerda */}
      <div className="w-64 fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      {/* Área de Conteúdo com Scroll */}
      <main className="flex-1 ml-64 min-h-screen">
        <div className="p-0">
          {children}
        </div>
      </main>
    </div>
  );
}