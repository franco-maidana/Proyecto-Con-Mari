import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navigate, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">MiLogo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Acerca de</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Productos</a>
          </li>
          <li className="nav-item">
            <NavLink to='/contactos' className="nav-link" href="/contact">Contacto</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Carrito</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
