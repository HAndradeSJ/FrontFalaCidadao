'use client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'

import Image from 'next/image'
import Indaia1 from 'images/Indaia1.png'
import Indaia2 from 'images/Indaia2.jpg'
import Indaiatuba from 'images/indaiatuba1.jpeg'


export default function CarouselComponent() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-#hero-carouselcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <Image src={Indaia1} className="d-block w-100 c-img" alt="Slide 1" style={{width: '100%', height:'40rem'}}/>
          <div className="carousel-caption top-0 mt-4">
          </div>
        </div>

        <div className="carousel-item c-item">
          <Image src={Indaia2} className="d-block w-100 c-img" alt="Slide 2" style={{width: '100%', height:'40rem'}}/>
          <div className="carousel-caption top-0 mt-4">
          </div>
        </div>
        <div className="carousel-item c-item">
          <Image src={Indaiatuba} className="d-block w-100 c-img" alt="Slide 3" style={{width: '100%', height:'40rem'}}/>
          <div className="carousel-caption top-0 mt-4">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>

  );
};
