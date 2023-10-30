'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/home-agente/components/home-agente.css'
import Image from 'next/image';
import agente from 'images/agente.png'
import Link from 'next/link';
import { useEffect } from 'react';
import { Navbar3 } from '@/shared/componentes/navbar3';


export default function homeAgente() {

    return (
    <>
      <Navbar3 />
      <h1 id='h1'>Como podemos ajudar?</h1>
      <Image src={agente} alt='agente' id='agente' />

      <div className="d-grid gap-2 col-3 mx-auto ">
       <Link href='/agente-solicitacao'>
        <button id='bt1' className="btn" type="button" btn-lg>Solicitações</button>
        </Link>
      </div>
    </>
  )
}