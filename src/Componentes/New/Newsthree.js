import React from "react";
import { images } from "../../Image/Allimage";
import './News.css'

function Newsthree() {
  return (
    <div>
      <div>
        <div className="container container-with">
          <div className=" mb-3">
            <div className="row ">
            <div className="col-md-5 ">
              <h5 className="card-title newsheading">What To </h5>
              <h5 className="card-title newsheading"> Know | Air</h5>

              <h5 className="card-title newsheading">Jordan 4 Bred</h5>



                <div className="pt-5 pe-5 ">
                  
                  <p className="newspargarpha">
                  We dive deeper into the new Jordan 4 Bred Reimagined and the history of this fabled colorway.
                  </p>
                  <p className="card-text">
                   
                  </p>
                </div>
                <div>
                <button type="button " className="btn btn-dark btn-lg mt-5 w-50 news_btn d-flex p-2">
                <p className="m-0">Read more
                  </p>     
                    </button>
                </div>
              </div>
              <div className="col-md-7 pt-5">
             
                  {/* Fixed typo in 'src' */}
                  <img src={images.news3} alt="Nike Kobe Shoes" className="img-fluid h-100" />
               
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsthree;
