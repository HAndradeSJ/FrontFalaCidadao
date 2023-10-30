import { BACKEND_URL_PROD } from "@/shared/componentes/constants/constants";
import api from "@/shared/componentes/utils/my-axios";
import axios from "axios";

const token = localStorage.getItem('token')
const idcategoria = localStorage.getItem('idcategoria');


interface solicitacao {
    categoraia: string;
    bairro:string,
    pontoref:string,
    lougradouro:string,
    numero:string,
    descricao:string,
}
export const solicitar = async (solicitar:any,path:String)=> {

    const solicitacao = {
        fk_idcategoria:idcategoria,
        bairro:solicitar.bairro,
        logradouro:solicitar.lougradouro,
        numero:solicitar.numero,
        pontoderef:solicitar.pontoref,
        descricao:solicitar.descricao,
        imagemUrl:path,
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


