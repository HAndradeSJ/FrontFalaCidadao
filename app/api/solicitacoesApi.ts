import { BACKEND_URL_PROD } from "@/shared/componentes/constants/constants";
import axios from "axios";

interface solicitacao {
    categoria: string;
    bairro: string;
    rua: string;
    numero: string;
    referencia: string;
    descricao: string;
}

export const solicitar = async (solicitar: solicitacao): Promise<any> => {
    const { bairro, rua, numero, referencia, descricao, categoria} = solicitar
    const solicitacao = {
        categoria: categoria,
        bairro: bairro,
        rua: rua,
        numero: numero,
        referencia: referencia,
        descricao: descricao,
    }

    const res = await axios.post(`${BACKEND_URL_PROD}/auth/sign-up`, solicitacao)
    const data = res;
    return data;
}


