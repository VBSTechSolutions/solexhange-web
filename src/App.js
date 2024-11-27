import React from 'react'

import { Routes , Route } from 'react-router-dom'
import Landinpage from './Mainpages/Landinpage'
import Aboutpage from './Mainpages/Aboutpage'
import Helppage from './Mainpages/Helppage'
import SingUpFrom from '../src/Componentes/SignUpForm/SignUpForm'
import Cartadd from './Componentes/Cart2/Cartadd'
import Login from './Componentes/Login/Login'
import Search from './Componentes/Search/Search'

import Newspage from './Mainpages/Newspage'

function App() {
  return (
    <div>



      <div>
        {/* <Aboutpage/> */}
        <Routes>
        <Route>
          <Route path='/' element ={<Landinpage/>}/>
          <Route path='/about' element ={<Aboutpage/>}/>    
          <Route path='/help' element ={<Helppage/>}/>
          <Route path='/sing' element ={<SingUpFrom/>}/>        
          <Route path='/cartadd' element ={<Cartadd/>}/>     
          <Route path='/SingUpFrom' element ={<SingUpFrom/>}/>  
          <Route path='/Login' element ={<Login/>}/>  
          <Route path='/search' element ={<Search/>}/>  
          <Route path='/News' element ={<Newspage/>}/>  

           
       
          </Route>
        </Routes>
       
        {/* <Products/> */}
        
        
      </div>
      
      
      
    </div>
  )
}

export default App
