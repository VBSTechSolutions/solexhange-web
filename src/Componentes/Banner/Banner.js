import React from 'react';
import './Banner.css'
import { images } from "../../Image/Allimage";

function Banner() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active p-3">
            <img src={images.Banner1} className="d-block w-100 slider" alt="Slide 1" />
          </div>
          <div className="carousel-item p-3">
            <img src={images.Banner2} className="d-block w-100 slider" alt="Slide 2" />
          </div>
          {/* <div className="carousel-item">
            <img src={images.Banner2} className="d-block w-100" alt="Slide 3" />
          </div> */}
        </div>
        <button
          className="carousel-control-prev  "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
         <div className='icones'> <span className="carousel-control-prev-icon" aria-hidden="true"></span></div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
        
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
        <div className='icones'><span className="carousel-control-next-icon" aria-hidden="true"></span></div> 
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
