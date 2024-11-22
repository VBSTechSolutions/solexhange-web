import React from "react";
import "./Carsoyl.css";
import { images } from "../../Image/Allimage";

function Carsoul() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* Left Banner */}
        <div className="col-md-4">
          <div className="">
            <img src={images.Banner3} className=" banner" alt="Left Banner" />
            
          </div>
        </div>

        {/* Right Banner */}
        <div className="col-md-8">
          <div className="">
            <img src={images.Banner4} className=" banner RightBanner " alt="Right Banner" />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carsoul;
