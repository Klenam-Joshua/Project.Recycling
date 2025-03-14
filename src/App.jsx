import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage/HomePage";
import Layout from "./Layout/Layout";
import Footer from "./Views/HomePage/Footer/Footer";
import Header from "./Views/HomePage/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.css";

export default function App() {
  return (
    <div>
      <BrowserRouter basename="recycling">
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
