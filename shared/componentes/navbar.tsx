'use client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import Image from 'next/image';
import logo from 'images/logo.png'
import '../componentes/navbar.css'
import Link from 'next/link';


export function Navbar() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#162E98' }}>
      <div className="container-fluid">
        <Image id="perfil" src={logo} alt="logo" style={{ width: '3rem', height: '3rem', marginLeft: '3rem' }} />
        <a className="navbar-brand" href="./" id='falaCidadao'>
          Fala Cidadão
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse">
          <div className="navbar-nav" id='divNav'>
            <a className="nav-link active navbar-hover" aria-current="page" href="./" style={{ marginLeft: '5rem' }}>
              Home
            </a>
            <a className="nav-link active navbar-hover" aria-current="page" href="./login" style={{ marginLeft: '5rem' }}>
              Login
            </a>
            <a className="nav-link active navbar-hover" aria-current="page" href="./about" style={{ marginLeft: '5rem' }}>
              Sobre
            </a>
            <a className="nav-link active navbar-hover" aria-current="page" href="./contato" style={{ marginLeft: '5rem' }}>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}