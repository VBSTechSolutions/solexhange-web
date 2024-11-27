import React from "react";
import { images } from "../../Image/Allimage";
import './News.css'

function New() {
  return (
    <div>
      <div>
        <div className="container">
          <div className=" mb-3">
            <div className="row ">
              <div className="col-md-7 pt-5">
             
                  {/* Fixed typo in 'src' */}
                  <img src={images.news1} alt="Nike Kobe Shoes" className="img-fluid h-100" />
               
              </div>
              <div className="col-md-5 ">
              <h5 className="card-title newsheading">Buyer's </h5>
              <h5 className="card-title newsheading"> Guide: Nike </h5>

              <h5 className="card-title newsheading"> Kobe Shoes</h5>



                <div className="pt-5 pe-5 ">
                  
                  <p className="newspargarpha">
                    Nike and Kobe Bryant had a partnership unlike any other. We
                    go into Kobe's sneaker journey and what's next to come from
                    the Swoosh in our Nike Kobe Shoes Buyer's Guide.
                  </p>
                  <p className="card-text">
                   
                  </p>
                </div>
                <div>
                <button type="button " className="btn btn-dark btn-lg mt-5 news_btn d-flex p-2">
                <p className="m-0">Read more
                  </p>       <p className="m-0">
                        ++++++
                      </p>
                    </button>
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
