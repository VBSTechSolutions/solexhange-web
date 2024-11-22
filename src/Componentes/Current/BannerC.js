import React from "react";

import "../Current/BannerC.css";
import { images } from "../../Image/Allimage";
function BannerC() {
  return (
    <div className="backgroundblack">
     <div className="container-fluid mb-3 backgroundcolor">
      <div className="row justify-content-between griddisplay ">
        <div className="col-md-6 mt-5  backgroundcolor text-white p-5 paddeing">
          <div className=" py-5 ps-3 pe-2">
            <h1 className="headline--1 mt-1">The Current </h1>{" "}
            <h1 className="headline--1">Culture </h1>{" "}
            <h1 className="headline--1">Marketplace</h1>
            <p className="mt-3">
              Our mission is to provide access to the world’s most coveted items
              in the smartest way possible. Buy and sell the hottest sneakers,
              apparel, electronics, collectibles, trading cards and accessories.
            </p>
          </div>
        </div>

        <div className="col-md-5 py-5  mt-5  " id="one">
          <img
            src={images.Banner6}
            className="img-fluid rounded-start one tow "
            alt="..."
          />
        </div>
        
      </div>
      
    </div>
    <div className=" container backgroundblack py-5">
          <div className=" row justify-content-center">
            <div className="col-lg-4 text-nowrap ps-5 mt-5 verifiv col-md-6 col-sm-6 col-xs-4 ">
            <div>
            <button type="button" className="btn d-flex justify-content-around ms-5 btn-lg   ">
             <span>
             Verification
              </span> <span>+++++</span>  
            </button>

            </div>
            </div>
       <div className="col-lg-4 text-nowrap mt-5 col-md-6 col-sm-6 col-xs-4 ">
       <div>
            <button type="button" className="btn d-flex justify-content-around mrf  btn-lg ">
             <span>
             Buyers
              </span> <span>+++++</span>  
            </button>

            </div>
       </div>
           
          <div className="col-lg-4 text-nowrap mt-5 col-md-6 col-sm-6 col-xs-4 ">
            <div>
            <button type="button" className="btn d-flex justify-content-around mrf  btn-lg ">
             <span>
             Seller
              </span> <span>+++++</span>  
            </button>

            </div>
         
          </div>
            
          </div>
        </div></div>
   

  );
}

export default BannerC;
