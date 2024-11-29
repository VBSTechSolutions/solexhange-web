import React from 'react'
import Navbar from '../Componentes/Navbar/Navbar'
import Iteam from '../Componentes/Iteam/Iteam'
import New from '../Componentes/New/New'
import Newtow from '../Componentes/New/Newtow'
import Newsthree from '../Componentes/New/Newsthree'
import Footer from '../Componentes/Footer/Footer'
import Newsbanner from '../Componentes/New/Newsbanner'

function Newspage() {
  return (
    <div>
        <Navbar/>
        <Iteam/>
        <New/>
        <Newtow/>
        <Newsbanner/>  
        <Newsthree/>
      
        <Footer/>
      
    </div>
  )
}

export default Newspage
