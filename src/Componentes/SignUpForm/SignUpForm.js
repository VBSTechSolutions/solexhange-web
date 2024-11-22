import React from "react";
import './SignUpForm.css';
function SignUpForm() {
  return (
    <div className="container">
      <div
        className=" row d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#f9f9f9" }}
      >
        <div
          className="col-lg-4  col-sm-6 col-md-6 p-4 shadow"
          
        >
          <div className="card-body  ">
            <ul className="nav nav-tabs justify-content-center ">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Log In
                </a>
              </li>
            </ul>
            <form className="mt-4 ">
              <h4 className="">Sign Up</h4>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address*"
                  required
                />
              </div>
              <div className="form-group position-relative">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password*"
                  required
                />
                <span
                  className="position-absolute"
                  style={{ right: "10px", top: "10px", cursor: "pointer" }}
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/invisible.png"
                    alt="toggle visibility"
                  />
                </span>
                <small className="form-text">
                  At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
                </small>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I have read and agree to the{" "}
                  <a href="#" className="text-dark font-weight-bold">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-dark font-weight-bold">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-black btn-block"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "0",
                }}
              >
                Sign Up
              </button>
              <div
                className="divider text-center my-3"
                style={{ fontSize: "0.9rem", color: "#6c757d" }}
              >
                <span
                  style={{
                    borderTop: "1px solid #ddd",
                    display: "inline-block",
                    width: "45%",
                  }}
                ></span>
                <span className="px-2">OR</span>
                <span
                  style={{
                    borderTop: "1px solid #ddd",
                    display: "inline-block",
                    width: "45%",
                  }}
                ></span>
              </div>
              <p className="text-center">Sign up with</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
