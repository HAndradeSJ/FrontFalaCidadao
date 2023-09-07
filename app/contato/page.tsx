import 'app/globals.css'
import '../contato/components/contato.css'
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook  } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export default function contato() {
  return (
    <>
    <div id='div'>
      <h1 id='titulo'>Onde nos encontrar!</h1>
        <p id='texto'>Aqui estão algumas das redes sociais  quais o Fala Cidadão faz parte. 
          Nos sigam para melhor interação.</p>
    </div>
   <ul id='redes'>
      <li> <FaMailBulk/> fala.cidadao01@gmail.com  </li>
        <br />
      <li> <FaInstagram/> <Link href=""> fala_.cidadao </Link></li>
        <br />
      <li> <FaFacebook/>  <Link href=""> Página Fala Cidadão </Link></li>
        <br />
      <li> <FaTiktok/>  <Link href=""> @falacidadao </Link></li>
    </ul>
    </>
  )
}