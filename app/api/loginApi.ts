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
    const {cpf, nome, telefone, idade, email, senha} = users
    const usuarios = {
        cpf : cpf,
        nome : nome,
        telefone : telefone,
        idade : idade,
        email : email,
        senha : senha,
        funcao : "cidadao",        
    }

    const res = await fetch (`${BACKEND_URL}/auth/sign-up`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios)
        
    })
    const data = await res.json();
    return data;
}

/* const criarUsersById = async  (id : any) => {
    const res = await fetch (`${BACKEND_URL}/alunos/${id}`);
    const data = await res.json();
    return data;
} */

export const login = async (users : usuarios) : Promise<any> => {
    const {email, senha} = users
    const usuarios = {
        email : email,
        senha : senha,        
    } 

    const res = await fetch (`${BACKEND_URL}/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios)
        
    })
    const data = await res.json();
    localStorage.setItem('token', data.token);
    return 'Logado com sucesso'
}



