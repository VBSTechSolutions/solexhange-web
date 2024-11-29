import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";
import Banner from "../Componentes/Banner/Banner";
import Items from "../Componentes/Iteam/Iteam";
// import Recently from '../Componentes/Recently/Recently'
import Card from "../Componentes/Card/Card";
import Banner2 from "../Componentes/Banner2/Carsoul";
import Footer from "../Componentes/Footer/Footer";

import Cardpass from "../Componentes/Card/Cardpass";
import StockXVerified from "../Componentes/StockX Verified/StockXVerified";
import BrowseMoreBrands from "../Componentes/Browse MoreBrands/browseMoreBrands";
import Newsbanner from "../Componentes/New/Newsbanner";

function Landinpage() {
  return (
    <div>
      <Navbar />
      <Items />
    
      <Banner />
  
      {/* <Recently/> */}
      <Cardpass />
    
        <Card />
    
      <Banner2 />
      <BrowseMoreBrands/>
      <Newsbanner/>
      <StockXVerified/>
      <Footer />
    </div>
  );
}

export default Landinpage;
