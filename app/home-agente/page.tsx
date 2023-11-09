'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/home-agente/components/home-agente.css'
import Image from 'next/image';
import agente from 'images/agente.png'
import Link from 'next/link';
import { useEffect } from 'react';
import { Navbar3 } from '@/shared/componentes/navbar3';
import { Navbar2 } from '@/shared/componentes/navbar2';


export default function homeAgente() {

    return (
    <>
      <Navbar2 />
      <main style={{width:'100%', height:'100%',display:'flex',justifyContent:'space-between'}}>
      <div style={{width:'50%'}}>
      <h1 id='h1'>Como podemos ajudar?</h1>
      <Image src={agente} alt='agente' id='agente' />
      </div>

      <div className="lista">
       <Link href='/agente-solicitacao'>
        <button id='bt1' className="btn" type="button" btn-lg>Solicitações</button>
        </Link>
       <Link href='/agente-minhassolicitacao'>
        <button id='bt1' className="btn" type="button" btn-lg>Minhas Solicitações</button>
        </Link>
      </div>
      </main>
    </>
  )
}