import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Sidebar />
      <main className="transition-all duration-300">
        <div className="p-0">
          {children}
        </div>
      </main>
    </div>
  );
}