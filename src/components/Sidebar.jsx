/* @author Felipe Makarios | Creator & Lead Architect */
import React from "react";
import { Home, Calculator, ShoppingBag, PlusCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={22} />, label: "Início", path: "/" },
    { icon: <Calculator size={22} />, label: "Calculadora", action: "openCalc" },
    { icon: <ShoppingBag size={22} />, label: "Seja um fornecedor", path: "/register-supplier" },
  ];

  const handleNavigation = (item) => {
    if (item.action === "openCalc") {
      window.dispatchEvent(new CustomEvent("openCalc"));
    } else if (item.path) {
      navigate(item.path);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay Areia com Blur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#D9D2C5]/50 backdrop-blur-md z-[1000] lg:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside style={{
        position: 'fixed',
        left: isOpen ? '0' : '-320px',
        top: 0, bottom: 0, width: '300px',
        backgroundColor: '#F5F2ED',
        zIndex: 1001,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex', flexDirection: 'column',
        borderRight: '1px solid rgba(0,0,0,0.02)'
      }}>
        
        <button 
          onClick={() => setIsOpen(false)} 
          style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: '#1A1A1A', cursor: 'pointer', zIndex: 10 }}
        >
          <X size={28} />
        </button>

        {/* ÁREA DA LOGO - Otimizada para não empurrar o layout */}
        <div style={{ padding: '60px 20px 20px', textAlign: 'center', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Bora Lá" 
            style={{ 
              maxHeight: '100px', 
              transform: 'rotate(90deg)',
              mixBlendMode: 'multiply',
              filter: 'contrast(1.1)'
            }} 
          />
        </div>

        {/* NAVEGAÇÃO - Mais compacta */}
        <nav style={{ flex: 1, padding: '0 30px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleNavigation(item)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '18px',
                    padding: '12px 0', color: '#1A1A1A', background: 'none', border: 'none',
                    textAlign: 'left', cursor: 'pointer'
                  }}
                >
                  <span style={{ color: '#00BFA6' }}>{item.icon}</span>
                  <span style={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '3px' }}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* BOTÃO CADASTRE SUA ÁREA - Ajustado para caber no mobile */}
          <div style={{ marginTop: '30px' }}>
            <button 
              onClick={() => { navigate("/register-area"); setIsOpen(false); }}
              style={{
                width: '100%', backgroundColor: '#00BFA6', color: '#FFFFFF',
                fontWeight: '900', textTransform: 'uppercase', fontSize: '11px',
                padding: '20px', borderRadius: '18px', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                boxShadow: '0 10px 25px rgba(0,191,166,0.2)', cursor: 'pointer',
                letterSpacing: '1px'
              }}
            >
              <PlusCircle size={20} />
              CADASTRE SUA ÁREA
            </button>
          </div>
        </nav>

        {/* RODAPÉ MINIMALISTA - Sem nome, apenas a marca */}
        <div style={{ padding: '30px', textAlign: 'center' }}>
           <p style={{ fontSize: '8px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '4px', color: 'rgba(0,0,0,0.15)' }}>
             Bora Lá • Experience
           </p>
        </div>
      </aside>
    </>
  );
}