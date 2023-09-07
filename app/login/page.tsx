'use client'

import '../login/components/login.css'
import { Navbar } from '@/shared/componentes/navbar';
import { useState } from 'react'
import { criarUsers } from '../api/loginApi';


export default function Login() {
    const objectUSuario = {
        cpf: null,
        nome: null,
        telefone: null,
        idade:null,
        email: null,
        senha: null,
    };

    const [Cadastro, setCadastro] = useState(false);
    const [Usuarios, setUSuario] = useState(objectUSuario);
    function onchange (e: React.ChangeEvent<HTMLInputElement>) {
       const {name,value} = e.target;
       setUSuario({...Usuarios, [name]: value});
    }
    const alternaForm = () => {
        const anterior = Cadastro;
        setCadastro(!anterior);

    }
    const enviar = async () => {
        try {
            const response = await criarUsers(Usuarios);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <main>
            <h1 id='texte'> <b> {Cadastro ? "CADASTRO" : "LOGIN"} </b> </h1>

            <div id='div'>
                <form>

                    {Cadastro ? <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label"> CPF:</label>
                        <input onChange={(e) => onchange(e)} name='cpf' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div> : null
                    }

                    {Cadastro ? <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label"> Nome:</label>
                        <input onChange={(e) => onchange(e)} name='nome' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div> : null
                    }

                    {Cadastro ? <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label"> Telefone:</label>
                        <input onChange={(e) => onchange(e)} name='telefone' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div> : null
                    }

                    {Cadastro ? <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label"> Idade:</label>
                        <input onChange={(e) => onchange(e)} name='idade' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div> : null
                    }

                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input onChange={(e) => onchange(e)} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                        <input onChange={(e) => onchange(e)} name='senha' type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </form>

                <button onClick={() => {enviar()}} type="submit" className="btn btn-success">Login</button>

                <button onClick={alternaForm} type="submit" className="btn btn-warning"> {Cadastro ? "Mudar para Login" : "Mudar para Cadastro"}</button>
            </div>
        </main>
    )
}