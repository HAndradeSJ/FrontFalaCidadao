'use client'

import '../login/components/login.css'
import { useState } from 'react'

export default function Login() {
    const [Cadastro, setCadastro] = useState(false);
    const alternaForm = () => {
        const anterior = Cadastro;
        setCadastro(!anterior);
        
    }

    return (
        <main>
            
            <h1 id='texte'> <b> {Cadastro ? "CADASTRO" : "LOGIN"} </b> </h1>
            
            <div id='div'>
            <form>

            { Cadastro ? <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label"> CPF:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div> : null 
            }

            { Cadastro ? <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label"> Nome:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div> : null 
            }

            { Cadastro ? <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label"> Telefone:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div> : null 
            }

                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            </form>
                <button type="submit" className="btn btn-success">Login</button> 
                <button onClick={alternaForm} type="submit" className="btn btn-warning"> {Cadastro ? "Mudar para Login" : "Mudar para Cadastro"}</button>
            </div>   
            </main>             
            )
        }