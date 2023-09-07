import { BACKEND_URL } from "@/shared/componentes/constants/constants";

interface usuarios{
    cpf: null,
    nome: null,
    telefone: null,
    idade:null,
    email: null,
    senha: null,
}

interface conta {
    email: null,
    senha:null,
}

export const criarUsers = async (users : usuarios) : Promise<any> => {
    const res = await fetch (`${BACKEND_URL}/auth/sing-up`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(users)
        
    })
    const data = await res.json();
    return data;
}

/* const criarUsersById = async  (id : any) => {
    const res = await fetch (`${BACKEND_URL}/alunos/${id}`);
    const data = await res.json();
    return data;
} */

export const login = async (conta : conta) : Promise<any> => {
    const res = await fetch (`${BACKEND_URL}/auth/login`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(conta)
        
    })
    const data = await res.json();
    localStorage.setItem('token', data.token);
}



