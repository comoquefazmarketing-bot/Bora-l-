import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[32px] shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-2 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-black text-slate-900 tracking-tight ${className}`}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-2 ${className}`}>
    {children}
  </div>
);