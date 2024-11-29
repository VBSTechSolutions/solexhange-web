import React from "react";
import { images } from "../../Image/Allimage"; // Assuming this contains image imports

function Newtow() {
  return (
    <div className="container-fluid conteres ">
      
        <div className="row">
          <div className="col-md-6 p-0">
            {/* Replace images.example with the correct image from your images object */}
            <img
              src={images.news2}
              className="img-fluid new2-imge "
              alt="Card example"
            />
          </div>
          <div className="col-md-6 girdidflex bg-dark text-white">
            <div className="ps-5  ms-5 magrinen pt-5 pb-5">
              <h1 className="newsheading">Best Men's</h1>
              <h1 className="newsheading">Jordan Shoe</h1>
              <h1 className="newsheading"></h1>

              <h1 className="newsheading">Deals on</h1>
              <p className="newspargarpha_tow pe-5 ">
                This is a wider card with supporting text below as a natural
               content. This content is a little bit
                longer.
              </p>
              <button type="button " className="btn justify-content-center rounded-0  btn-dark bg-white text-dark w-50   d-flex p-2">
                <p className="m-0 fw-bold">Read more
                  </p>       
                    </button>
            </div>
           
          </div>
        </div>
      
    </div>
  );
}

export default Newtow;
