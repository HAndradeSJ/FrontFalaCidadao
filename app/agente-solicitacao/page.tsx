'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/agente-solicitacao/components/agente-solicitacao.css'
import { useEffect } from 'react';
import { Navbar3 } from '@/shared/componentes/navbar3';
import { FaPaperclip } from 'react-icons/fa';
import React, { useState } from 'react';
import Swal from 'sweetalert2';


export default function solicitacaoAgente() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    Swal.fire('Descrição do usuário: Endereço: Status do técnico: Nome do técnico: Imagem do técnico:')
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  
  return (
    <>
      <Navbar3 />
      <h1 id='h1'>Solicitações</h1>

    <div>
    <table id='table'>
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
          <td>1</td>
          <td>dd/mm/aaaa</td>
          <td>dd/mm/aaaa</td>
          <td>Solicitação</td>
          <td>Img.png</td>
        </tr>
      </tbody>
    </table>
    
      <button onClick={openModal} className="btn btn" id='botao'>Ver Mais</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
          </div>
      )}
      </div>

      <div>
    <table id='table'>
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
    
      <button onClick={openModal} className="btn btn" id='botao'>Ver Mais</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
          </div>
      )}
      </div>

    </>
  )
}