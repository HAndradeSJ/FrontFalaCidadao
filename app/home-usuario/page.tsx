'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import '../solicitacoes/components/solicitacao.css';*/
/* import 'app/globals.css' */
import 'app/home-usuario/components/homeUsuario.css';
import { Navbar2 } from '@/shared/componentes/navbar2';
import Image from 'next/image';
import Usuario from 'images/usuario.png'
import Link from 'next/link';
import { useEffect } from 'react';

export default function homeUsuario() {
<<<<<<< HEAD
   
=======
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
>>>>>>> d8d80b882a09652bf5b1e6ed946e242faeae055b
    return (
    <>
      <Navbar2 />
      <h1 id='h1'>Como podemos ajudar?</h1>
      <Image src={Usuario} alt='usuario' id='solicita' />

      <div className="d-grid gap-2 col-3 mx-auto">
       <Link href='/solicitacoes'>
        <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
        </Link>
        <Link href='/consultas'>
        <button id='bt2' className="btn btn" type="button" btn-lg>Consultas</button>
       </Link>
      </div>
    </>
  )
}