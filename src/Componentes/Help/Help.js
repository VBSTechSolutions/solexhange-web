import React from "react";
import { images } from "../../Image/Allimage";
import "./Help.css";

function Help() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row  my-5 justify-content-center">
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes ">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M42.91 17.71H6.92004V40.25H42.91V17.71Z"
                  fill="#D4D1C7"
                ></path>
                <path
                  d="M29.63 17.39H20.36V24.95H29.63V17.39Z"
                  fill="black"
                ></path>
                <path
                  d="M27.79 9.21002H22.21L20.36 17.39H29.64L27.79 9.21002Z"
                  fill="black"
                ></path>
                <path
                  d="M37.21 33.78H29.64V36.03H37.21V33.78Z"
                  fill="#006340"
                ></path>
                <path
                  d="M39.45 7.5H10.55L5.89001 17.71V19.03V42.5H44.11V19.03V17.71L39.45 7.5ZM12.14 9.75H37.86L41.4 16.78H8.61001L12.14 9.75ZM41.86 40.25H8.14002V19.1H41.86V40.25Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Buying on Soleexhange</h3>
            <p className="Six text-center">
              Bids, Buy Now, how to pay and deliveries
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              {" "}
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M44.06 41.65H5.83002V20.18H44.06V41.65ZM8.08002 39.4H41.81V22.43H8.08002V39.4Z"
                  fill="black"
                ></path>
                <path
                  d="M24.94 37.09C28.3476 37.09 31.11 34.3276 31.11 30.92C31.11 27.5124 28.3476 24.75 24.94 24.75C21.5324 24.75 18.77 27.5124 18.77 30.92C18.77 34.3276 21.5324 37.09 24.94 37.09Z"
                  fill="#016341"
                ></path>
                <path
                  d="M39.91 14.26H9.98999V16.51H39.91V14.26Z"
                  fill="#D5D2C7"
                ></path>
                <path
                  d="M36.87 8.34998H13.01V10.6H36.87V8.34998Z"
                  fill="#D5D2C7"
                ></path>
                <path
                  d="M43.04 29.35C38.61 29.35 35 25.74 35 21.31H37.48C37.48 24.38 39.97 26.87 43.04 26.87V29.35Z"
                  fill="black"
                ></path>
                <path
                  d="M37.48 40.53H35C35 36.1 38.61 32.49 43.04 32.49V34.97C39.98 34.97 37.48 37.46 37.48 40.53Z"
                  fill="black"
                ></path>
                <path
                  d="M6.96002 29.35V26.87C10.03 26.87 12.52 24.38 12.52 21.31H15C15 25.74 11.39 29.35 6.96002 29.35Z"
                  fill="black"
                ></path>
                <path
                  d="M15 40.53H12.52C12.52 37.46 10.02 34.97 6.96002 34.97V32.49C11.39 32.49 15 36.09 15 40.53Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Selling on Soleexhange</h3>
            <p className="Six text-center">
              Asks, Sell Now, shipping, verification and payment info
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M25 38.71C32.5718 38.71 38.71 32.5718 38.71 25C38.71 17.4282 32.5718 11.29 25 11.29C17.4282 11.29 11.29 17.4282 11.29 25C11.29 32.5718 17.4282 38.71 25 38.71Z"
                  fill="#D5D2C7"
                ></path>
                <path
                  fill="#016341"
                  d="M27.69 28.42C29.66 27.43 31.02 25.41 31.02 23.06C31.02 19.74 28.33 17.04 25 17.04C21.68 17.04 18.98 19.73 18.98 23.06C18.98 25.41 20.34 27.43 22.31 28.42C19.08 29.21 16.41 31.41 14.95 34.31C17.45 37.01 21.02 38.71 24.99 38.71C28.96 38.71 32.53 37.01 35.03 34.31C33.59 31.41 30.92 29.21 27.69 28.42Z"
                ></path>
                <path
                  fill="black"
                  d="M25 44.12C14.45 44.12 5.88 35.55 5.88 25C5.88 14.45 14.45 5.88 25 5.88C35.55 5.88 44.12 14.46 44.12 25C44.12 35.55 35.55 44.12 25 44.12ZM25 8.12C15.7 8.12 8.12 15.7 8.12 25C8.12 34.3 15.7 41.88 25 41.88C34.3 41.88 41.88 34.3 41.88 25C41.88 15.7 34.3 8.12 25 8.12Z"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">My Account</h3>
            <p className="Six text-center">
              Notifications and settings, Ask and Bid management{" "}
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M42.7999 19.2L37.0999 16.2L36 9.79999L29.6 10.7L25 6.29999L20.4 10.8L14 9.79999L12.9 16.2L7.19995 19.2L9.99995 25L7.19995 30.8L12.9 33.8L14 40.2L20.4 39.3L25 43.8L29.6 39.3L36 40.2L37.0999 33.8L42.7999 30.8L40 25L42.7999 19.2ZM25 36.3C18.8 36.3 13.7 31.2 13.7 25C13.7 18.8 18.8 13.7 25 13.7C31.2 13.7 36.2999 18.8 36.2999 25C36.2999 31.2 31.2 36.3 25 36.3Z"
                  fill="#006340"
                ></path>
                <path
                  d="M22.9 31.1L17.2 25.4L18.7999 23.8L22.7999 27.9L31.1 18.8L32.7999 20.4L22.9 31.1Z"
                  fill="#006340"
                ></path>
                <path
                  d="M25 45.3L20 40.4L13.1 41.4L11.9 34.5L5.69998 31.2L8.69998 25L5.59998 18.7L11.8 15.4L13 8.49998L19.9 9.49998L24.9 4.59998L29.9 9.49998L36.8 8.49998L38 15.4L44.2 18.7L41.3 25L44.4 31.3L38.2 34.6L37 41.5L30.1 40.5L25 45.3ZM20.8 38.1L25 42.2L29.2 38.1L35.1 38.9L36.1 33.1L41.3 30.3L38.7 25L41.3 19.7L36.1 16.9L35.1 11.1L29.2 11.9L25 7.79998L20.8 11.9L14.9 11.1L13.9 16.9L8.69998 19.7L11.3 25L8.69998 30.3L13.9 33.1L14.9 38.9L20.8 38.1Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Verification</h3>
            <p className="Six text-center">
              Learn how Soleexhange ensures our products are legit{" "}
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M25.9 42.9C35.7859 42.9 43.8 34.8859 43.8 25C43.8 15.1141 35.7859 7.09998 25.9 7.09998C16.0141 7.09998 8 15.1141 8 25C8 34.8859 16.0141 42.9 25.9 42.9Z"
                  fill="#D4D1C7"
                ></path>
                <path
                  d="M25.8999 44C15.3999 44 6.8999 35.5 6.8999 25C6.8999 14.5 15.3999 6 25.8999 6C36.3999 6 44.8999 14.5 44.8999 25C44.8999 35.5 36.3999 44 25.8999 44ZM25.8999 8.2C16.5999 8.2 9.0999 15.8 9.0999 25C9.0999 34.2 16.5999 41.8 25.8999 41.8C35.1999 41.8 42.5999 34.2 42.5999 25C42.5999 15.8 35.0999 8.2 25.8999 8.2Z"
                  fill="black"
                ></path>
                <path
                  d="M29.9001 25C27.9001 26.1 27.1001 26.8 27.1001 29V29.2H23.0001V28.9C23.0001 25.9 24.1001 24.6 26.2001 23.4C28.1001 22.3 29.4001 21.3 29.4001 19.7C29.4001 18.1 27.8001 17.1 26.2001 17.1C24.0001 17.1 22.3001 18.3 22.2001 21.2H18.1001C18.1001 16.8 21.6001 14 26.2001 14C29.9001 14 33.5001 15.7 33.5001 19.5C33.6001 22.3 31.6001 24 29.9001 25ZM22.8001 31.7H27.2001V36.2H22.8001V31.7Z"
                  fill="#006340"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Product Guidelines</h3>
            <p className="Six text-center">
              What's for sale, quality guidelines and shipping specifics
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M43.3001 13.7H6.6001V36.6H43.3001V13.7Z"
                  fill="#D4D1C7"
                ></path>
                <path
                  d="M44.0999 38.1H5.8999V12.1H44.1999V38.1H44.0999ZM8.0999 35.8H41.8999V14.4H8.0999V35.8Z"
                  fill="black"
                ></path>
                <path d="M38 28.5H23.3V30.7H38V28.5Z" fill="#006340"></path>
                <path
                  d="M44.1999 18.2H5.8999V23.1H44.1999V18.2Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Payments</h3>
            <p className="Six text-center">
              Fees, currencies, taxes and payout management
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>

          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path d="M31.26 11H7.24V32.09H31.26V11Z" fill="#D5D2C7"></path>
                <path
                  d="M31.26 33.21H6.11V9.87H32.38V32.25H30.13V12.12H8.36V30.96H31.26V33.21Z"
                  fill="black"
                ></path>
                <path
                  d="M43.89 33.21H31.26V30.96H41.64V23.7L36.93 17.21H31.26V14.96H38.08L43.89 22.97V33.21Z"
                  fill="black"
                ></path>
                <path
                  d="M15.99 39C19.0276 39 21.49 36.5376 21.49 33.5C21.49 30.4624 19.0276 28 15.99 28C12.9524 28 10.49 30.4624 10.49 33.5C10.49 36.5376 12.9524 39 15.99 39Z"
                  fill="black"
                ></path>
                <path
                  d="M35.76 39C38.7976 39 41.26 36.5376 41.26 33.5C41.26 30.4624 38.7976 28 35.76 28C32.7224 28 30.26 30.4624 30.26 33.5C30.26 36.5376 32.7224 39 35.76 39Z"
                  fill="black"
                ></path>
                <path
                  d="M42.76 22.21H30.88V24.46H42.76V22.21Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Shipping</h3>
            <p className="Six text-center">
              Instructions, options, deadlines and how to track orders
            </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>

          <div className="col-md-4 p-3">
            <div className=" d-flex justify-content-center   widthes">
              <svg
                viewBox="0 0 50 50"
                focusable="false"
                class="chakra-icon css-d4a8zp"
              >
                <path
                  d="M18.8002 31.2L14.7002 27.1C22.7002 5.90001 41.6002 8.40001 41.6002 8.40001C41.6002 8.40001 44.1002 27.3 22.9002 35.2L18.8002 31.2Z"
                  fill="#D4D1C7"
                ></path>
                <path
                  d="M19.1001 36.2C17.2001 38.1 14.5001 38.4 13.1001 36.9C11.6001 35.4 11.9001 32.7 13.8001 30.9C14.0001 30.7 14.3001 30.5 14.5001 30.3C12.6001 29.7 10.7001 30 9.40006 31.3C9.40006 31.3 6.70006 34.1 7.40006 42.6C7.40006 42.6 15.1001 44 18.7001 40.6C20.0001 39.4 20.3001 37.4 19.7001 35.5C19.5001 35.7 19.3001 35.9 19.1001 36.2Z"
                  fill="#006340"
                ></path>
                <path
                  d="M42.6999 8.29998L42.5999 7.39998L41.6999 7.29998C41.5999 7.29998 29.9999 5.89998 20.8999 15L15.3999 14.2L8.3999 21.6L15.0999 23.2C14.4999 24.3 13.9999 25.5 13.4999 26.8L13.1999 27.5L22.4999 36.8L23.1999 36.5C24.4999 36 25.6999 35.5 26.7999 34.9L28.3999 41.7L35.7999 34.7L34.9999 29C44.0999 19.9 42.6999 8.39998 42.6999 8.29998ZM23.0999 33.8L16.0999 26.8C22.6999 9.99998 36.4999 9.39998 40.2999 9.59998C40.4999 13.4 39.8999 27.2 23.0999 33.8Z"
                  fill="black"
                ></path>
                <path
                  d="M26.9001 18C25.5001 19.4 25.5001 21.6 26.9001 22.9C28.3001 24.3 30.5001 24.3 31.8001 22.9C33.2001 21.5 33.2001 19.3 31.8001 18C30.5001 16.7 28.3001 16.7 26.9001 18Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <h3 className="mt-3 text-center">Xpress Ship</h3>
            <p className="Six text-center">Learn more about 3 Day Delivery </p>
            <p className="text-center">
              <a href="#" className="text-decoration-none text-success">
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
