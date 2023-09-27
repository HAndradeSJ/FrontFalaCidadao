import 'app/not-found/components/not-found.css'
import Image from 'next/image'
import notfound from 'images/not-found.png'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
        <div> 
        <Image src={notfound} alt='página-não-encontrada' id='notfound'/>
        <h1>PÁGINA NÃO ENCONTRADA</h1>
        </div>
        <Link href='./'>
        <button id='bt' className="btn btn-warning" type="button" btn-lg>Página Inicial</button>
       </Link>
        </>
    )
}