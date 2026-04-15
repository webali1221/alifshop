import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CardContext";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

import Page1 from "./Components/Page1/Page1";

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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;