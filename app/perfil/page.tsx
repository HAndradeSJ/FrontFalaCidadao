"use client"
import React, { useEffect, useState } from 'react'
import { Navbar2 } from "@/shared/componentes/navbar2";
import 'app/perfil/components/perfil.css'
import api from '@/shared/componentes/utils/my-axios';
import { userDto } from '@/shared/types/types';
import { Navbar3 } from '@/shared/componentes/navbar3';

export default function perfil() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser] = useState<userDto[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        const token = localStorage.getItem('token')
        api.get("/user/getone",{
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
            
            <Navbar3 />
            <h2 id="h2"> Olá! Cidadão! </h2>
            <form action="" style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:'1rem',marginTop:'10%'}}>
                <div>
                <label>Nome </label>
                    <input type="text" placeholder={!user.nome ? "Nome" : user?.nome}  style={{marginLeft:'2%'}}/>
                </div>
                    <br />
                <div>
                <label>CPF</label>
                    <input type="text" placeholder={!user.cpf ? "CPF" : user?.cpf} style={{marginLeft:'3%'}}/>
                </div>
                    <br />
                <div>
                <label> Email:    </label>
                    <input type="text" placeholder={!user.email ? "Email" : user?.email} style={{marginLeft:'2%'}}/>
                </div>

            </form>
        </main>

    )
}