import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Backyard from "./page/backyard";
import { DarkModeProvider } from "./context/darkModeContext";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <DarkModeProvider>
      <ParallaxProvider>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/backyard" element={<Backyard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ParallaxProvider>
    </DarkModeProvider>
  );
}
export default App;
