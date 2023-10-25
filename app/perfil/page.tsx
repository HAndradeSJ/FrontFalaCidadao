"use client"
import React, { useState } from 'react'
import { Navbar2 } from "@/shared/componentes/navbar2";
import 'app/perfil/components/perfil.css'

export default function perfil() {
    return (
        <main>
            
            <Navbar2 />
            <h2 id="h2"> Olá! Cidadão! </h2>


            <form action="">
                <div>
                <label> Nome: </label>
                    <input type="text" placeholder='Nome' />
                </div>
                    <br />
                <div>
                <label> CPF: </label>
                    <input type="text" placeholder='xxx xxx xxx-xx'/>
                </div>
                    <br />
                <div>
                <label> Email: </label>
                    <input type="text" placeholder='exemploemail@gmail.com'/>
                </div>

            </form>
        </main>

    )
}