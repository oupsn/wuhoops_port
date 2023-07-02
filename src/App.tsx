import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default App;
