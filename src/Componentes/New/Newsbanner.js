import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newsbanner.css"; // Add CSS here or import your styles
import { imager } from "../../AboutImage/Allimage";
const Newsbanner = () => {
  const slides = [
    {
      image: imager.Shoes1,
      title: "The Buyer's Guide: Yeezy Slides",
    },
    {
      image: imager.Shoes2,
      title: "The Buyer's Guide: Yeezy Boost 350 V2",
    },
    {
      image:imager.Shoes6,
      title: "The Buyer's Guide: Vans",
    },
    {
      image: imager.Shoes8,
      title: "The Buyer's Guide: Nike Air Force 1",
    },
    {
      image: imager.Shoes7,
      title: "The Buyer's Guide: Converse Chuck 70",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="row slick-slider row slick-initialized">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item ">
            <div >
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="carousel-image"
              />
              <div className="overlay">
                <h3 className="overlay-title">{slide.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow next nexts text-dark" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev nexts text-dark" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default Newsbanner;
