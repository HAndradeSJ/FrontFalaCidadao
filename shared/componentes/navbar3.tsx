'use client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import Image from 'next/image'
import perfil from 'images/user-icon.png';
import Link from 'next/link';

export function Navbar3 () {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="./home-agente">Fala Cidadão</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="./agente-solicitacao">Solicitações</a>
        <a className="nav-link active" aria-current="page" href="./agente-andamento">Em andamento</a>
        <a className="nav-link active" aria-current="page" href="./agente-concluido">Concluído</a>
        <a className="nav-link active" aria-current="page" href="./agente-cancelado">Cancelado</a>
      </div>
    </div>
    <Link href='/perfil'><Image id='perfil' src={perfil} alt='perfil' style={{width:'3rem', height: '3rem'}}/></Link>
  </div>
</nav>
    )
}
