import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MySpaces from "./pages/MySpaces";
import SpaceDetail from "./pages/SpaceDetail";
import RegisterSpace from "./pages/RegisterSpace";
import RegisterSupplier from "./pages/RegisterSupplier";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-spaces" element={<MySpaces />} />
        <Route path="/space/:id" element={<SpaceDetail />} />
        
        {/* Adicionando as rotas que faltavam */}
        <Route path="/register-area" element={<RegisterSpace />} />
        <Route path="/register-supplier" element={<RegisterSupplier />} />
      </Routes>
    </Router>
  );
}

export default App;