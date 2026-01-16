import React from "react";
export const Card = ({ children, className }) => <div className={g-white rounded-xl shadow-sm border }>{children}</div>;
export const CardHeader = ({ children }) => <div className="p-4 border-b">{children}</div>;
export const CardTitle = ({ children }) => <h3 className="text-lg font-bold">{children}</h3>;
export const CardContent = ({ children }) => <div className="p-4">{children}</div>;

