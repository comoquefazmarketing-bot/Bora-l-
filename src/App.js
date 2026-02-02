import FAQ from './pages/FAQ';
import React from 'react';
import ChatSDR from './components/ChatSDR'; // Importando o novo SDR
// Importe seus outros componentes aqui (Header, Footer, Home, etc)

function App() {
  return (
    <div className="App">
      {/* Seus outros componentes */}
      
      {/* Substituímos o componente antigo pela Karen SDR */}
      <ChatSDR />
    </div>
  );
}

export default App;