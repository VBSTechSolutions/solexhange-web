import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newsbanner.css"; 
import { imager } from "../../AboutImage/Allimage";

const Newsbanner = () => {
  const slides = [
    { image: imager.Shoes5, title: "Red Tape" },
    { image: imager.Shoes9, title: "Air" },
    { image: imager.Shoes6, title: "Puma" },
    { image: imager.Shoes7, title: "Nike" },
    { image: imager.Shoes5, title: "Jordan" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container mt-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide.image} alt={`slide-${index}`} className="carousel-image" />
            <div className="overlay">
              <h3 className="overlay-title">{slide.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <div className="slick-arrow next me-5" onClick={onClick}>
    <i className="fa fa-chevron-right"></i>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev " onClick={onClick}>
    <i className="fa fa-chevron-left "></i>
  </div>
);

export default Newsbanner;
  