import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-2xl font-black transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-[#00BFA6] text-white hover:bg-[#009688] shadow-[#00BFA6]/20 hover:shadow-[#00BFA6]/40",
    ghost: "bg-transparent text-slate-600 hover:bg-white hover:shadow-md border border-transparent",
    outline: "bg-transparent border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };