import React from 'react'
import Navbar from '../Componentes/Navbar/Navbar'
import Banner4 from '../Componentes/Helpbanner/Banner4'
import FAQ from '../Componentes/PouplarFAQ/FAQ'
import Customre from '../Componentes/Customre/Customre'
import Help from '../Componentes/Help/Help'


function Helppage() {
  return (
    <div>
      <Navbar/>
      <Banner4/>
      <Help/>
    <FAQ/>
    <Customre/>
    </div>
  )
}

export default Helppage
