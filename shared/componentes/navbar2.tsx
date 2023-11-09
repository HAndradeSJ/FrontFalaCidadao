'use client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import '../componentes/navbar.css'
import Image from 'next/image';
import logo from 'images/logo.png';

export function Navbar2() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav style={{ backgroundColor: "#162E98" }} className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Image id="perfil" src={logo} alt="logo" style={{ width: '3rem', height: '3rem', marginLeft: '3rem' }} />
        <a className="navbar-brand" href="./home-usuario" id='falaCidadao'>
          Fala Cidadão
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" >
          <div className="navbar-nav" id='divNav'>
            <a className="nav-link active navbar-hover" aria-current="page" href="./solicitacoes" style={{ marginLeft: '5rem' }}>
              Solicitações
              </a>
            <a className="nav-link active navbar-hover" aria-current="page" href="./consulta" style={{ marginLeft: '7rem' }}>
              Consultas
              </a>
          </div>
        </div>
        <Link href='/perfil'> <FaUser style={{ color: '#FFA53D', width: '2rem', height: '2rem' }} /> </Link>
      </div>

      <div>
        <Link href='/'> <MdLogout style={{ color: '#FFA53D', width: '2rem', height: '2rem', marginRight: '5rem' }} /> </Link>
      </div>
    </nav>
  )
}
