import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import StyleLab from "./proyects/StyleLab/StyleLab.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos/style-lab" element={<StyleLab />} />
      </Routes>
    </BrowserRouter>
  );
}
