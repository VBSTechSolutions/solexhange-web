import React, { useState, useEffect } from "react";
import "./Footer.css";
import { images } from "../../Image/Allimage";

function Footer() {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 888);

  // Update the screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 888);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to toggle the dropdown icon
  const toggleDropdownIcon = (event) => {
    const iconDown = event.target.querySelector(".icon-down");
    const iconUp = event.target.querySelector(".icon-up");

    if (iconDown && iconUp) {
      iconDown.classList.toggle("d-none");
      iconUp.classList.toggle("d-none");
    }
  };

  return (
    <div className="blackcolor text-white">
      {/* Conditionally render based on screen size */}
      {isLargeScreen ? (
        <div className="container-xl mt-4 footer2">
          <h2 className="pt-5">Soleexhange. Access the Now.</h2>
          <div className="row py-4 ">
            <div className="col-lg-2 col-md-2">
              <h6>About</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">How It Works</li>
                <li className="text-decoration-none line-gap">Verification</li>
                <li className="text-decoration-none line-gap">Newsroom</li>
                <li className="text-decoration-none line-gap">Company</li>
                <li className="text-decoration-none line-gap">Careers</li>
                <li className="text-decoration-none line-gap">
                  CSoleexhange Reviews
                </li>
                <li className="text-decoration-none line-gap">
                  CGive $10, Get $10
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Help</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">Help Center</li>
                <li className="text-decoration-none line-gap">Contact Us</li>
                <li className="text-decoration-none line-gap">
                  Product Suggestions
                </li>
                <li className="text-decoration-none line-gap">Size Guide</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Sell</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">Selling Guide</li>
                <li className="text-decoration-none line-gap">
                  Professional Tools
                </li>
                <li className="text-decoration-none line-gap">
                  Soleexhange Pro
                </li>
                <li className="text-decoration-none line-gap">Developers</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Air Jordan</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">Air Jordan 1</li>
                <li className="text-decoration-none line-gap">Air Jordan 3</li>
                <li className="text-decoration-none line-gap">Air Jordan 4</li>
                <li className="text-decoration-none line-gap">Air Jordan 11</li>
                <li className="text-decoration-none line-gap">
                  Women's Jordan Shoes
                </li>
                <li className="text-decoration-none line-gap">Air Jordan 5</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Adidas</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">Adidas Samba</li>
                <li className="text-decoration-none line-gap">
                  Adidas Gazelle
                </li>
                <li className="text-decoration-none line-gap">Nike Dunk</li>
                <li className="text-decoration-none line-gap">
                  Adidas Handball Spezial
                </li>
                <li className="text-decoration-none line-gap">Adidas AE</li>
                <li className="text-decoration-none line-gap">Adidas Yeezy</li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>New Balance</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">
                  New Balance 2002R
                </li>
                <li className="text-decoration-none line-gap">
                  Sew Balance 1906R
                </li>
                <li className="text-decoration-none line-gap">
                  New Balance 530
                </li>
                <li className="text-decoration-none line-gap">
                  New Balance 550
                </li>
                <li className="text-decoration-none line-gap">
                  New Balance 9060
                </li>
                <li className="text-decoration-none line-gap">
                  New Balance 990 V1
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <h6>Performance running</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap text-nowrap">
                  Nike Air Zoom Alphafly Next %
                </li>
                <li className="text-decoration-none line-gap">
                  Nike ZoomX Invincible{" "}
                </li>
                <li className="text-decoration-none line-gap">
                  Nike Pegasus 40
                </li>
                <li className="text-decoration-none line-gap">
                  Nike Pegasus 41
                </li>
                <li className="text-decoration-none line-gap">
                  Nike ZoomX Vaporfly Next%
                </li>
                <li className="text-decoration-none line-gap">
                  On Cloudmonster
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Popular Releases</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">
                  AJ1 Retro Low OG SP Travis Scott Canary (Women's)
                </li>
                <li className="text-decoration-none line-gap">
                  Jordan 4 Retro White Thunder
                </li>
                <li className="text-decoration-none line-gap">
                  Jordan 4 Retro SE Paris Olympics Wet Cement
                </li>
                <li className="text-decoration-none line-gap">
                  adidas Yeezy Slide Slate Grey
                </li>
                <li className="text-decoration-none line-gap">
                  ASICS Gel-1130 White Clay Canyon
                </li>

                <li className="text-decoration-none line-gap">
                  Nike Kobe Mamba Mentality Jersey
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6>Apparel</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">Denim Tears</li>
                <li className="text-decoration-none line-gap">
                  Fear of God Essentials
                </li>
                <li className="text-decoration-none line-gap">Nike Apparel</li>
                <li className="text-decoration-none line-gap">Supreme</li>
                <li className="text-decoration-none line-gap">Travis Scott</li>

                <li className="text-decoration-none line-gap">Yeezy</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-2">
              <h6>Accessories</h6>
              <ul className="list-unstyled p-2">
                <li className="text-decoration-none line-gap">
                  Swatch X Omega
                </li>
                <li className="text-decoration-none line-gap">Stanley</li>
                <li className="text-decoration-none line-gap">
                  Designer Sunglasses
                </li>
                <li className="text-decoration-none line-gap">
                  Louis Vuitton Accessories
                </li>
                <li className="text-decoration-none line-gap">
                  Gucci Accessories
                </li>
                <li className="text-decoration-none line-gap">
                  Supreme Accessories
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2">
              <svg
                viewBox="0 0 128 43"
                focusable="false"
                class="chakra-icon css-1a9naxn ms-4"
              >
                <g clip-path="url(#clip0_1347_18305)">
                  <path
                    d="M117.807 1.76797e-05H10.1989C9.80663 1.76797e-05 9.41909 1.76798e-05 9.02789 0.00216768C8.70041 0.00431768 8.37554 0.0105634 8.04492 0.0158202C7.32666 0.0243146 6.61008 0.0878197 5.90143 0.205783C5.19377 0.326315 4.50827 0.553552 3.86813 0.879808C3.22877 1.20882 2.64457 1.63635 2.13672 2.14687C1.62621 2.65595 1.20066 3.24439 0.876427 3.88954C0.551304 4.53341 0.325862 5.22338 0.207889 5.93561C0.0887936 6.64694 0.0247074 7.36648 0.0162054 8.08776C0.00627891 8.41735 0.00523064 8.74804 0 9.07768V33.9255C0.00523064 34.2593 0.00627891 34.5827 0.0162054 34.9166C0.02471 35.6378 0.0887962 36.3573 0.207889 37.0686C0.325536 37.7812 0.550991 38.4716 0.876427 39.1157C1.20051 39.7588 1.62612 40.3448 2.13672 40.8511C2.64265 41.3639 3.22722 41.7917 3.86813 42.1182C4.50827 42.4453 5.19369 42.6739 5.90143 42.7963C6.61021 42.9133 7.32671 42.9769 8.04492 42.9864C8.37554 42.9937 8.70041 42.9979 9.02789 42.9979C9.41908 43 9.80665 43 10.1989 43H117.807C118.191 43 118.582 43 118.966 42.9979C119.292 42.9979 119.627 42.9937 119.953 42.9864C120.669 42.9774 121.385 42.9138 122.092 42.7963C122.802 42.6731 123.49 42.4445 124.133 42.1182C124.773 41.7915 125.357 41.3637 125.863 40.8511C126.372 40.3429 126.799 39.7572 127.127 39.1157C127.45 38.4711 127.673 37.7808 127.789 37.0686C127.908 36.3572 127.975 35.6379 127.987 34.9166C127.992 34.5827 127.992 34.2593 127.992 33.9255C128 33.535 128 33.1466 128 32.7497V10.2514C128 9.85768 128 9.46716 127.992 9.07768C127.992 8.74804 127.992 8.41735 127.987 8.08772C127.975 7.36637 127.908 6.647 127.789 5.93557C127.673 5.22375 127.449 4.53383 127.127 3.8895C126.466 2.59635 125.419 1.54375 124.133 0.879712C123.49 0.554253 122.802 0.327076 122.092 0.205687C121.385 0.0872032 120.669 0.023676 119.953 0.0156697C119.627 0.0104237 119.292 0.00412418 118.966 0.00202793C118.582 -0.00012207 118.191 -0.00012207 117.807 -0.00012207V1.76797e-05Z"
                    fill="#A6A6A6"
                  ></path>
                  <path
                    d="M9.03288 42.0594C8.70697 42.0594 8.38894 42.0552 8.06559 42.0479C7.39575 42.0391 6.72747 41.9805 6.06625 41.8725C5.44968 41.7658 4.8524 41.5673 4.29409 41.2835C3.74091 41.0021 3.23636 40.6331 2.79978 40.1907C2.35687 39.7535 1.98814 39.2464 1.70818 38.6895C1.42513 38.1289 1.22925 37.5281 1.12735 36.908C1.01731 36.2416 0.957773 35.5678 0.949254 34.8923C0.942472 34.6656 0.933594 33.9108 0.933594 33.9108V9.07765C0.933594 9.07765 0.94305 8.33439 0.949307 8.11602C0.957464 7.44166 1.01666 6.76889 1.12637 6.10355C1.22846 5.48168 1.42449 4.87914 1.70769 4.31679C1.98662 3.76028 2.35331 3.25279 2.79354 2.81399C3.23328 2.37103 3.73945 2.00014 4.29357 1.71484C4.85059 1.43199 5.44675 1.23488 6.06206 1.1301C6.72546 1.02106 7.39606 0.962109 8.06822 0.953739L9.0334 0.940613H118.961L119.938 0.954265C120.604 0.962219 121.268 1.02065 121.925 1.12905C122.547 1.23514 123.149 1.43362 123.713 1.71799C124.823 2.29295 125.726 3.20259 126.296 4.31941C126.575 4.87788 126.768 5.47551 126.868 6.092C126.98 6.7628 127.042 7.44086 127.054 8.12075C127.058 8.42519 127.058 8.75221 127.058 9.07765C127.066 9.48078 127.066 9.86448 127.066 10.2513V32.7496C127.066 33.1402 127.066 33.5213 127.058 33.9055C127.058 34.2551 127.058 34.5753 127.053 34.9049C127.041 35.5727 126.98 36.2386 126.871 36.8974C126.771 37.5221 126.576 38.1276 126.293 38.6927C126.011 39.2435 125.644 39.7463 125.207 40.1823C124.77 40.6271 124.264 40.9983 123.71 41.2815C123.148 41.5674 122.546 41.7667 121.925 41.8725C121.264 41.9811 120.596 42.0397 119.926 42.0479C119.613 42.0552 119.285 42.0594 118.966 42.0594L117.807 42.0615L9.03288 42.0594Z"
                    fill="black"
                  ></path>
                  <path
                    d="M26.4941 21.8232C26.5056 20.926 26.7428 20.0462 27.1835 19.2658C27.6242 18.4854 28.2542 17.8297 29.0148 17.3598C28.5316 16.6662 27.8942 16.0955 27.1531 15.6928C26.412 15.2902 25.5877 15.0668 24.7457 15.0403C22.9494 14.8508 21.2081 16.1205 20.2928 16.1205C19.3597 16.1205 17.9505 15.0591 16.4329 15.0905C15.4513 15.1223 14.4946 15.4092 13.6562 15.9231C12.8177 16.437 12.126 17.1605 11.6484 18.0229C9.57966 21.6225 11.1227 26.9126 13.1044 29.8222C14.0959 31.247 15.2546 32.8384 16.7708 32.782C18.2545 32.7202 18.8086 31.8312 20.5996 31.8312C22.3739 31.8312 22.8938 32.782 24.4407 32.7461C26.0328 32.7202 27.0358 31.315 27.9925 29.8768C28.7049 28.8616 29.2531 27.7396 29.6167 26.5524C28.6918 26.1592 27.9025 25.5011 27.3472 24.6601C26.7919 23.8192 26.4952 22.8325 26.4941 21.8232Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.5723 13.1267C24.4404 12.0794 24.868 10.7333 24.7645 9.3743C23.4383 9.51429 22.2132 10.1513 21.3335 11.1584C20.9033 11.6504 20.5739 12.2227 20.3639 12.8428C20.154 13.4628 20.0678 14.1183 20.1101 14.7719C20.7734 14.7787 21.4297 14.6342 22.0294 14.3493C22.6291 14.0643 23.1567 13.6463 23.5723 13.1267Z"
                    fill="white"
                  ></path>
                  <path
                    d="M45.2488 29.1751H40.1856L38.9697 32.7833H36.8252L41.6209 19.434H43.849L48.6447 32.7833H46.4636L45.2488 29.1751ZM40.71 27.5101H44.7234L42.7449 21.6543H42.6896L40.71 27.5101Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.0023 27.9175C59.0023 30.942 57.3916 32.8851 54.9608 32.8851C54.345 32.9175 53.7327 32.775 53.1938 32.4738C52.6549 32.1727 52.2113 31.7251 51.9137 31.1823H51.8677V36.003H49.8799V23.0506H51.8041V24.6694H51.8406C52.1518 24.1292 52.6029 23.684 53.1459 23.381C53.6889 23.078 54.3035 22.9286 54.9242 22.9487C57.3821 22.9487 59.0023 24.9014 59.0023 27.9175ZM56.9591 27.9175C56.9591 25.947 55.9458 24.6515 54.3999 24.6515C52.881 24.6515 51.8594 25.9743 51.8594 27.9175C51.8594 29.8785 52.881 31.1918 54.3999 31.1918C55.9459 31.1918 56.9591 29.9058 56.9591 27.9175Z"
                    fill="white"
                  ></path>
                  <path
                    d="M69.6605 27.9175C69.6605 30.9419 68.0498 32.8851 65.619 32.8851C65.0033 32.9175 64.3909 32.7749 63.852 32.4738C63.3131 32.1726 62.8695 31.7251 62.5719 31.1823H62.5259V36.003H60.5381V23.0505H62.4622V24.6693H62.4988C62.81 24.1292 63.2611 23.6839 63.8041 23.381C64.3471 23.078 64.9617 22.9286 65.5824 22.9487C68.0404 22.9487 69.6605 24.9014 69.6605 27.9175ZM67.6173 27.9175C67.6173 25.947 66.604 24.6515 65.0581 24.6515C63.5392 24.6515 62.5176 25.9743 62.5176 27.9175C62.5176 29.8785 63.5392 31.1918 65.0581 31.1918C66.6041 31.1918 67.6173 29.9058 67.6173 27.9175H67.6173Z"
                    fill="white"
                  ></path>
                  <path
                    d="M76.7058 29.0638C76.8531 30.3876 78.1327 31.2568 79.8814 31.2568C81.5569 31.2568 82.7623 30.3876 82.7623 29.194C82.7623 28.1578 82.0353 27.5374 80.3138 27.1122L78.5923 26.6954C76.1532 26.1033 75.0209 24.9569 75.0209 23.0967C75.0209 20.7934 77.0181 19.2114 79.8542 19.2114C82.661 19.2114 84.5851 20.7934 84.6499 23.0967H82.6432C82.5231 21.7645 81.4273 20.9603 79.826 20.9603C78.2246 20.9603 77.1288 21.7739 77.1288 22.9581C77.1288 23.9019 77.8287 24.4572 79.5408 24.8824L81.0043 25.2435C83.7296 25.8912 84.8619 26.9915 84.8619 28.9441C84.8619 31.4416 82.8824 33.0058 79.734 33.0058C76.7883 33.0058 74.7994 31.4783 74.6709 29.0637L76.7058 29.0638Z"
                    fill="white"
                  ></path>
                  <path
                    d="M89.1515 20.7473V23.0506H90.9931V24.6326H89.1515V29.9982C89.1515 30.8317 89.5202 31.2201 90.3298 31.2201C90.5484 31.2163 90.7667 31.2009 90.9837 31.1739V32.7465C90.6197 32.8149 90.2497 32.8458 89.8795 32.8389C87.9188 32.8389 87.1542 32.0988 87.1542 30.2112V24.6326H85.7461V23.0506H87.1542V20.7473H89.1515Z"
                    fill="white"
                  ></path>
                  <path
                    d="M92.0605 27.9174C92.0605 24.8552 93.8551 22.9309 96.6536 22.9309C99.4615 22.9309 101.248 24.8551 101.248 27.9174C101.248 30.9881 99.4709 32.904 96.6536 32.904C93.8373 32.904 92.0605 30.9881 92.0605 27.9174ZM99.2223 27.9174C99.2223 25.8168 98.2644 24.577 96.6536 24.577C95.0428 24.577 94.086 25.8262 94.086 27.9174C94.086 30.0265 95.0428 31.2569 96.6536 31.2569C98.2644 31.2569 99.2222 30.0265 99.2222 27.9174H99.2223Z"
                    fill="white"
                  ></path>
                  <path
                    d="M102.886 23.0506H104.782V24.7071H104.828C104.956 24.1898 105.258 23.7325 105.682 23.4123C106.106 23.0921 106.627 22.9284 107.157 22.9487C107.386 22.9479 107.615 22.9729 107.838 23.0233V24.8919C107.549 24.8031 107.247 24.7623 106.945 24.7712C106.656 24.7594 106.368 24.8106 106.101 24.9212C105.834 25.0318 105.594 25.1992 105.397 25.4119C105.2 25.6247 105.051 25.8777 104.961 26.1536C104.871 26.4295 104.841 26.7218 104.874 27.0104V32.7833H102.886L102.886 23.0506Z"
                    fill="white"
                  ></path>
                  <path
                    d="M117.003 29.9247C116.736 31.6915 115.024 32.904 112.833 32.904C110.016 32.904 108.268 31.007 108.268 27.9636C108.268 24.9108 110.026 22.9309 112.75 22.9309C115.429 22.9309 117.114 24.7806 117.114 27.7316V28.4161H110.274V28.5368C110.243 28.895 110.287 29.2559 110.405 29.5954C110.523 29.9349 110.711 30.2454 110.958 30.5061C111.204 30.7668 111.503 30.9719 111.834 31.1077C112.166 31.2435 112.522 31.3068 112.879 31.2936C113.349 31.3378 113.821 31.2285 114.224 30.9819C114.627 30.7352 114.939 30.3644 115.116 29.9247L117.003 29.9247ZM110.284 27.0199H115.125C115.143 26.6978 115.095 26.3755 114.983 26.0732C114.871 25.7709 114.698 25.4951 114.475 25.2632C114.252 25.0312 113.983 24.8481 113.686 24.7253C113.39 24.6026 113.071 24.5427 112.75 24.5497C112.426 24.5477 112.105 24.6102 111.806 24.7336C111.506 24.8569 111.234 25.0387 111.005 25.2683C110.775 25.498 110.594 25.771 110.47 26.0716C110.346 26.3723 110.283 26.6945 110.284 27.0199V27.0199Z"
                    fill="white"
                  ></path>
                  <path
                    d="M40.4617 9.38582C40.8784 9.35576 41.2966 9.41904 41.6861 9.57108C42.0756 9.72312 42.4266 9.96013 42.7139 10.265C43.0012 10.5699 43.2176 10.9351 43.3474 11.3342C43.4773 11.7333 43.5174 12.1564 43.4649 12.573C43.4649 14.6222 42.3628 15.8002 40.4617 15.8002H38.1562V9.38582H40.4617ZM39.1476 14.893H40.3509C40.6487 14.9109 40.9467 14.8619 41.2233 14.7494C41.4998 14.6369 41.748 14.4639 41.9496 14.2429C42.1512 14.022 42.3013 13.7586 42.3888 13.472C42.4764 13.1853 42.4993 12.8827 42.4558 12.5861C42.4961 12.2906 42.4709 11.9899 42.382 11.7054C42.2931 11.4209 42.1427 11.1596 41.9415 10.9404C41.7403 10.7212 41.4934 10.5494 41.2184 10.4373C40.9434 10.3253 40.6472 10.2757 40.3509 10.2923H39.1476V14.893Z"
                    fill="white"
                  ></path>
                  <path
                    d="M44.585 13.3777C44.5547 13.0596 44.5909 12.7386 44.6913 12.4354C44.7916 12.1321 44.954 11.8534 45.1678 11.6169C45.3817 11.3804 45.6424 11.1914 45.9332 11.0621C46.224 10.9328 46.5384 10.8661 46.8564 10.8661C47.1744 10.8661 47.4889 10.9328 47.7797 11.0621C48.0704 11.1914 48.3311 11.3804 48.545 11.6169C48.7589 11.8534 48.9212 12.1321 49.0216 12.4354C49.122 12.7386 49.1582 13.0596 49.1279 13.3777C49.1587 13.6961 49.123 14.0175 49.0229 14.3212C48.9227 14.6249 48.7605 14.9042 48.5466 15.1412C48.3327 15.3781 48.0718 15.5675 47.7807 15.6971C47.4896 15.8266 47.1748 15.8936 46.8564 15.8936C46.5381 15.8936 46.2232 15.8266 45.9322 15.6971C45.6411 15.5675 45.3802 15.3781 45.1663 15.1412C44.9523 14.9042 44.7901 14.6249 44.69 14.3212C44.5899 14.0175 44.5541 13.6961 44.585 13.3777ZM48.1501 13.3777C48.1501 12.3284 47.6811 11.7148 46.858 11.7148C46.0317 11.7148 45.5669 12.3284 45.5669 13.3777C45.5669 14.4354 46.0318 15.0442 46.858 15.0442C47.6811 15.0442 48.1502 14.4311 48.1502 13.3777H48.1501Z"
                    fill="white"
                  ></path>
                  <path
                    d="M55.166 15.8001H54.1799L53.1844 12.2349H53.1092L52.1178 15.8001H51.1412L49.8135 10.9594H50.7776L51.6405 14.6531H51.7115L52.7018 10.9594H53.6137L54.604 14.6531H54.6792L55.5378 10.9594H56.4884L55.166 15.8001Z"
                    fill="white"
                  ></path>
                  <path
                    d="M57.6055 10.9594H58.5205V11.7284H58.5916C58.7121 11.4522 58.9153 11.2207 59.173 11.0661C59.4306 10.9115 59.7298 10.8415 60.0289 10.866C60.2633 10.8483 60.4986 10.8838 60.7175 10.9699C60.9363 11.056 61.1331 11.1905 61.2932 11.3634C61.4533 11.5363 61.5726 11.7432 61.6424 11.9687C61.7121 12.1943 61.7305 12.4327 61.6961 12.6664V15.8H60.7455V12.9063C60.7455 12.1284 60.4092 11.7415 59.7061 11.7415C59.547 11.7341 59.3882 11.7613 59.2405 11.8213C59.0928 11.8813 58.9598 11.9727 58.8506 12.0892C58.7413 12.2057 58.6585 12.3446 58.6076 12.4963C58.5568 12.6481 58.5392 12.809 58.556 12.9682V15.8001H57.6055L57.6055 10.9594Z"
                    fill="white"
                  ></path>
                  <path
                    d="M63.2109 9.06976H64.1615V15.8001H63.2109V9.06976Z"
                    fill="white"
                  ></path>
                  <path
                    d="M65.4824 13.3777C65.4521 13.0595 65.4884 12.7386 65.5888 12.4353C65.6892 12.1321 65.8515 11.8533 66.0654 11.6168C66.2793 11.3803 66.54 11.1914 66.8308 11.0621C67.1216 10.9328 67.4361 10.866 67.7541 10.866C68.0721 10.866 68.3866 10.9328 68.6774 11.0621C68.9682 11.1914 69.2289 11.3803 69.4428 11.6168C69.6567 11.8533 69.8191 12.1321 69.9195 12.4353C70.0199 12.7386 70.0561 13.0595 70.0258 13.3777C70.0567 13.6961 70.0209 14.0175 69.9207 14.3212C69.8206 14.6249 69.6583 14.9042 69.4444 15.1412C69.2304 15.3781 68.9695 15.5675 68.6784 15.697C68.3873 15.8266 68.0725 15.8935 67.7541 15.8935C67.4358 15.8935 67.1209 15.8266 66.8298 15.697C66.5387 15.5675 66.2778 15.3781 66.0639 15.1412C65.8499 14.9042 65.6877 14.6249 65.5875 14.3212C65.4874 14.0175 65.4516 13.6961 65.4824 13.3777ZM69.0476 13.3777C69.0476 12.3284 68.5786 11.7148 67.7554 11.7148C66.9292 11.7148 66.4644 12.3284 66.4644 13.3777C66.4644 14.4354 66.9292 15.0442 67.7554 15.0442C68.5786 15.0442 69.0476 14.4311 69.0476 13.3777H69.0476Z"
                    fill="white"
                  ></path>
                  <path
                    d="M71.0273 14.4311C71.0273 13.5598 71.6729 13.0575 72.8188 12.9861L74.1235 12.9105V12.4927C74.1235 11.9814 73.7872 11.6927 73.1374 11.6927C72.6068 11.6927 72.2391 11.8885 72.1336 12.2307H71.2133C71.3104 11.3993 72.0887 10.866 73.1813 10.866C74.3888 10.866 75.0699 11.4701 75.0699 12.4927V15.8001H74.1548V15.1198H74.0796C73.927 15.3638 73.7126 15.5627 73.4584 15.6963C73.2043 15.8298 72.9194 15.8931 72.6329 15.8798C72.4307 15.901 72.2263 15.8793 72.033 15.8162C71.8396 15.7531 71.6616 15.65 71.5103 15.5135C71.359 15.377 71.2379 15.2101 71.1547 15.0237C71.0715 14.8373 71.0281 14.6354 71.0273 14.4311ZM74.1235 14.0175V13.6128L72.9473 13.6884C72.284 13.733 71.9831 13.9598 71.9831 14.3865C71.9831 14.8222 72.3592 15.0757 72.8763 15.0757C73.0278 15.0911 73.1809 15.0757 73.3263 15.0305C73.4718 14.9852 73.6068 14.911 73.7231 14.8123C73.8395 14.7136 73.9349 14.5923 74.0037 14.4558C74.0725 14.3193 74.1132 14.1702 74.1235 14.0175Z"
                    fill="white"
                  ></path>
                  <path
                    d="M76.3184 13.3777C76.3184 11.8481 77.1008 10.8791 78.3177 10.8791C78.6187 10.8652 78.9175 10.9376 79.179 11.088C79.4406 11.2384 79.6542 11.4605 79.7948 11.7284H79.8658V9.06976H80.8164V15.8001H79.9055V15.0353H79.8303C79.6788 15.3013 79.4578 15.5207 79.1912 15.6695C78.9246 15.8184 78.6225 15.8911 78.3177 15.8798C77.0924 15.8799 76.3184 14.9109 76.3184 13.3777ZM77.3003 13.3777C77.3003 14.4044 77.7819 15.0222 78.5873 15.0222C79.3884 15.0222 79.8836 14.3955 79.8836 13.3819C79.8836 12.373 79.3832 11.7373 78.5873 11.7373C77.7871 11.7373 77.3003 12.3593 77.3003 13.3777H77.3003Z"
                    fill="white"
                  ></path>
                  <path
                    d="M84.75 13.3777C84.7197 13.0596 84.7559 12.7386 84.8563 12.4354C84.9567 12.1321 85.119 11.8534 85.3329 11.6169C85.5468 11.3804 85.8074 11.1914 86.0982 11.0621C86.389 10.9328 86.7035 10.8661 87.0215 10.8661C87.3394 10.8661 87.6539 10.9328 87.9447 11.0621C88.2355 11.1914 88.4962 11.3804 88.71 11.6169C88.9239 11.8534 89.0862 12.1321 89.1866 12.4354C89.287 12.7386 89.3232 13.0596 89.2929 13.3777C89.3238 13.6961 89.288 14.0175 89.1879 14.3212C89.0878 14.6249 88.9255 14.9042 88.7116 15.1412C88.4977 15.3781 88.2368 15.5675 87.9457 15.6971C87.6547 15.8266 87.3398 15.8936 87.0215 15.8936C86.7031 15.8936 86.3883 15.8266 86.0972 15.6971C85.8061 15.5675 85.5452 15.3781 85.3313 15.1412C85.1174 14.9042 84.9551 14.6249 84.855 14.3212C84.7549 14.0175 84.7191 13.6961 84.75 13.3777ZM88.3152 13.3777C88.3152 12.3284 87.8462 11.7148 87.023 11.7148C86.1968 11.7148 85.732 12.3284 85.732 13.3777C85.732 14.4354 86.1968 15.0442 87.023 15.0442C87.8462 15.0442 88.3152 14.4311 88.3152 13.3777Z"
                    fill="white"
                  ></path>
                  <path
                    d="M90.5684 10.9594H91.4834V11.7284H91.5545C91.675 11.4522 91.8782 11.2207 92.1358 11.0661C92.3935 10.9115 92.6927 10.8415 92.9918 10.866C93.2262 10.8483 93.4615 10.8838 93.6804 10.9699C93.8992 11.056 94.096 11.1905 94.2561 11.3634C94.4162 11.5363 94.5355 11.7432 94.6053 11.9687C94.675 12.1943 94.6934 12.4327 94.659 12.6664V15.8H93.7084V12.9063C93.7084 12.1284 93.3721 11.7415 92.669 11.7415C92.5099 11.7341 92.3511 11.7613 92.2034 11.8213C92.0557 11.8813 91.9227 11.9727 91.8135 12.0892C91.7042 12.2057 91.6214 12.3446 91.5705 12.4963C91.5197 12.6481 91.5021 12.809 91.5189 12.9682V15.8001H90.5684V10.9594Z"
                    fill="white"
                  ></path>
                  <path
                    d="M100.03 9.75424V10.9815H101.073V11.7861H100.03V14.2752C100.03 14.7823 100.238 15.0043 100.711 15.0043C100.832 15.0039 100.953 14.9966 101.073 14.9823V15.778C100.903 15.8087 100.73 15.825 100.556 15.8268C99.4991 15.8268 99.0781 15.4531 99.0781 14.5198V11.7861H98.3135V10.9814H99.0781V9.75424H100.03Z"
                    fill="white"
                  ></path>
                  <path
                    d="M102.372 9.06976H103.314V11.7373H103.389C103.516 11.4586 103.725 11.2257 103.987 11.0705C104.25 10.9154 104.554 10.8454 104.858 10.8702C105.091 10.8574 105.324 10.8966 105.541 10.9847C105.757 11.0729 105.951 11.208 106.11 11.3804C106.268 11.5528 106.387 11.7581 106.457 11.9819C106.528 12.2056 106.548 12.4422 106.517 12.6748V15.8001H105.565V12.9105C105.565 12.1373 105.207 11.7457 104.535 11.7457C104.372 11.7322 104.208 11.7548 104.054 11.8118C103.9 11.8689 103.761 11.959 103.645 12.0759C103.53 12.1928 103.441 12.3336 103.385 12.4886C103.33 12.6435 103.308 12.8088 103.323 12.9729V15.8H102.372L102.372 9.06976Z"
                    fill="white"
                  ></path>
                  <path
                    d="M112.059 14.4931C111.93 14.9355 111.65 15.3181 111.269 15.5742C110.887 15.8302 110.428 15.9432 109.972 15.8935C109.655 15.9019 109.339 15.8408 109.048 15.7145C108.756 15.5881 108.496 15.3996 108.284 15.1618C108.072 14.9241 107.915 14.6429 107.822 14.3378C107.729 14.0327 107.704 13.711 107.747 13.395C107.705 13.078 107.731 12.7555 107.823 12.4495C107.916 12.1435 108.073 11.861 108.283 11.6212C108.494 11.3814 108.753 11.1899 109.044 11.0596C109.335 10.9293 109.65 10.8633 109.968 10.866C111.308 10.866 112.117 11.7862 112.117 13.3062V13.6396H108.715V13.6931C108.701 13.8708 108.723 14.0496 108.781 14.2181C108.839 14.3866 108.931 14.5411 109.052 14.6716C109.172 14.8022 109.319 14.906 109.482 14.9763C109.645 15.0466 109.821 15.0818 109.998 15.0799C110.226 15.1073 110.456 15.0662 110.66 14.9617C110.864 14.8572 111.033 14.694 111.144 14.493L112.059 14.4931ZM108.715 12.9331H111.148C111.16 12.7706 111.138 12.6074 111.084 12.454C111.029 12.3006 110.943 12.1603 110.832 12.0422C110.72 11.9241 110.585 11.8308 110.435 11.7682C110.286 11.7057 110.125 11.6753 109.963 11.6791C109.798 11.677 109.635 11.708 109.483 11.7703C109.331 11.8326 109.192 11.9249 109.076 12.0418C108.96 12.1586 108.868 12.2977 108.806 12.4508C108.744 12.6038 108.713 12.7678 108.715 12.9331H108.715Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1347_18305">
                    <rect width="128" height="43" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <img className="google" src={images.google} />
            </div>
          </div>
        </div>
      ) : (
        <div className="any footer1">
          <div className="sub-menu p-3">
            <div>
              <h2 className="">Soleexhange. Access the Now.</h2>
              <div className=" ">
                <div
                  href="#settings"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("settings")}
                >
                  <h6>About</h6>
                  <div
                    className={`fa ${
                      openSubMenus.settings ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.settings && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      How It Works
                    </li>
                    <li className="text-decoration-none line-gap">
                      Verification
                    </li>
                    <li className="text-decoration-none line-gap">Newsroom</li>
                    <li className="text-decoration-none line-gap">Company</li>
                    <li className="text-decoration-none line-gap">Careers</li>
                    <li className="text-decoration-none line-gap">
                      CSoleexhange Reviews
                    </li>
                    <li className="text-decoration-none line-gap">
                      CGive $10, Get $10
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#help"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("help")}
                >
                  <h6>Help</h6>
                  <div
                    className={`fa ${
                      openSubMenus.help ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.help && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Help Center
                    </li>
                    <li className="text-decoration-none line-gap">
                      Contact Us
                    </li>
                    <li className="text-decoration-none line-gap">
                      Product Suggestions
                    </li>
                    <li className="text-decoration-none line-gap">
                      Size Guide
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Sell"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Sell")}
                >
                  <h6>Sell</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Sell ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Sell && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Selling Guide
                    </li>
                    <li className="text-decoration-none line-gap">
                      Professional Tools
                    </li>
                    <li className="text-decoration-none line-gap">
                      Soleexhange Pro
                    </li>
                    <li className="text-decoration-none line-gap">
                      Developers
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#AirJordan"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("AirJordan")}
                >
                  <h6>Air Jordan</h6>
                  <div
                    className={`fa ${
                      openSubMenus.AirJordan ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.AirJordan && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Air Jordan 1
                    </li>
                    <li className="text-decoration-none line-gap">
                      Air Jordan 3
                    </li>
                    <li className="text-decoration-none line-gap">
                      Air Jordan 4
                    </li>
                    <li className="text-decoration-none line-gap">
                      Air Jordan 11
                    </li>
                    <li className="text-decoration-none line-gap">
                      Women's Jordan Shoes
                    </li>
                    <li className="text-decoration-none line-gap">
                      Air Jordan 5
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Adidas"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Adidas")}
                >
                  <h6>Adidas</h6>
                  <div
                    className={`fa ${
                      openSubMenus.help ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Adidas && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Adidas Samba
                    </li>
                    <li className="text-decoration-none line-gap">
                      Adidas Gazelle
                    </li>
                    <li className="text-decoration-none line-gap">Nike Dunk</li>
                    <li className="text-decoration-none line-gap">
                      Adidas Handball Spezial
                    </li>
                    <li className="text-decoration-none line-gap">Adidas AE</li>
                    <li className="text-decoration-none line-gap">
                      Adidas Yeezy
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#NewBalance"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("NewBalance")}
                >
                  <h6>New Balance</h6>
                  <div
                    className={`fa ${
                      openSubMenus.NewBalance ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.NewBalance && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      New Balance 2002R
                    </li>
                    <li className="text-decoration-none line-gap">
                      Sew Balance 1906R
                    </li>
                    <li className="text-decoration-none line-gap">
                      New Balance 530
                    </li>
                    <li className="text-decoration-none line-gap">
                      New Balance 550
                    </li>
                    <li className="text-decoration-none line-gap">
                      New Balance 9060
                    </li>
                    <li className="text-decoration-none line-gap">
                      New Balance 990 V1
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Nike"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Nike")}
                >
                  <h6>Nike</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Nike ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Nike && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Nike Air Force 1
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike Air Max 1
                    </li>
                    <li className="text-decoration-none line-gap">Nike Dunk</li>
                    <li className="text-decoration-none line-gap">Nike SB</li>
                    <li className="text-decoration-none line-gap">
                      Women's Nike Dunks
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike Vomero 5
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Performance"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Performance")}
                >
                  <h6>Performance running</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Performance ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Performance && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Nike Air Zoom Alphafly Next %
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike ZoomX Invincible{" "}
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike Pegasus 40
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike Pegasus 41
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike ZoomX Vaporfly Next%
                    </li>
                    <li className="text-decoration-none line-gap">
                      On Cloudmonster
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Popular"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Popular")}
                >
                  <h6>Popular Releases</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Popular ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Popular && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      AJ1 Retro Low OG SP Travis Scott Canary (Women's)
                    </li>
                    <li className="text-decoration-none line-gap">
                      Jordan 4 Retro White Thunder
                    </li>
                    <li className="text-decoration-none line-gap">
                      Jordan 4 Retro SE Paris Olympics Wet Cement
                    </li>
                    <li className="text-decoration-none line-gap">
                      adidas Yeezy Slide Slate Grey
                    </li>
                    <li className="text-decoration-none line-gap">
                      ASICS Gel-1130 White Clay Canyon
                    </li>

                    <li className="text-decoration-none line-gap">
                      Nike Kobe Mamba Mentality Jersey
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Apparel"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Apparel")}
                >
                  <h6>Apparel</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Apparel ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Apparel && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Denim Tears
                    </li>
                    <li className="text-decoration-none line-gap">
                      Fear of God Essentials
                    </li>
                    <li className="text-decoration-none line-gap">
                      Nike Apparel
                    </li>
                    <li className="text-decoration-none line-gap">Supreme</li>
                    <li className="text-decoration-none line-gap">
                      Travis Scott
                    </li>

                    <li className="text-decoration-none line-gap">Yeezy</li>
                  </ul>
                )}
              </div>
              <div className="">
                <div
                  href="#Accessories"
                  className="d-flex justify-content-between text-decoration-none line-gap p-2"
                  onClick={() => toggleSubMenu("Accessories")}
                >
                  <h6>Accessories</h6>
                  <div
                    className={`fa ${
                      openSubMenus.Accessories ? "fa-caret-up" : "fa-caret-down"
                    } right`}
                  ></div>
                </div>
                {openSubMenus.Accessories && (
                  <ul className="list-unstyled p-2">
                    <li className="text-decoration-none line-gap">
                      Swatch X Omega
                    </li>
                    <li className="text-decoration-none line-gap">Stanley</li>
                    <li className="text-decoration-none line-gap">
                      Designer Sunglasses
                    </li>
                    <li className="text-decoration-none line-gap">
                      Louis Vuitton Accessories
                    </li>
                    <li className="text-decoration-none line-gap">
                      Gucci Accessories
                    </li>
                    <li className="text-decoration-none line-gap">
                      Supreme Accessories
                    </li>
                  </ul>
                )}
              </div>

              <div className="col-lg-2 col-md-2 grid">
                <svg
                  viewBox="0 0 128 43"
                  focusable="false"
                  class="chakra-icon css-1a9naxn ms-4"
                >
                  <g clip-path="url(#clip0_1347_18305)">
                    <path
                      d="M117.807 1.76797e-05H10.1989C9.80663 1.76797e-05 9.41909 1.76798e-05 9.02789 0.00216768C8.70041 0.00431768 8.37554 0.0105634 8.04492 0.0158202C7.32666 0.0243146 6.61008 0.0878197 5.90143 0.205783C5.19377 0.326315 4.50827 0.553552 3.86813 0.879808C3.22877 1.20882 2.64457 1.63635 2.13672 2.14687C1.62621 2.65595 1.20066 3.24439 0.876427 3.88954C0.551304 4.53341 0.325862 5.22338 0.207889 5.93561C0.0887936 6.64694 0.0247074 7.36648 0.0162054 8.08776C0.00627891 8.41735 0.00523064 8.74804 0 9.07768V33.9255C0.00523064 34.2593 0.00627891 34.5827 0.0162054 34.9166C0.02471 35.6378 0.0887962 36.3573 0.207889 37.0686C0.325536 37.7812 0.550991 38.4716 0.876427 39.1157C1.20051 39.7588 1.62612 40.3448 2.13672 40.8511C2.64265 41.3639 3.22722 41.7917 3.86813 42.1182C4.50827 42.4453 5.19369 42.6739 5.90143 42.7963C6.61021 42.9133 7.32671 42.9769 8.04492 42.9864C8.37554 42.9937 8.70041 42.9979 9.02789 42.9979C9.41908 43 9.80665 43 10.1989 43H117.807C118.191 43 118.582 43 118.966 42.9979C119.292 42.9979 119.627 42.9937 119.953 42.9864C120.669 42.9774 121.385 42.9138 122.092 42.7963C122.802 42.6731 123.49 42.4445 124.133 42.1182C124.773 41.7915 125.357 41.3637 125.863 40.8511C126.372 40.3429 126.799 39.7572 127.127 39.1157C127.45 38.4711 127.673 37.7808 127.789 37.0686C127.908 36.3572 127.975 35.6379 127.987 34.9166C127.992 34.5827 127.992 34.2593 127.992 33.9255C128 33.535 128 33.1466 128 32.7497V10.2514C128 9.85768 128 9.46716 127.992 9.07768C127.992 8.74804 127.992 8.41735 127.987 8.08772C127.975 7.36637 127.908 6.647 127.789 5.93557C127.673 5.22375 127.449 4.53383 127.127 3.8895C126.466 2.59635 125.419 1.54375 124.133 0.879712C123.49 0.554253 122.802 0.327076 122.092 0.205687C121.385 0.0872032 120.669 0.023676 119.953 0.0156697C119.627 0.0104237 119.292 0.00412418 118.966 0.00202793C118.582 -0.00012207 118.191 -0.00012207 117.807 -0.00012207V1.76797e-05Z"
                      fill="#A6A6A6"
                    ></path>
                    <path
                      d="M9.03288 42.0594C8.70697 42.0594 8.38894 42.0552 8.06559 42.0479C7.39575 42.0391 6.72747 41.9805 6.06625 41.8725C5.44968 41.7658 4.8524 41.5673 4.29409 41.2835C3.74091 41.0021 3.23636 40.6331 2.79978 40.1907C2.35687 39.7535 1.98814 39.2464 1.70818 38.6895C1.42513 38.1289 1.22925 37.5281 1.12735 36.908C1.01731 36.2416 0.957773 35.5678 0.949254 34.8923C0.942472 34.6656 0.933594 33.9108 0.933594 33.9108V9.07765C0.933594 9.07765 0.94305 8.33439 0.949307 8.11602C0.957464 7.44166 1.01666 6.76889 1.12637 6.10355C1.22846 5.48168 1.42449 4.87914 1.70769 4.31679C1.98662 3.76028 2.35331 3.25279 2.79354 2.81399C3.23328 2.37103 3.73945 2.00014 4.29357 1.71484C4.85059 1.43199 5.44675 1.23488 6.06206 1.1301C6.72546 1.02106 7.39606 0.962109 8.06822 0.953739L9.0334 0.940613H118.961L119.938 0.954265C120.604 0.962219 121.268 1.02065 121.925 1.12905C122.547 1.23514 123.149 1.43362 123.713 1.71799C124.823 2.29295 125.726 3.20259 126.296 4.31941C126.575 4.87788 126.768 5.47551 126.868 6.092C126.98 6.7628 127.042 7.44086 127.054 8.12075C127.058 8.42519 127.058 8.75221 127.058 9.07765C127.066 9.48078 127.066 9.86448 127.066 10.2513V32.7496C127.066 33.1402 127.066 33.5213 127.058 33.9055C127.058 34.2551 127.058 34.5753 127.053 34.9049C127.041 35.5727 126.98 36.2386 126.871 36.8974C126.771 37.5221 126.576 38.1276 126.293 38.6927C126.011 39.2435 125.644 39.7463 125.207 40.1823C124.77 40.6271 124.264 40.9983 123.71 41.2815C123.148 41.5674 122.546 41.7667 121.925 41.8725C121.264 41.9811 120.596 42.0397 119.926 42.0479C119.613 42.0552 119.285 42.0594 118.966 42.0594L117.807 42.0615L9.03288 42.0594Z"
                      fill="black"
                    ></path>
                    <path
                      d="M26.4941 21.8232C26.5056 20.926 26.7428 20.0462 27.1835 19.2658C27.6242 18.4854 28.2542 17.8297 29.0148 17.3598C28.5316 16.6662 27.8942 16.0955 27.1531 15.6928C26.412 15.2902 25.5877 15.0668 24.7457 15.0403C22.9494 14.8508 21.2081 16.1205 20.2928 16.1205C19.3597 16.1205 17.9505 15.0591 16.4329 15.0905C15.4513 15.1223 14.4946 15.4092 13.6562 15.9231C12.8177 16.437 12.126 17.1605 11.6484 18.0229C9.57966 21.6225 11.1227 26.9126 13.1044 29.8222C14.0959 31.247 15.2546 32.8384 16.7708 32.782C18.2545 32.7202 18.8086 31.8312 20.5996 31.8312C22.3739 31.8312 22.8938 32.782 24.4407 32.7461C26.0328 32.7202 27.0358 31.315 27.9925 29.8768C28.7049 28.8616 29.2531 27.7396 29.6167 26.5524C28.6918 26.1592 27.9025 25.5011 27.3472 24.6601C26.7919 23.8192 26.4952 22.8325 26.4941 21.8232Z"
                      fill="white"
                    ></path>
                    <path
                      d="M23.5723 13.1267C24.4404 12.0794 24.868 10.7333 24.7645 9.3743C23.4383 9.51429 22.2132 10.1513 21.3335 11.1584C20.9033 11.6504 20.5739 12.2227 20.3639 12.8428C20.154 13.4628 20.0678 14.1183 20.1101 14.7719C20.7734 14.7787 21.4297 14.6342 22.0294 14.3493C22.6291 14.0643 23.1567 13.6463 23.5723 13.1267Z"
                      fill="white"
                    ></path>
                    <path
                      d="M45.2488 29.1751H40.1856L38.9697 32.7833H36.8252L41.6209 19.434H43.849L48.6447 32.7833H46.4636L45.2488 29.1751ZM40.71 27.5101H44.7234L42.7449 21.6543H42.6896L40.71 27.5101Z"
                      fill="white"
                    ></path>
                    <path
                      d="M59.0023 27.9175C59.0023 30.942 57.3916 32.8851 54.9608 32.8851C54.345 32.9175 53.7327 32.775 53.1938 32.4738C52.6549 32.1727 52.2113 31.7251 51.9137 31.1823H51.8677V36.003H49.8799V23.0506H51.8041V24.6694H51.8406C52.1518 24.1292 52.6029 23.684 53.1459 23.381C53.6889 23.078 54.3035 22.9286 54.9242 22.9487C57.3821 22.9487 59.0023 24.9014 59.0023 27.9175ZM56.9591 27.9175C56.9591 25.947 55.9458 24.6515 54.3999 24.6515C52.881 24.6515 51.8594 25.9743 51.8594 27.9175C51.8594 29.8785 52.881 31.1918 54.3999 31.1918C55.9459 31.1918 56.9591 29.9058 56.9591 27.9175Z"
                      fill="white"
                    ></path>
                    <path
                      d="M69.6605 27.9175C69.6605 30.9419 68.0498 32.8851 65.619 32.8851C65.0033 32.9175 64.3909 32.7749 63.852 32.4738C63.3131 32.1726 62.8695 31.7251 62.5719 31.1823H62.5259V36.003H60.5381V23.0505H62.4622V24.6693H62.4988C62.81 24.1292 63.2611 23.6839 63.8041 23.381C64.3471 23.078 64.9617 22.9286 65.5824 22.9487C68.0404 22.9487 69.6605 24.9014 69.6605 27.9175ZM67.6173 27.9175C67.6173 25.947 66.604 24.6515 65.0581 24.6515C63.5392 24.6515 62.5176 25.9743 62.5176 27.9175C62.5176 29.8785 63.5392 31.1918 65.0581 31.1918C66.6041 31.1918 67.6173 29.9058 67.6173 27.9175H67.6173Z"
                      fill="white"
                    ></path>
                    <path
                      d="M76.7058 29.0638C76.8531 30.3876 78.1327 31.2568 79.8814 31.2568C81.5569 31.2568 82.7623 30.3876 82.7623 29.194C82.7623 28.1578 82.0353 27.5374 80.3138 27.1122L78.5923 26.6954C76.1532 26.1033 75.0209 24.9569 75.0209 23.0967C75.0209 20.7934 77.0181 19.2114 79.8542 19.2114C82.661 19.2114 84.5851 20.7934 84.6499 23.0967H82.6432C82.5231 21.7645 81.4273 20.9603 79.826 20.9603C78.2246 20.9603 77.1288 21.7739 77.1288 22.9581C77.1288 23.9019 77.8287 24.4572 79.5408 24.8824L81.0043 25.2435C83.7296 25.8912 84.8619 26.9915 84.8619 28.9441C84.8619 31.4416 82.8824 33.0058 79.734 33.0058C76.7883 33.0058 74.7994 31.4783 74.6709 29.0637L76.7058 29.0638Z"
                      fill="white"
                    ></path>
                    <path
                      d="M89.1515 20.7473V23.0506H90.9931V24.6326H89.1515V29.9982C89.1515 30.8317 89.5202 31.2201 90.3298 31.2201C90.5484 31.2163 90.7667 31.2009 90.9837 31.1739V32.7465C90.6197 32.8149 90.2497 32.8458 89.8795 32.8389C87.9188 32.8389 87.1542 32.0988 87.1542 30.2112V24.6326H85.7461V23.0506H87.1542V20.7473H89.1515Z"
                      fill="white"
                    ></path>
                    <path
                      d="M92.0605 27.9174C92.0605 24.8552 93.8551 22.9309 96.6536 22.9309C99.4615 22.9309 101.248 24.8551 101.248 27.9174C101.248 30.9881 99.4709 32.904 96.6536 32.904C93.8373 32.904 92.0605 30.9881 92.0605 27.9174ZM99.2223 27.9174C99.2223 25.8168 98.2644 24.577 96.6536 24.577C95.0428 24.577 94.086 25.8262 94.086 27.9174C94.086 30.0265 95.0428 31.2569 96.6536 31.2569C98.2644 31.2569 99.2222 30.0265 99.2222 27.9174H99.2223Z"
                      fill="white"
                    ></path>
                    <path
                      d="M102.886 23.0506H104.782V24.7071H104.828C104.956 24.1898 105.258 23.7325 105.682 23.4123C106.106 23.0921 106.627 22.9284 107.157 22.9487C107.386 22.9479 107.615 22.9729 107.838 23.0233V24.8919C107.549 24.8031 107.247 24.7623 106.945 24.7712C106.656 24.7594 106.368 24.8106 106.101 24.9212C105.834 25.0318 105.594 25.1992 105.397 25.4119C105.2 25.6247 105.051 25.8777 104.961 26.1536C104.871 26.4295 104.841 26.7218 104.874 27.0104V32.7833H102.886L102.886 23.0506Z"
                      fill="white"
                    ></path>
                    <path
                      d="M117.003 29.9247C116.736 31.6915 115.024 32.904 112.833 32.904C110.016 32.904 108.268 31.007 108.268 27.9636C108.268 24.9108 110.026 22.9309 112.75 22.9309C115.429 22.9309 117.114 24.7806 117.114 27.7316V28.4161H110.274V28.5368C110.243 28.895 110.287 29.2559 110.405 29.5954C110.523 29.9349 110.711 30.2454 110.958 30.5061C111.204 30.7668 111.503 30.9719 111.834 31.1077C112.166 31.2435 112.522 31.3068 112.879 31.2936C113.349 31.3378 113.821 31.2285 114.224 30.9819C114.627 30.7352 114.939 30.3644 115.116 29.9247L117.003 29.9247ZM110.284 27.0199H115.125C115.143 26.6978 115.095 26.3755 114.983 26.0732C114.871 25.7709 114.698 25.4951 114.475 25.2632C114.252 25.0312 113.983 24.8481 113.686 24.7253C113.39 24.6026 113.071 24.5427 112.75 24.5497C112.426 24.5477 112.105 24.6102 111.806 24.7336C111.506 24.8569 111.234 25.0387 111.005 25.2683C110.775 25.498 110.594 25.771 110.47 26.0716C110.346 26.3723 110.283 26.6945 110.284 27.0199V27.0199Z"
                      fill="white"
                    ></path>
                    <path
                      d="M40.4617 9.38582C40.8784 9.35576 41.2966 9.41904 41.6861 9.57108C42.0756 9.72312 42.4266 9.96013 42.7139 10.265C43.0012 10.5699 43.2176 10.9351 43.3474 11.3342C43.4773 11.7333 43.5174 12.1564 43.4649 12.573C43.4649 14.6222 42.3628 15.8002 40.4617 15.8002H38.1562V9.38582H40.4617ZM39.1476 14.893H40.3509C40.6487 14.9109 40.9467 14.8619 41.2233 14.7494C41.4998 14.6369 41.748 14.4639 41.9496 14.2429C42.1512 14.022 42.3013 13.7586 42.3888 13.472C42.4764 13.1853 42.4993 12.8827 42.4558 12.5861C42.4961 12.2906 42.4709 11.9899 42.382 11.7054C42.2931 11.4209 42.1427 11.1596 41.9415 10.9404C41.7403 10.7212 41.4934 10.5494 41.2184 10.4373C40.9434 10.3253 40.6472 10.2757 40.3509 10.2923H39.1476V14.893Z"
                      fill="white"
                    ></path>
                    <path
                      d="M44.585 13.3777C44.5547 13.0596 44.5909 12.7386 44.6913 12.4354C44.7916 12.1321 44.954 11.8534 45.1678 11.6169C45.3817 11.3804 45.6424 11.1914 45.9332 11.0621C46.224 10.9328 46.5384 10.8661 46.8564 10.8661C47.1744 10.8661 47.4889 10.9328 47.7797 11.0621C48.0704 11.1914 48.3311 11.3804 48.545 11.6169C48.7589 11.8534 48.9212 12.1321 49.0216 12.4354C49.122 12.7386 49.1582 13.0596 49.1279 13.3777C49.1587 13.6961 49.123 14.0175 49.0229 14.3212C48.9227 14.6249 48.7605 14.9042 48.5466 15.1412C48.3327 15.3781 48.0718 15.5675 47.7807 15.6971C47.4896 15.8266 47.1748 15.8936 46.8564 15.8936C46.5381 15.8936 46.2232 15.8266 45.9322 15.6971C45.6411 15.5675 45.3802 15.3781 45.1663 15.1412C44.9523 14.9042 44.7901 14.6249 44.69 14.3212C44.5899 14.0175 44.5541 13.6961 44.585 13.3777ZM48.1501 13.3777C48.1501 12.3284 47.6811 11.7148 46.858 11.7148C46.0317 11.7148 45.5669 12.3284 45.5669 13.3777C45.5669 14.4354 46.0318 15.0442 46.858 15.0442C47.6811 15.0442 48.1502 14.4311 48.1502 13.3777H48.1501Z"
                      fill="white"
                    ></path>
                    <path
                      d="M55.166 15.8001H54.1799L53.1844 12.2349H53.1092L52.1178 15.8001H51.1412L49.8135 10.9594H50.7776L51.6405 14.6531H51.7115L52.7018 10.9594H53.6137L54.604 14.6531H54.6792L55.5378 10.9594H56.4884L55.166 15.8001Z"
                      fill="white"
                    ></path>
                    <path
                      d="M57.6055 10.9594H58.5205V11.7284H58.5916C58.7121 11.4522 58.9153 11.2207 59.173 11.0661C59.4306 10.9115 59.7298 10.8415 60.0289 10.866C60.2633 10.8483 60.4986 10.8838 60.7175 10.9699C60.9363 11.056 61.1331 11.1905 61.2932 11.3634C61.4533 11.5363 61.5726 11.7432 61.6424 11.9687C61.7121 12.1943 61.7305 12.4327 61.6961 12.6664V15.8H60.7455V12.9063C60.7455 12.1284 60.4092 11.7415 59.7061 11.7415C59.547 11.7341 59.3882 11.7613 59.2405 11.8213C59.0928 11.8813 58.9598 11.9727 58.8506 12.0892C58.7413 12.2057 58.6585 12.3446 58.6076 12.4963C58.5568 12.6481 58.5392 12.809 58.556 12.9682V15.8001H57.6055L57.6055 10.9594Z"
                      fill="white"
                    ></path>
                    <path
                      d="M63.2109 9.06976H64.1615V15.8001H63.2109V9.06976Z"
                      fill="white"
                    ></path>
                    <path
                      d="M65.4824 13.3777C65.4521 13.0595 65.4884 12.7386 65.5888 12.4353C65.6892 12.1321 65.8515 11.8533 66.0654 11.6168C66.2793 11.3803 66.54 11.1914 66.8308 11.0621C67.1216 10.9328 67.4361 10.866 67.7541 10.866C68.0721 10.866 68.3866 10.9328 68.6774 11.0621C68.9682 11.1914 69.2289 11.3803 69.4428 11.6168C69.6567 11.8533 69.8191 12.1321 69.9195 12.4353C70.0199 12.7386 70.0561 13.0595 70.0258 13.3777C70.0567 13.6961 70.0209 14.0175 69.9207 14.3212C69.8206 14.6249 69.6583 14.9042 69.4444 15.1412C69.2304 15.3781 68.9695 15.5675 68.6784 15.697C68.3873 15.8266 68.0725 15.8935 67.7541 15.8935C67.4358 15.8935 67.1209 15.8266 66.8298 15.697C66.5387 15.5675 66.2778 15.3781 66.0639 15.1412C65.8499 14.9042 65.6877 14.6249 65.5875 14.3212C65.4874 14.0175 65.4516 13.6961 65.4824 13.3777ZM69.0476 13.3777C69.0476 12.3284 68.5786 11.7148 67.7554 11.7148C66.9292 11.7148 66.4644 12.3284 66.4644 13.3777C66.4644 14.4354 66.9292 15.0442 67.7554 15.0442C68.5786 15.0442 69.0476 14.4311 69.0476 13.3777H69.0476Z"
                      fill="white"
                    ></path>
                    <path
                      d="M71.0273 14.4311C71.0273 13.5598 71.6729 13.0575 72.8188 12.9861L74.1235 12.9105V12.4927C74.1235 11.9814 73.7872 11.6927 73.1374 11.6927C72.6068 11.6927 72.2391 11.8885 72.1336 12.2307H71.2133C71.3104 11.3993 72.0887 10.866 73.1813 10.866C74.3888 10.866 75.0699 11.4701 75.0699 12.4927V15.8001H74.1548V15.1198H74.0796C73.927 15.3638 73.7126 15.5627 73.4584 15.6963C73.2043 15.8298 72.9194 15.8931 72.6329 15.8798C72.4307 15.901 72.2263 15.8793 72.033 15.8162C71.8396 15.7531 71.6616 15.65 71.5103 15.5135C71.359 15.377 71.2379 15.2101 71.1547 15.0237C71.0715 14.8373 71.0281 14.6354 71.0273 14.4311ZM74.1235 14.0175V13.6128L72.9473 13.6884C72.284 13.733 71.9831 13.9598 71.9831 14.3865C71.9831 14.8222 72.3592 15.0757 72.8763 15.0757C73.0278 15.0911 73.1809 15.0757 73.3263 15.0305C73.4718 14.9852 73.6068 14.911 73.7231 14.8123C73.8395 14.7136 73.9349 14.5923 74.0037 14.4558C74.0725 14.3193 74.1132 14.1702 74.1235 14.0175Z"
                      fill="white"
                    ></path>
                    <path
                      d="M76.3184 13.3777C76.3184 11.8481 77.1008 10.8791 78.3177 10.8791C78.6187 10.8652 78.9175 10.9376 79.179 11.088C79.4406 11.2384 79.6542 11.4605 79.7948 11.7284H79.8658V9.06976H80.8164V15.8001H79.9055V15.0353H79.8303C79.6788 15.3013 79.4578 15.5207 79.1912 15.6695C78.9246 15.8184 78.6225 15.8911 78.3177 15.8798C77.0924 15.8799 76.3184 14.9109 76.3184 13.3777ZM77.3003 13.3777C77.3003 14.4044 77.7819 15.0222 78.5873 15.0222C79.3884 15.0222 79.8836 14.3955 79.8836 13.3819C79.8836 12.373 79.3832 11.7373 78.5873 11.7373C77.7871 11.7373 77.3003 12.3593 77.3003 13.3777H77.3003Z"
                      fill="white"
                    ></path>
                    <path
                      d="M84.75 13.3777C84.7197 13.0596 84.7559 12.7386 84.8563 12.4354C84.9567 12.1321 85.119 11.8534 85.3329 11.6169C85.5468 11.3804 85.8074 11.1914 86.0982 11.0621C86.389 10.9328 86.7035 10.8661 87.0215 10.8661C87.3394 10.8661 87.6539 10.9328 87.9447 11.0621C88.2355 11.1914 88.4962 11.3804 88.71 11.6169C88.9239 11.8534 89.0862 12.1321 89.1866 12.4354C89.287 12.7386 89.3232 13.0596 89.2929 13.3777C89.3238 13.6961 89.288 14.0175 89.1879 14.3212C89.0878 14.6249 88.9255 14.9042 88.7116 15.1412C88.4977 15.3781 88.2368 15.5675 87.9457 15.6971C87.6547 15.8266 87.3398 15.8936 87.0215 15.8936C86.7031 15.8936 86.3883 15.8266 86.0972 15.6971C85.8061 15.5675 85.5452 15.3781 85.3313 15.1412C85.1174 14.9042 84.9551 14.6249 84.855 14.3212C84.7549 14.0175 84.7191 13.6961 84.75 13.3777ZM88.3152 13.3777C88.3152 12.3284 87.8462 11.7148 87.023 11.7148C86.1968 11.7148 85.732 12.3284 85.732 13.3777C85.732 14.4354 86.1968 15.0442 87.023 15.0442C87.8462 15.0442 88.3152 14.4311 88.3152 13.3777Z"
                      fill="white"
                    ></path>
                    <path
                      d="M90.5684 10.9594H91.4834V11.7284H91.5545C91.675 11.4522 91.8782 11.2207 92.1358 11.0661C92.3935 10.9115 92.6927 10.8415 92.9918 10.866C93.2262 10.8483 93.4615 10.8838 93.6804 10.9699C93.8992 11.056 94.096 11.1905 94.2561 11.3634C94.4162 11.5363 94.5355 11.7432 94.6053 11.9687C94.675 12.1943 94.6934 12.4327 94.659 12.6664V15.8H93.7084V12.9063C93.7084 12.1284 93.3721 11.7415 92.669 11.7415C92.5099 11.7341 92.3511 11.7613 92.2034 11.8213C92.0557 11.8813 91.9227 11.9727 91.8135 12.0892C91.7042 12.2057 91.6214 12.3446 91.5705 12.4963C91.5197 12.6481 91.5021 12.809 91.5189 12.9682V15.8001H90.5684V10.9594Z"
                      fill="white"
                    ></path>
                    <path
                      d="M100.03 9.75424V10.9815H101.073V11.7861H100.03V14.2752C100.03 14.7823 100.238 15.0043 100.711 15.0043C100.832 15.0039 100.953 14.9966 101.073 14.9823V15.778C100.903 15.8087 100.73 15.825 100.556 15.8268C99.4991 15.8268 99.0781 15.4531 99.0781 14.5198V11.7861H98.3135V10.9814H99.0781V9.75424H100.03Z"
                      fill="white"
                    ></path>
                    <path
                      d="M102.372 9.06976H103.314V11.7373H103.389C103.516 11.4586 103.725 11.2257 103.987 11.0705C104.25 10.9154 104.554 10.8454 104.858 10.8702C105.091 10.8574 105.324 10.8966 105.541 10.9847C105.757 11.0729 105.951 11.208 106.11 11.3804C106.268 11.5528 106.387 11.7581 106.457 11.9819C106.528 12.2056 106.548 12.4422 106.517 12.6748V15.8001H105.565V12.9105C105.565 12.1373 105.207 11.7457 104.535 11.7457C104.372 11.7322 104.208 11.7548 104.054 11.8118C103.9 11.8689 103.761 11.959 103.645 12.0759C103.53 12.1928 103.441 12.3336 103.385 12.4886C103.33 12.6435 103.308 12.8088 103.323 12.9729V15.8H102.372L102.372 9.06976Z"
                      fill="white"
                    ></path>
                    <path
                      d="M112.059 14.4931C111.93 14.9355 111.65 15.3181 111.269 15.5742C110.887 15.8302 110.428 15.9432 109.972 15.8935C109.655 15.9019 109.339 15.8408 109.048 15.7145C108.756 15.5881 108.496 15.3996 108.284 15.1618C108.072 14.9241 107.915 14.6429 107.822 14.3378C107.729 14.0327 107.704 13.711 107.747 13.395C107.705 13.078 107.731 12.7555 107.823 12.4495C107.916 12.1435 108.073 11.861 108.283 11.6212C108.494 11.3814 108.753 11.1899 109.044 11.0596C109.335 10.9293 109.65 10.8633 109.968 10.866C111.308 10.866 112.117 11.7862 112.117 13.3062V13.6396H108.715V13.6931C108.701 13.8708 108.723 14.0496 108.781 14.2181C108.839 14.3866 108.931 14.5411 109.052 14.6716C109.172 14.8022 109.319 14.906 109.482 14.9763C109.645 15.0466 109.821 15.0818 109.998 15.0799C110.226 15.1073 110.456 15.0662 110.66 14.9617C110.864 14.8572 111.033 14.694 111.144 14.493L112.059 14.4931ZM108.715 12.9331H111.148C111.16 12.7706 111.138 12.6074 111.084 12.454C111.029 12.3006 110.943 12.1603 110.832 12.0422C110.72 11.9241 110.585 11.8308 110.435 11.7682C110.286 11.7057 110.125 11.6753 109.963 11.6791C109.798 11.677 109.635 11.708 109.483 11.7703C109.331 11.8326 109.192 11.9249 109.076 12.0418C108.96 12.1586 108.868 12.2977 108.806 12.4508C108.744 12.6038 108.713 12.7678 108.715 12.9331H108.715Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1347_18305">
                      <rect width="128" height="43" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <img className="google" src={images.google} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
