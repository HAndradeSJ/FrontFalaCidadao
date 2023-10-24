import 'node_modules/bootstrap/dist/css/bootstrap.min.css' 
import React from 'react'
import 'app/solicitacoes/components/solicitacoes.css'
import Image from 'next/image'
import faixa from '/images/faixa.png'
import placa from '/images/placas.jpg'
import arvore from '/images/arvores.jpg'
import ruas from '/images/ruas.jpg'
import iluminacao from '/images/iluminacao.jpg'
import { Navbar2 } from '@/shared/componentes/navbar2'
import Link from 'next/link';

export default function solicitacoes () {
  return (
    <>
    <Navbar2/>
        <h3 id='h3'> Solicitações - Categorias </h3>
        <div className="container justify-content-center  align-items-center">
          <div className='row'>

          <div className="card" style={{ width: "20rem", height: "20rem" }}>
              <Image src={faixa} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Faixa de pedestre</h6>
                <Link href='/solicitacoes-form'>
                <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
                </Link>
              </div>
            </div>
            
            <div className="card" style={{ width: "20rem", height: "20rem" }}>
              <Image src={placa} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Placas de trânsito</h6>
                <Link href='/solicitacoes-form'>
                <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "20rem", height: "20rem" }}>
              <Image src={arvore} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Poda ou retirada de árvores</h6>
                <Link href='/solicitacoes-form'>
                <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
                </Link>
              </div>
            </div>  

            <div className="card" style={{ width: "20rem", height: "20rem" }}>
              <Image src={ruas} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Manutenção de ruas, estradas, praças, etc.</h6>
                <Link href='/solicitacoes-form'>
                <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "20rem", height: "20rem" }}>
              <Image src={iluminacao} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Iluminação pública</h6>
                <Link href='/solicitacoes-form'>
                <button id='bt1' className="btn btn" type="button" btn-lg>Solicitações</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </>
)};