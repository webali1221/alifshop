import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CardContext";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

// Sahifalar
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
// ... boshqa sahifalar

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        {isMenuOpen && <Menu />}

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          {/* Qolgan barcha routelar */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;