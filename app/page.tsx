import 'bootstrap/dist/css/bootstrap.min.css'
import 'app/globals.css'
import React from 'react';
/* import CarouselComponent from '../shared/componentes/carrossel'; */

export default function home() {
  return (
    <main>
      {/* CARROSSEL ??? */}
      <h2>Vantagens do Fala Cidadão</h2>
      <div className="container justify-content-center  align-items-center" />
      <div className='row'>
        <div className="card">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title text-body font-weight-bold">Reduzir gastos com as documentações</h6>
            <p className="card-text">Com o Fala Cidadão, o gasto em documentações em papel será reduzido, deixando o processo de
              reclamação do cidadão mais tecnológico e atual.</p>
          </div>
        </div>
      </div>

      <div className="container justify-content-center  align-items-center" />
      <div className='row'>
        <div className="card">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title text-body font-weight-bold">Reduzir tempo de processo da solicitação</h6>
            <p className="card-text">Além do gasto com a documentação, o tempo de duração do projeto também será reduzido,
              já que tudo poderá ser feito através do computador ou celular do cidadão.</p>
          </div>
        </div>
      </div>

      <div className="container justify-content-center  align-items-center" />
      <div className='row'>
        <div className="card">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title text-body font-weight-bold">Amenta a credibilidade da informação</h6>
            <p className="card-text">As informações dadas serão validadas de forma mais segura, de maneira que a credibilidade
              da
              informação do cidadão seja de maior credibilidade, evitando que haja informações falsas.</p>
          </div>
        </div>
      </div>



    </main>
  )
}
