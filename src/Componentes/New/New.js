import React from "react";
import { imager } from "../../AboutImage/Allimage";

function New() {
  return (
    <div>
      <div>
        <div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-7">
                <div>
                  {/* Fixed typo in 'src' */}
                  <img src={imager.Shoes3} alt="Nike Kobe Shoes" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">Buyer's Guide: Nike Kobe Shoes</h5>
                  <p className="card-text">
                    Nike and Kobe Bryant had a partnership unlike any other. We
                    go into Kobe's sneaker journey and what's next to come from
                    the Swoosh in our Nike Kobe Shoes Buyer's Guide.
                  </p>
                  <p className="card-text">
                    <button type="button" className="btn btn-dark btn-lg">
                      Read more
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
