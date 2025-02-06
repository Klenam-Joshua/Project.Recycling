import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage/HomePage";
import Footer from "./Views/HomePage/Footer/Footer";
import Header from "./Views/HomePage/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
