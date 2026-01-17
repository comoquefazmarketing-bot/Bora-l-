import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={g-white rounded-xl shadow-sm border border-slate-100 \}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={p-4 border-b border-slate-50 \}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={	ext-lg font-bold text-slate-900 \}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={p-4 \}>
    {children}
  </div>
);