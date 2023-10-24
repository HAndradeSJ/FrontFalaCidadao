"use client"
import React, { useState } from 'react'
import { Navbar2 } from '@/shared/componentes/navbar2'
import Image from 'next/image'
import lupa from 'images/lupa.png'
import 'app/consulta/components/consultas.css'

export default function Consultas() {
  const [ecadastro, setecadastro] = useState(false)
  const googleLogoUrl = "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691100843~exp=1691101443~hmac=a30f55d5ff66b960de01a09d3cc7882cd6fd49341fdc97cfb099ed6a7bcde8a9"

  const alternapagina = () => {
    const novoestado = !ecadastro;
    setecadastro(novoestado)
  }

  return (
    <main>

      <section>
        <Navbar2 />
      </section>
      <strong> <h2>Consultas</h2></strong>

      <form action="">
        <strong >  <a> Protocolo: </a> </strong>
        <input type="text" placeholder='xxx xxx xxx' />
        <button> <Image src={lupa} alt="" /></button>
      </form>
    </main>
  )
}
