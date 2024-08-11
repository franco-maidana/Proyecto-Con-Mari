import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import Contactos from "./components/Contactos/Contactos";
//import AcercaDe from "./components/AcercaDe/AcercaDe";
//import Productos from "./components/Productos/Productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* 
          <Route path="/contactos" element={<Contactos/>}/>
          <Route path="/acerca_de" element={<AcercaDe/>}/>
          <Route path="/productos" element={<Productos/>}/>
          */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
