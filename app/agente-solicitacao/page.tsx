"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "app/agente-solicitacao/components/agente-solicitacao.css";

import { Navbar3 } from "@/shared/componentes/navbar3";
import { FaPaperclip } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function solicitacaoAgente() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    Swal.fire(
      "Descrição do usuário: Endereço: Status do técnico: Nome do técnico: Imagem do técnico:"
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar3 />
      <h1 id="h1">Solicitações</h1>

      <div className="accordion" id="accordion">
        <div className="accordion-item" id="solicitacao">
          <h2 className="accordion-header">
            <button
              id="botao"
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>
                Protocolo: X &nbsp; Data aberto: dd/mm/aaaa &nbsp; Data
                conclusão: dd/mm/aaaa &nbsp; Status: ... &nbsp; &nbsp;
                <FaPaperclip /> Imagem
              </b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Descrição do usuário: <br />
              Endereço: <br />
              Status do técnico: <br />
              Nome do técnico: <br />
              <FaPaperclip /> Imagem do técnico
            </div>
          </div>
        </div>

        <div>
          <table id="table">
            <thead>
              <tr>
                <td>Protocolo:</td>
                <td>Abertura:</td>
                <td>Conclusão:</td>
                <td>Status:</td>
                <td>Imagem:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>dd/mm/aaaa</td>
                <td>dd/mm/aaaa</td>
                <td>Solicitação</td>
                <td>Img.png</td>
              </tr>
            </tbody>
          </table>

          <button onClick={openModal} className="btn btn" id="botao">
            Ver Mais
          </button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
