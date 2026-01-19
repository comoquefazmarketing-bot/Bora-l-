import React from "react";
const Label = ({ children, className = "", ...props }) => (
  <label className={`text-sm font-medium text-slate-700 ${className}`} {...props}>
    {children}
  </label>
);
export { Label };