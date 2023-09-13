'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import  'app/solicitacoes-form/components/solicitacao-form.css';
import { Navbar2 } from '@/shared/componentes/navbar2';
import { useEffect } from 'react';

export default function solicitacoesForm() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <>
            <Navbar2 />
            <h1>Solicitações</h1>
            <form>
                <h4>Endereço</h4>
                {/* deixar assim ou mudar para um menu que tenha todos os bairros ?? */}
                <div className="mb-3">
                    <label className="form-label">Bairro:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rua:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Número:</label>
                    <input type="number" className="form-control" />
                </div>
                {/* vai ter mesmo ponto de referencia ?? */}
                <div className="mb-3">
                    <label className="form-label">Ponto de referência: *</label>
                    <input type="text" className="form-control" />
                </div>

                <h4>Solicitação</h4>
                <p>Tipo de problema:</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Categoria...</option>
                    <option value="1">Faixas de pedestres</option>
                    <option value="2">Placas de trânsito</option>
                    <option value="3">Poda ou retirada de árvores</option> {/* deixa assim ou separa em duas categorias */}
                    <option value="4">Manutenção de ruas, estradas, praças, etc.</option>
                    <option value="5">Iluminação Pública</option>
                </select>
                {/* ver se vai colocar // são só essas mesmo e colocar sigla */}
                
                <br/>
                <p>Secretaria:</p>
                <select className="form-select" aria-label="Default select example" disabled>
                    <option selected>Secretaria...</option>
                    <option value="1">Secretaria Municipal de Obras e Vias Públicas</option>
                    <option value="2">Secretaria Municipal de Serviços Urbanos e Meio Ambiente</option>
                </select>
                                        
                <br/>
                <h4>Fotos</h4>
                <div>
                    <label htmlFor="formFileLg" className="form-label">Adicione aqui fotos que você tirou do problema que deseja fazer uma solicitação</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
            </form>

            <button type="submit" className="btn btn-warning btn-lg">Enviar</button>

        </>
    )
}