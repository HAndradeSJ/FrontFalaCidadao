import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'app/globals.css'*/
import '../contato/components/contato.css'
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook  } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { Navbar } from '@/shared/componentes/navbar';

export default function contato() {
  return (
    <>
    <Navbar/>
    <div id='div'>
      <h1 id='titulo'>Onde nos encontrar!</h1>
        <p id='texto'>Aqui estão algumas das redes sociais  quais o Fala Cidadão faz parte. 
          Nos sigam para melhor interação.</p>
    </div>
   <ul id='redes'>
      <li> <FaMailBulk/> fala.cidadao01@gmail.com  </li>
        <br />
      <li> <FaInstagram/> <Link style={{color: "#162E98", textDecoration: 'none'}} href="https://www.instagram.com/fala_.cidadao/"> fala_.cidadao </Link></li>
        <br />
      <li> <FaFacebook/>  <Link style={{color: "#162E98", textDecoration: 'none'}} href="https://www.facebook.com/people/Fala-Cidad%C3%A3o/100091260846377/"> Página Fala Cidadão </Link></li>
        <br />
      <li> <FaTiktok/>  <Link style={{color: "#162E98", textDecoration: 'none'}} href="https://www.tiktok.com/@falacidadao?is_from_webapp=1&sender_device=pc"> @falacidadao </Link></li>
    </ul>
    </>
  )
}