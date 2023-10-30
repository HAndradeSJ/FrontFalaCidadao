"use client"
import React, { useEffect, useState } from 'react'
import { Navbar2 } from "@/shared/componentes/navbar2";
import 'app/perfil/components/perfil.css'
import api from '@/shared/componentes/utils/my-axios';
import { userDto } from '@/shared/types/types';

export default function perfil() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser] = useState<userDto[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        const token = localStorage.getItem('token')
        api.get("http://10.10.0.217:3080/user/getone",{
            headers: {
                "Content-type": "application/json",
                  "Authorization": `Bearer ${token}`,
            },
        }).then((response)=>{
            
            setUser(response.data.response);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <main>
            
            <Navbar2 />
            <h2 id="h2"> Olá! Cidadão! </h2>


            <form action="">
                <div>
                <label> Nome: </label>
                    <input type="text" placeholder={!user.nome ? "Nome" : user?.nome} />
                </div>
                    <br />
                <div>
                <label> CPF: </label>
                    <input type="text" placeholder={!user.cpf ? "CPF" : user?.cpf}/>
                </div>
                    <br />
                <div>
                <label> Email: </label>
                    <input type="text" placeholder={!user.email ? "Email" : user?.email}/>
                </div>

            </form>
        </main>

    )
}