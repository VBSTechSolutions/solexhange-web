import React from "react";

function Customre() {
  return (
    <div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 text-center p-4">
            <div>
              <h3>Customer Service Hours</h3>
              <h6>Live Chat</h6>
              <p>
                Monday-Friday: 9am - 9pm ET
                <br />
                Saturday-Sunday: 10am - 6pm ET
              </p>
              <h6>Phone</h6>
              <p>
                Monday-Friday: 9am - 9pm ET
               
              </p>
              <h6>Email</h6>
              <p>
              Submit 24/7
               
              </p>
            </div>
          </div>
          <div class="col-lg-6 text-center p-4">
            <div>
              <h3>Need Help? Start Here</h3>
              <p className="provide">
                Provide us with a few details, and we will guide you to the
                right solution. Contact options include live chat, phone, or
                email if necessary.
              </p>
              <button type="button" className="btn  p-2 fs-5 bg-dark text-white " style={{borderRadius :"0px"}}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customre;
