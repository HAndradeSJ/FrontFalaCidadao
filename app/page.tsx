'use client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css' 
import React from 'react'
import { Navbar } from '@/shared/componentes/navbar'
import CarouselComponent from '../shared/componentes/carrossel'
import { Carousel } from 'react-bootstrap'
import './home.css'
import Doc from 'images/doc.jpg'
import Tempo from 'images/tempo.jpg'
import Veracidade from 'images/veracidade.jpg'
import Image from 'next/image'
/* import { NextPage } from 'next';
import Head from 'next/head'; */

export default function home () {
  return (
    <>
    <Navbar/>

      {/*<Head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head> */}

      <main>
        <CarouselComponent />

        <br />

        <h3> Vantagens do Fala Cidadão </h3>
        
        <div className="container justify-content-center  align-items-center">
          <div className='row'>

            <div className="card" style={{ width: "25rem", height: "30rem" }}>
              <Image src={Doc} alt='documentos' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Reduzir gastos com as documentações</h6>
                <p className="card-text">Com o Fala Cidadão, o gasto em documentações em papel será reduzido, deixando o processo de
                  reclamação do cidadão mais tecnológico e atual.</p>
              </div>
            </div>

            <div className="card" style={{ width: "25rem", height: "30rem" }}>
              <Image src={Tempo} alt='tempo' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Reduzir tempo de processo da solicitação</h6>
                <p className="card-text">Além do gasto com a documentação, o tempo de duração do projeto também será reduzido,
                  já que tudo poderá ser feito através do computador ou celular do cidadão.</p>
              </div>
            </div>

            <div className="card" style={{ width: "25rem", height: "30rem" }}>
              <Image src={Veracidade} alt='veracidade' className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title text-body font-weight-bold">Amenta a credibilidade da informação</h6>
                <p className="card-text">As informações dadas serão validadas de forma mais segura, de maneira que a credibilidade
                  da
                  informação do cidadão seja de maior credibilidade, evitando que haja informações falsas.</p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </>
  );
};