import { Navbar2 } from "@/shared/componentes/navbar2";


export default function HomePage() {
    return (
        <main>
                <Navbar2 />
            <strong> <h2 className="text-5xl ml-64 m-32 " style={{ color: "#FFA53D" }}>Olá! Cidadão! </h2> </strong>


            <form action="" className="inlinblock  ">
                <div className="block ">
                    <strong >  <a className=' text-2xl ml-96' style={{ color: "#FFA53D" }} > Nome: </a></strong>
                    <input type="text" placeholder='Nome' className='w-1/2 rounded-xl h-9 p-5 m-2 ml-0 placeholder-blue-900' style={{ backgroundColor: "#DBDBDE" }} />
                </div>

                <div className="block ">
                    <strong >  <a className='text-2xl ml-96' style={{ color: "#FFA53D" }} > Cpf: </a></strong>
                    <input type="text" placeholder='xxx xxx xxx-xx' className='w-1/2 first-letter: rounded-xl h-5 p-5 m-4 ml-6 placeholder-blue-900' style={{ backgroundColor: "#DBDBDE" }} />
                </div>

                <div className="block ">
                    <strong >  <a className=' text-2xl ml-96' style={{ color: "#FFA53D" }} > Email: </a></strong>
                    <input type="text" placeholder='exemploemail@gmail.com' className='w-1/2 rounded-xl h-9 p-5 m-10 -mt-0 ml-1 placeholder-blue-900' style={{ backgroundColor: "#DBDBDE" }} />
                </div>

            </form>


        </main>

    )
}