'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/agente-andamento/components/agente-andamento.css'
import { useEffect } from 'react';
import { Navbar3 } from '@/shared/componentes/navbar3';
import { FaPaperclip } from 'react-icons/fa';


export default function agenteAndamento() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar3 />
      <h1 id='h1'>Em Andamento</h1>

      <div className="accordion" id="accordion">
        <div className="accordion-item" id='solicitacao'>
          <h2 className="accordion-header">
            <button id="botao" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <b>
                Protocolo: X &nbsp;
                Data aberto: dd/mm/aaaa &nbsp;
                Data conclusão: dd/mm/aaaa &nbsp;
                Status: Em andamento &nbsp; &nbsp;
                <FaPaperclip /> Imagem
              </b>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Descrição do usuário: <br />
              Endereço: <br />
              Status do técnico: <br />
              Nome do técnico: <br/>
              <FaPaperclip /> Imagem do técnico
            </div>
          </div>
            
            

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button id="botao" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>
                  Protocolo &nbsp;
                  Data aberto &nbsp;
                  Data conclusão &nbsp;
                  Status &nbsp; &nbsp;
                  <FaPaperclip /> Imagem
                </b>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Descrição do usuário: <br />
                Endereço: <br />
                Status do técnico: <br />
                Nome do técnico: <br/>
                <FaPaperclip /> Imagem do técnico
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button id="botao" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b> 
                  Protocolo &nbsp;
                  Data aberto &nbsp;
                  Data conclusão &nbsp;
                  Status &nbsp; &nbsp;
                  <FaPaperclip /> Imagem
                </b>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Descrição do usuário: <br />
                Endereço: <br />
                Status do técnico: <br />
                Nome do técnico: <br/>
                <FaPaperclip /> Imagem do técnico
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}