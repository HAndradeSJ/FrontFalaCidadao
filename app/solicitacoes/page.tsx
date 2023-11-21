/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import "./components/solicitacoes.css";
import Image from "next/image";
import faixa from "/images/faixa.png";
import placa from "/images/placas.jpg";
import arvore from "/images/arvores.jpg";
import ruas from "/images/ruas.jpg";
import iluminacao from "/images/iluminacao.jpg";
import { Navbar2 } from "@/shared/componentes/navbar2";
import Link from "next/link";
import { getCategoria } from "../api/categoria";
import { Categoria } from "@/shared/types/types";
import { Navbar3 } from "@/shared/componentes/navbar3";

export default function solicitacoes() {
  const [categoria, setCategoria] = useState<Categoria[]>([] as Categoria[]);
  useEffect(() => {
    async function getall() {
      const response = await getCategoria();
      console.log(response);
      setCategoria(response);
    }
    getall();
  }, []);

  return (
    <>
      <Navbar3 />
      <div className="mains">
        <div style={{ width: "100%" }}>
          <h1 className="title">Solicitação - Categorias</h1>
        </div>
        <div className="box">
          <div className="cards">
            <div className="img">
              <Image src={faixa} alt="documentos" className="images" />
            </div>
            <div className="quads">
              <div className="boxss">
                <p className="texts">Faixa de Pedestres</p>
                <p style={{ fontWeight: "300" }}>Secretária de Obras e Vias</p>
              </div>

              <Link href={"/solicitacoes-form/"}>
                <button
                  className="buttonSolici"
                  onClick={() => {
                    localStorage.setItem(
                      "idcategoria",
                      categoria[0]?.idcategoria
                    );
                  }}
                >
                  Solicitar
                </button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <Image src={placa} alt="documentos" className="images" />
            </div>
            <div className="quads">
              <div className="boxss">
                <p className="texts">Placas de Trânsitos</p>
                <p style={{ fontWeight: "300" }}>Secretária de Obras e Vias</p>
              </div>
              <Link href={"/solicitacoes-form/"}>
                <button
                  className="buttonSolici"
                  onClick={() => {
                    localStorage.setItem(
                      "idcategoria",
                      categoria[2]?.idcategoria
                    );
                  }}
                >
                  Solicitar
                </button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <Image src={arvore} alt="documentos" className="images" />
            </div>
            <div className="quads">
              <div className="boxss">
                <p className="texts">Retirada de Árovores</p>
                <p style={{ fontWeight: "300" }}>Secretária do Meio Ambiente</p>
              </div>
              <Link href={"/solicitacoes-form/"}>
                <button
                  className="buttonSolici"
                  onClick={() => {
                    localStorage.setItem(
                      "idcategoria",
                      categoria[1]?.idcategoria
                    );
                  }}
                >
                  Solicitar
                </button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <Image src={ruas} alt="documentos" className="images" />
            </div>
            <div className="quads">
              <div className="boxss">
                <p className="texts">Manutenção de Vias</p>
                <p style={{ fontWeight: "300" }}>Secretária de Obras e Vias</p>
              </div>
              <Link href={"/solicitacoes-form/"}>
                <button
                  className="buttonSolici"
                  onClick={() => {
                    localStorage.setItem(
                      "idcategoria",
                      categoria[3]?.idcategoria
                    );
                  }}
                >
                  Solicitar
                </button>
              </Link>
            </div>
          </div>
          <div className="cards">
            <div className="img">
              <Image src={iluminacao} alt="documentos" className="images" />
            </div>
            <div className="quads">
              <div className="boxss">
                <p className="texts">Iluminação pública</p>
                <p style={{ fontWeight: "300" }}>Secretária de Obras e Vias</p>
              </div>
              <Link href={"/solicitacoes-form/"}>
                <button
                  className="buttonSolici"
                  onClick={() => {
                    localStorage.setItem(
                      "idcategoria",
                      categoria[4]?.idcategoria
                    );
                  }}
                >
                  Solicitar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
