/* 'use client' */
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'

export function Navbar2 () {

/*   useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
 */
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fala Cidadão</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="./solicitacoes-form">Solicitações</a>
        <a className="nav-link active" aria-current="page" href="./consulta">Consultas</a>
      </div>
    </div>
  </div>
</nav>
    )
}
