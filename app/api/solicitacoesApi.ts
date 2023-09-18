import { BACKEND_URL } from "@/shared/componentes/constants/constants";

interface solicitacao {
    categoria: string;
    secretaria: string;
    bairro: string;
    rua: string;
    numero: string;
    referencia: string;
}

export const solicitar = async (solicitar : solicitacao) : Promise<any> => {
    const res = await fetch (`${BACKEND_URL}/ /* caminho backend */`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(solicitar)
        
    })
    const data = await res.json();
    return data;
}

