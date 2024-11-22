import React from "react";
import "./CardSix.css";
import { images } from "../../Image/Allimage";

// import sneakerIcon from "./sneaker.svg"; // Adjust the path as needed

function CardSix() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row  my-5">
        <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center"> <img
              src={images.about1}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">StockX Verified</h3>
            <p className="Six text-center">
              Every item sold goes through our proprietary multi-step
              verification process with our team of verification experts.
            </p>
          <p className="text-center"><a href="#" className="">
              Learn More + + + + +
            </a></p>  
          </div>
          <div className="col-md-4 px-3 ">
            <div className=" d-flex justify-content-center"> <img
              src={images.about2}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">Transparent Pricing</h3>
            <p className="Six text-center">
            Our real-time marketplace works just like the stock market –  allowing you to buy and sell the most coveted items at their true market price.
            </p>
          
          </div>
          
          <div className="col-md-4 px-3 ">
            <div className=" d-flex justify-content-center"> <img
              src={images.about3}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">Global Access</h3>
            <p className="Six text-center">
            Whether it’s pre-release, regionally limited, or “sold out” – our millions of customers from over 200 countries allow you to easily secure those hard-to-find, coveted items.            </p>
          
          </div>
          <div className="col-md-4 ">
            <div className=" d-flex justify-content-center"> <img
              src={images.about5}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">No BS</h3>
            <p className="Six text-center">
            No chargebacks, no taking photos, no writing catchy descriptions, and no dealing with rogue buyers or sellers. We handle everything to make sure you can buy and sell with confidence
            </p>
            
          </div>
          <div className="col-md-4 ">
            <div className=" d-flex justify-content-center"> <img
              src={images.about5}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">Secure</h3>
            <p className="Six text-center">
            Preserving the integrity of our marketplace means staying a step ahead. Our security and fraud systems, powered by our world class partners, have your personal information covered 24/7.
            </p>
          
          </div>
          <div className="col-md-4 ">
            <div className=" d-flex justify-content-center"> <img
              src={images.about6}
              alt="Shoe Icon"
              className="custom-icon img-fluid"
            /></div>
           
            <h3 className="mt-3 text-center">No BS</h3>
            <p className="Six text-center">
            Thanks to our Help Center, Chatbot, and dedicated global-support staff, you can be sure that we are always available to answer any and every question regarding our marketplace.            </p>
            
          </div>

          
          
        </div>
      </div>
    </div>
  );
}

export default CardSix;
