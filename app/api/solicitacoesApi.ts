import { BACKEND_URL_PROD } from "@/shared/componentes/constants/constants";
import api from "@/shared/componentes/utils/my-axios";
import axios from "axios";

const token = localStorage.getItem('token')


interface solicitacao {
    categoria: string;
    bairro: string;
    lougradouro: string;
    numero: string;
    pontoref: string;
    descricao: string;
}

export const solicitar = async (solicitar: solicitacao): Promise<any> => {
    const config = {
        token:token
    }
    const { bairro, lougradouro, numero, pontoref, descricao, categoria} = solicitar
    const solicitacao = {
        categoria: categoria,
        bairro: bairro,
        logradouro:lougradouro,
        numero: numero,
        pontoderef:pontoref,
        descricao: descricao,
        imagemUrl:"",
    }
    console.log(solicitacao)

    const res = await axios.post(`http://10.10.0.217:3080/solicitacao/create`,solicitacao,{
        headers: {
            "Content-type": "application/json",
              "Authorization": `Bearer ${token}`,
        },
    })
    const data = res;
    return data;
}


