import React from 'react';
import { images } from '../../Image/Allimage'; // Assuming this contains image imports

function Newtow() {
  return (
    <div className='container-fluid'>
      <div className="" >
        <div className="row ">
          <div className="col-md-6 ">
            {/* Replace images.example with the correct image from your images object */}
            <img src={images.news2} className="img-fluid new2-imge " alt="Card example" />
          </div>
          <div className="col-md-6 p-5 bg-dark text-white">
            <div className="ps-5">
              <h1 className='newsheading'>
              Best Men's
              </h1>
              <h1 className='newsheading'>
             Jordan Shoe 
              </h1>
              <h1 className='newsheading'>
          
              </h1>

               <h1 className='newsheading'>
               Deals on 
              </h1>
              <p className="">
                This is a wider card with supporting text below as a natural lead-in to additional content. 
                This content is a little bit longer.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newtow;
