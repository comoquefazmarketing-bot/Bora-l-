import React from 'react';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      {/* Sidebar: Fixa no PC, Invisível no Mobile. 
          O z-index alto garante que ela fique sobre o conteúdo se necessário */}
      <div className="hidden md:block w-24 fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-100">
        <Sidebar />
      </div>

      {/* Área de Conteúdo: 
          ml-0 no mobile (ocupa tudo) 
          md:pl-24 no PC (usa padding em vez de margin para evitar o vácuo branco) */}
      <main className="flex-1 w-full min-h-screen md:pl-24 overflow-x-hidden">
        <div className="p-0">
          {children}
        </div>
      </main>
    </div>
  );
}