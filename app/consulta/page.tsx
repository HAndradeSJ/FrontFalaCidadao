"use client";
import React, { useEffect, useState } from "react";
import { Navbar2 } from "@/shared/componentes/navbar2";
import "./components/consultas.css";
import { motion, Variants } from "framer-motion";
import "app/consulta/components/consultas.css";
import { BsCardImage } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { SolicitacaoDto } from "@/shared/types/types";
import axios from "axios";

export default function consulta() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ecadastro, setecadastro] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [consulta, setConsulta] = useState<SolicitacaoDto[]>([]);
  const googleLogoUrl =
    "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691100843~exp=1691101443~hmac=a30f55d5ff66b960de01a09d3cc7882cd6fd49341fdc97cfb099ed6a7bcde8a9";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://192.168.0.110:3080/solicitacao/get/mysolici`, {
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
      y:10,
    },
    onscreen: {
      y:30,
      rotate:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
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
                      <td>{item?.data_abertura}</td>
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
                      console.log("oi");
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
  );
}
