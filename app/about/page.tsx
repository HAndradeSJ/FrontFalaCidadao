import 'bootstrap/dist/css/bootstrap.min.css';
import '../about/componentes/sobre.css'
/* import 'app/globals.css'*/
import Image from 'next/image'
import Celular from 'images/celular-mao.png'
import { Navbar } from '@/shared/componentes/navbar';

export default function about() {
  return (
    <main>
      <Navbar/>
      <div id="oqfala">
        <p> O que é o Fala Cidadão?</p>
      </div>
      <div id='texto1'>
        <p>O Fala Cidadão tem o objetivo de ajudar os cidadãos de
          Indaiatuba na hora de suas solicitações de resolução problemas com a infraestrutura.
          Foi pensado para ser a ligação entre as secretarias de Obras e Meio Ambiente e o próprio
          cidadão, facilitando a comunicação entre a comunidade e os servidores públicos.
          Evitando burocracias e o incômodos no momento das solicitações. A partir da solicitação do
          usuário, o sistema atuará apenas na transferência de informações, não havendo compromisso
          entre o sistema e a resolução das solicitações.
          Essa responsabilidade cabe em sua totalidade, ao município de Indaiatuba</p>
      </div>
      <Image id='celular' src={Celular} alt='celular' />
    </main>
  )
}

