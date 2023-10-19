import { Navbar } from "@/shared/componentes/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/senha/components/senha.css'




export default function EsqueceuSenha() {
    return (
      <>
        <Navbar />
        
        <div>
        <h1 id='texto'> <b> Esqueceu a senha?</b> </h1>
        </div>

        <div id='div'>
          <h4> Sua nova senha será: </h4>
        </div>
        </>
    )};
