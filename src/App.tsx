import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Backyard from "./page/backyard";
import { DarkModeContext, DarkModeProvider } from "./context/darkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backyard" element={<Backyard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </DarkModeProvider>
  );
}
export default App;
