"use client"
import React, { use, useEffect, useState } from 'react'
import { Navbar2 } from '@/shared/componentes/navbar2'
import Image from 'next/image'
import './components/consultas.css'
import lupa from 'images/lupa.png'
import 'app/consulta/components/consultas.css'
import { SolicitacaoDto } from '@/shared/types/types'
import api from '@/shared/componentes/utils/my-axios'
import axios from 'axios'

export default function consulta() {
  const token = localStorage.getItem('token')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ecadastro, setecadastro] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [consulta , setConsulta ] = useState<SolicitacaoDto[]>([])
  const googleLogoUrl = "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691100843~exp=1691101443~hmac=a30f55d5ff66b960de01a09d3cc7882cd6fd49341fdc97cfb099ed6a7bcde8a9"

  const alternapagina = () => {
    const novoestado = !ecadastro;
    setecadastro(novoestado)
  }
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    axios.post(`http://10.10.0.217:3080/solicitacao/get/mysolici`,{
      headers: {
          "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
      },
  }).then((response)=>{
      console.log(response);

  })
  })

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
        <div className='boxs'>
            {/* consulta.map((item,index) => {
          
                  <div class="card" className="width:120rem;">
                  <div class="card-body">
                    <h5 class="card-title">Nome: ${item.user}</h5>
                    <p class="card-text">CPF: ${s.cpf}.</p>
                    <p class="card-text">CPE:${s.cep}.</p>
                  </div>
                </div>
          
           })
            */}
        </div>
      </form>
    </main>
    
  )
}
