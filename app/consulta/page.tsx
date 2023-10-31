/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { Navbar2 } from "@/shared/componentes/navbar2";
import "./components/consultas.css";
import { motion, Variants } from "framer-motion";
import "app/consulta/components/consultas.css";
import { BsCardImage } from "react-icons/bs";
import { format } from "date-fns";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SolicitacaoDto } from "@/shared/types/types";
import axios from "axios";
import Image from "next/image";

export default function consulta() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ecadastro, setecadastro] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [consulta, setConsulta] = useState<SolicitacaoDto[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showImage, setShowImage] = useState<boolean>(false);

  const [verMais, setVermais] = useState<SolicitacaoDto[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image,setImage] = useState<SolicitacaoDto[]>([]);
  const [isactived, setActived] = useState<boolean>(false);
  const googleLogoUrl =
    "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691100843~exp=1691101443~hmac=a30f55d5ff66b960de01a09d3cc7882cd6fd49341fdc97cfb099ed6a7bcde8a9";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://10.10.0.217:3080/solicitacao/get/mysolici`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setConsulta(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cardVariants: Variants = {
    offscreen: {
      y: 10,
    },
    onscreen: {
      y: 30,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  function viewMore(id: string) {
    setActived(true);
    let data = consulta.filter((item) => item.idsolicitacao === id);
    setVermais(data);
  }
  function showImages(id:string){
    setShowImage(true);
    let data = consulta.filter((item) => item.idsolicitacao === id);
    setImage(data);
  }

  return (
    <>
      {isactived == true ? (
        <main>
          <motion.div
            className="modaldiv"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="modalcard"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="modalheader">
                <h1 style={{ color: " #FFA53D", fontWeight: "bold" }}>
                  Solicitação
                </h1>
                <button
                  className="closebutton"
                  onClick={() => {
                    setActived(false);
                  }}
                >
                  <AiFillCloseCircle size={50} />
                </button>
              </div>
              <div className="modalbody">
                <div className="column">
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Descrição
                    </p>
                    <div className="mincard">{verMais[0]?.descricao}</div>
                  </div>
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Logradouro
                    </p>
                    <div className="mincard">{verMais[0]?.logradouro}</div>
                  </div>
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Número
                    </p>
                    <div className="mincard">{verMais[0]?.numero}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Bairro
                    </p>
                    <div className="mincard">{verMais[0]?.bairro}</div>
                  </div>
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Ponto de Referência
                    </p>
                    <div className="mincard">{verMais[0]?.pontoderef}</div>
                  </div>
                  <div className="inputs">
                    <p
                      style={{
                        fontWeight: "bold",
                        marginLeft: "2%",
                        fontSize: "1rem",
                      }}
                    >
                      Justivicativa
                    </p>
                    <div className="mincard">
                      {verMais[0]?.justifictiva == null
                        ? "Idefinida"
                        : verMais[0].justifictiva}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <section>
            <Navbar2 />
          </section>
          <strong>
            {" "}
            <h2>Consultas</h2>
          </strong>

          <form action="">
            <strong>
              {" "}
              <a className="title"> Protocolo</a>{" "}
            </strong>
            <input type="text" placeholder="xxx xxx xxx" />
            <button>
              <BiSearch size={35} color={"#FFA53D"} />
            </button>
            <motion.div
              id="boxs"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              {consulta.map((item, index) => {
                return (
                  <motion.div key={index} id="cards" variants={cardVariants}>
                    <div id="column1">
                      <table className="tables">
                        <tr>
                          <th>Protocolo</th>
                          <th>Data Abertura</th>
                          <th>Data Conclusão</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>{item?.chamado}</td>
                          <td>
                            {format(
                              new Date(item?.data_abertura),
                              "dd/MM/yyyy"
                            )}
                          </td>
                          <td>
                            {item?.data_encerramento == null
                              ? "Indefinida"
                              : item?.data_encerramento}
                          </td>
                          <td>{item?.status}</td>
                        </tr>
                      </table>
                    </div>
                    <div id="column2">
                      <div
                        className="info"
                        onClick={() => {
                          setShowImage(true)
                        }}
                      >
                        <BsCardImage size={30} color={" #162E98"} />
                      </div>
                      <button className="button">Ver mais</button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </form>
        </main>
      ) :( showImage == true ? (
        <>
          <motion.div
            className="modaldiv"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="modalcard"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                   <div className="modalheader">
                <h1 style={{ color: " #FFA53D", fontWeight: "bold" }}>
                  Imagem
                </h1>
                <button
                  className="closebutton"
                  onClick={() => {
                    setShowImage(false);
                  }}
                >
                  <AiFillCloseCircle size={50} />
                </button>
              </div>
              <div className="divImages">
                <Image  alt="logo" src={`http://10.10.0.217:3080/${image[0]?.imagemUrl}`} width={100}  height={100}/>
              </div>
            </motion.div>
          </motion.div>
          <main>
            <section>
              <Navbar2 />
            </section>
            <strong>
              {" "}
              <h2>Consultas</h2>
            </strong>

            <form action="">
              <strong>
                {" "}
                <a className="title"> Protocolo</a>{" "}
              </strong>
              <input type="text" placeholder="xxx xxx xxx" />
              <button>
                <BiSearch size={35} color={"#FFA53D"} />
              </button>
              <motion.div
                id="boxs"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                {consulta.map((item, index) => {
                  return (
                    <motion.div key={index} id="cards" variants={cardVariants}>
                      <div id="column1">
                        <table className="tables">
                          <tr>
                            <th>Protocolo</th>
                            <th>Data Abertura</th>
                            <th>Data Conclusão</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>{item?.chamado}</td>
                            <td>
                              {format(
                                new Date(item?.data_abertura),
                                "dd/MM/yyyy"
                              )}
                            </td>
                            <td>
                              {item?.data_encerramento == null
                                ? "Indefinida"
                                : format(
                                    new Date(item?.data_encerramento),
                                    "dd/MM/yyyy"
                                  )}
                            </td>
                            <td>{item?.status}</td>
                          </tr>
                        </table>
                      </div>
                      <div id="column2">
                        <div
                          className="info"
                          onClick={() => {
                            console.log("oi")
                            setShowImage(true)
                          }}
                        >
                          <BsCardImage size={30} color={" #162E98"} />
                        </div>
                        <button
                          className="button"
                          onClick={() => {
                            viewMore(item?.idsolicitacao);
                          }}
                        >
                          Ver mais
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </form>
          </main>
        </>
      ) : (
        <main>
          <section>
            <Navbar2 />
          </section>
          <strong>
            {" "}
            <h2>Consultas</h2>
          </strong>

          <form action="">
            <strong>
              {" "}
              <a className="title"> Protocolo</a>{" "}
            </strong>
            <input type="text" placeholder="xxx xxx xxx" />
            <button>
              <BiSearch size={35} color={"#FFA53D"} />
            </button>
            <motion.div
              id="boxs"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              {consulta.map((item, index) => {
                return (
                  <motion.div key={index} id="cards" variants={cardVariants}>
                    <div id="column1">
                      <table className="tables">
                        <tr>
                          <th>Protocolo</th>
                          <th>Data Abertura</th>
                          <th>Data Conclusão</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>{item?.chamado}</td>
                          <td>
                            {format(
                              new Date(item?.data_abertura),
                              "dd/MM/yyyy"
                            )}
                          </td>
                          <td>
                            {item?.data_encerramento == null
                              ? "Indefinida"
                              : format(
                                  new Date(item?.data_encerramento),
                                  "dd/MM/yyyy"
                                )}
                          </td>
                          <td>{item?.status}</td>
                        </tr>
                      </table>
                    </div>
                    <div id="column2">
                      <div
                        className="info"
                        onClick={() => {
                          showImages(item?.idsolicitacao)
                        }}
                      >
                        <BsCardImage size={30} color={" #162E98"} />
                      </div>
                      <button
                        className="button"
                        onClick={() => {
                          viewMore(item?.idsolicitacao);
                        }}
                      >
                        Ver mais
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </form>
        </main>
     ) )}
    </>
  );
}
