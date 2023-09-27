'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import  'app/solicitacoes-form/components/solicitacao-form.css';
import { Navbar2 } from '@/shared/componentes/navbar2';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { solicitar } from '../api/solicitacoesApi';


export default function solicitacoesForm() {
    const objectSolicitar  = {
        categoria: '',
        bairro: '',
        rua: '',
        numero: '',
        referencia: '',
        descricao: '',
    };

    const [solicitacao, setSolicitacao] = useState(objectSolicitar);
    const [categoria, setCategoria] = useState('');

    function onchange (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
       const {name,value} = e.target;
       setSolicitacao({...solicitacao, [name]: value});
    }

    const enviar = async () => {
        try {
            const data = {
                ...solicitacao,
                categoria,
            };
            const response = await solicitar(data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <>
            <Navbar2 />
            <h1>Solicitações</h1>
            <form>
                <h4>Endereço</h4>
                <div className="mb-3">
                    <label className="form-label">Bairro:</label>
                    <input onChange={onchange} type="text" className="form-control" name='bairro' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rua:</label>
                    <input onChange={onchange} type="text" className="form-control" name='rua'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Número:</label>
                    <input onChange={onchange} type="number" className="form-control" name='numero'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ponto de referência:</label>
                    <input onChange={onchange} type="text" className="form-control" name='referencia'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descrição:</label>
                    <input onChange={onchange} type="text" className="form-control" name='descricao'/>
                </div>


                <h4>Solicitação</h4>
                <p>Tipo de problema:</p>
                <select className="form-select" aria-label="Default select example"  onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                    <option disabled selected  value="">Categoria...</option>
                    <option value="1">Faixas de pedestres</option>
                    <option value="2">Placas de trânsito</option>
                    <option value="3">Poda ou retirada de árvores</option>
                    <option value="4">Manutenção de ruas, estradas, praças, etc.</option>
                    <option value="5">Iluminação Pública</option>
                </select>
                                        
                <br/>
                <h4>Fotos</h4>
                <div>
                    <label htmlFor="formFileLg" className="form-label">Adicione aqui fotos que você tirou do problema que deseja fazer uma solicitação</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
            </form>

            <button onClick={() => {enviar()}} type="submit" className="btn btn-warning btn-lg">Enviar</button>

        </>
    );
}