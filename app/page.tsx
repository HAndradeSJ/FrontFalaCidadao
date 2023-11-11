"use client";
import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "@/shared/componentes/navbar";
import CarouselComponent from "../shared/componentes/carrossel";
import { Carousel } from "react-bootstrap";
import "./home.css";
import Doc from "images/doc.jpg";
import Tempo from "images/tempo.jpg";
import Veracidade from "images/veracidade.jpg";
import Image from "next/image";
/* import { NextPage } from 'next';
import Head from 'next/head'; */

export default function home() {
  return (
    <>
      <Navbar />

      {/*<Head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head> */}

      <main>
        <CarouselComponent />
        <br />
        <h3> Vantagens do Fala Cidadão </h3>
        <br />
        <div className="master">
          <div className="card">
            <Image src={Doc} alt="documentos" className="fotos" />
            <p className="card-title">Reduzir gastos com as documentações</p>
            <p className="small-desc">
              Com o Fala Cidadão, o gasto em documentações em papel será
              reduzido, deixando o processo de reclamação do cidadão mais
              tecnológico e atual.
            </p>
            <div className="go-corner">
              <div className="go-arrow"></div>
            </div>
          </div>
          <div className="card">
            <Image src={Tempo} alt="documentos" className="fotos" />
            <p className="card-title">
              Reduzir tempo de processo da solicitação
            </p>
            <p className="small-desc">
              Além do gasto com a documentação, o tempo de duração do projeto
              também será reduzido, já que tudo poderá ser feito através do
              computador ou celular do cidadão.
            </p>
            <div className="go-corner">
              <div className="go-arrow"></div>
            </div>
          </div>
          <div className="card">
            <Image src={Veracidade} alt="documentos" className="fotos" />
            <p className="card-title">Aumenta a credibilidade da informação</p>
            <p className="small-desc">
              As informações dadas serão validadas de forma mais segura, de
              maneira que a credibilidade da informação do cidadão seja de maior
              credibilidade, evitando que haja informações falsas.s
            </p>
            <div className="go-corner">
              <div className="go-arrow"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
