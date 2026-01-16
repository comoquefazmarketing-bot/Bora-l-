import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layout Principal
import Layout from './Layout';

// Páginas (Pages)
import Home from './pages/Home';
import SpaceDetails from './pages/SpaceDetails';
import MyBookings from './pages/MyBookings';
import MySpaces from './pages/MySpaces';
import Favorites from './pages/Favorites';
import Help from './pages/Help';
import ChatWithLia from './pages/ChatWithLia';

// Configuração do TanStack Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Rotas Públicas e Privadas */}
            <Route index element={<Home />} />
            <Route path="space" element={<SpaceDetails />} />
            <Route path="bookings" element={<MyBookings />} />
            <Route path="my-spaces" element={<MySpaces />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="help" element={<Help />} />
            <Route path="chat" element={<ChatWithLia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

