import { Navbar } from "@/shared/componentes/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/senha/components/senha.css'




export default function EsqueceuSenha() {
    return (
      <main>
        <Navbar />
        <h1 id='texto'> <b> Esqueceu a senha?</b> </h1>

        <div id='div'>
        <form>
            <label>Email:</label>
            <input name='email' type="text" className="form-control" id="exampl==InputEmail1" aria-describedby="emailHelp"></input>
        </form>
        </div>



        </main>
    )};
