"use client";
import "bootstrap/dist/css/bootstrap.min.css";
/* import '../solicitacoes/components/solicitacao.css';*/
/* import 'app/globals.css' */
import "app/home-usuario/components/homeUsuario.css";
import { Navbar2 } from "@/shared/componentes/navbar2";
import Image from "next/image";
import Usuario from "images/usuario.png";
import Link from "next/link";
import { useEffect } from "react";
import { Navbar3 } from "@/shared/componentes/navbar3";

export default function homeUsuario() {
  return (
    <>
      <Navbar3 />
      <div className="mainss">
        <div>
          <h1 id="h1">Como podemos ajudar?</h1>
          <Image src={Usuario} alt="usuario" id="solicita" />
        </div>
        <div className="Buttones">
          <Link href="/solicitacoes">
            <button id="bt1" className="" type="button" >
              Solicitações
            </button>
          </Link>
          <Link href="/consulta">
            <button id="bt3" className="" type="button" >
              Consultas
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
