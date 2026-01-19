import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, className = "" }) => (
  <aside className={`flex flex-col h-full bg-white ${className}`}>
    {children}
  </aside>
);

export const SidebarHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);

export const SidebarContent = ({ children, className = "" }) => (
  <div className={`flex-1 overflow-auto ${className}`}>{children}</div>
);

export const SidebarGroup = ({ children }) => <div className="py-2">{children}</div>;
export const SidebarGroupContent = ({ children }) => <div>{children}</div>;
export const SidebarMenu = ({ children }) => <ul className="space-y-1">{children}</ul>;
export const SidebarMenuItem = ({ children }) => <li>{children}</li>;

export const SidebarMenuButton = ({ children, asChild, className = "", ...props }) => {
  const Comp = asChild ? "div" : "button";
  return (
    <Comp className={`w-full text-left ${className}`} {...props}>
      {children}
    </Comp>
  );
};

export const SidebarTrigger = ({ className = "" }) => {
  const { setIsOpen } = useContext(SidebarContext);
  return (
    <button 
      onClick={() => setIsOpen(prev => !prev)}
      className={`p-2 rounded-md hover:bg-gray-100 ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );
};