import React from "react";
import './MoreBrand.css'
import { images } from "../../Image/Allimage";

function BrowseMoreBrands() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h5>
          Browse More Brands
          </h5>
          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>

          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <img src={images.cards} className="card-img-top Brand" alt="Brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseMoreBrands;
