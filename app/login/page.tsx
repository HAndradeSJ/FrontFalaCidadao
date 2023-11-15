"use client";


import "../login/components/login.css";
import { Navbar } from "@/shared/componentes/navbar";
import { useState } from "react";
import { criarUsers, login } from "../api/loginApi";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const objectUSuario = {
    cpf: null,
    nome: null,
    telefone: null,
    idade: null,
    email: null,
    senha: null,
  };
  const Router = useRouter();
  const [Cadastro, setCadastro] = useState(false);
  const [Usuarios, setUSuario] = useState(objectUSuario);
  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUSuario({ ...Usuarios, [name]: value });
  }
 
  const enviar = async () => {
    try {
      if (Cadastro == true) {
        const response = await criarUsers(Usuarios);
        console.log(response);

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Cadastro feito com sucesso!",
          });
          const res = await login(Usuarios);
          if (res.status === 200) {
            if (res.data.response.funcao === "cidadao") {
              Router.push("/home-usuario");
            } else {
              Router.push("/home-agente");
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Cadastro feito com sucesso!",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Cadastro feito com sucesso!",
          });
        }
      } else {
        const response = await login(Usuarios);
         
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login feito com sucesso !",
          });
          console.log(response.data.response.funcao)
          if (response.data.response.funcao === 'cidadao') {
            Router.push("/home-usuario");
            // window.location.reload();
          } else {
            Router.push("/home-agente");
            // window.location.reload();
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Cadastro feito com sucesso!",
          });
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Algo deu errado!",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="mains">
        {Cadastro === true ? (
          <div className="form-container1">
            <p className="title">Cadastro</p>
            <div className="form">
              <div className="formsContainer">
              <div className="columns">
              <div className="input-group">
                <label htmlFor="username">CPF</label>
                <input
                 onChange={(e) => onchange(e)} name='cpf' type="number"
                  placeholder=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">Nome</label>
                <input
                onChange={(e) => onchange(e)} name='nome' type="text"
                  placeholder=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">Telefone</label>
                <input
               onChange={(e) => onchange(e)} name='telefone' type="number"
                  placeholder=""
                />
              </div>
              </div>
              <div className="columns">
              <div className="input-group">
                <label htmlFor="username">Idade</label>
                <input
              onChange={(e) => onchange(e)} name='idade' type="number"
                  placeholder=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">Email</label>
                <input
                  onChange={(e) => onchange(e)}
                  name="email"
                  type="email"
                  id="username"
                  placeholder=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input
                  onChange={(e) => onchange(e)}
                  name="senha"
                  type="password"
                  id="password"
                  placeholder=""
                />
                </div>
                </div>
              </div>
                <div className="forgot">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    style={{ textDecoration: "underline" }}
                  >
                    Esqueceu sua senha ?
                  </a>
                </div>
              <button
                className="sign"
                onClick={() => {
                  enviar();
                }}
              >
                Cadastra-se 
              </button>
            </div>
            <div className="social-message">
              <div className="line"></div>
              <p className="message">Outras maneiras</p>
              <div className="line"></div>
            </div>
            <div className="social-icons">
              <button aria-label="Log in with Google" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <br />
            <p className="signup">
              Deseja fazer seu ? 
              <a
                href="#"
                style={{ textDecoration: "underline", color: "#FFA53D" }}
                onClick={() => {
                   setCadastro(false)
                }}
              >
                login
              </a>
            </p>
          </div>
        ) : (
          <>
            <div className="form-container">
              <p className="title">Login</p>
              <div className="form">
                <div className="input-group">
                  <label htmlFor="username">Email</label>
                  <input
                    onChange={(e) => onchange(e)}
                    name="email"
                    type="email"
                    id="username"
                    placeholder=""
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    onChange={(e) => onchange(e)}
                    name="senha"
                    type="password"
                    id="password"
                    placeholder=""
                  />
                  <div className="forgot">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      style={{ textDecoration: "underline" }}
                    >
                      Esqueceu sua senha ?
                    </a>
                  </div>
                </div>
                <button
                  className="sign"
                  onClick={() => {
                    enviar();
                  }}
                >
                  Logar
                </button>
              </div>
              <div className="social-message">
                <div className="line"></div>
                <p className="message">Outras maneiras</p>
                <div className="line"></div>
              </div>
              <div className="social-icons">
                <button aria-label="Log in with Google" className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </div>
              <br />
              <p className="signup">
                Você não tem conta ?
                <a
                  href="#"
                  style={{ textDecoration: "underline", color: "#FFA53D" }}
                  onClick={() => {
                    setCadastro(true)
                  }}
                >
                  cadastra-se
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
