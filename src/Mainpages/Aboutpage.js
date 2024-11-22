import React from 'react'
import Navbar from '../Componentes/Navbar/Navbar'
import Iteam from '../Componentes/Iteam/Iteam'
import BannerC from '../Componentes/Current/BannerC'
import CardSix from '../Componentes/About/CardSix'
import BuySell from '../Componentes/BuySell/BuySell'
import FAQquestion from '../Componentes/Aboutfaq/Faqabout'
import Shoes from '../Componentes/Shoes/Shoes'
import Footer from '../Componentes/Footer/Footer'
function Aboutpage() {
  return (
    <div>
      <Navbar/>
      <Iteam/>
      <BannerC/>
      <CardSix/>
      
      <BuySell/>
      <FAQquestion/>
      <Shoes/>
      <Footer/>
    </div>
  )
}

export default Aboutpage
