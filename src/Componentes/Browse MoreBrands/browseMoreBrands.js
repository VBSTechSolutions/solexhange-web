import React from "react";
import "./MoreBrand.css";
import { images } from "../../Image/Allimage";
function BrowseMoreBrands() {
  return (
    <div>
      <div className="container">
        <h5>Browse More Brands</h5>
        <div className="scroll-container row">
        <div className="col-sm-3 ">
            <img
              src={images.cards}
              className="card-img-top Brand"
              alt="Brand"
            />
          </div>
          <div className="col-sm-3 ">
            <img
              src={images.cards}
              className="card-img-top Brand"
              alt="Brand"
            />
          </div>
          <div className="col-sm-3 ">
            <img
              src={images.cards}
              className="card-img-top Brand"
              alt="Brand"
            />
          </div>
          <div className="col-sm-3 ">
            <img
              src={images.cards}
              className="card-img-top Brand"
              alt="Brand"
            />
          </div>
          {/* <div className="col-lg-3">
            <img
              src={images.cards}
              className="card-img-top Brand"
              alt="Brand"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default BrowseMoreBrands;