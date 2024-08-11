import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Contactos from "./components/Contactos/Contactos";
import Productos from "./components/Productos/Productos";
import AcercaDe from "./components/AcercaDe/AcercaDe";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/acerca_de" element={<AcercaDe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
