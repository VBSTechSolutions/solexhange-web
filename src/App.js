import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landinpage from './Mainpages/Landinpage';
import Aboutpage from './Mainpages/Aboutpage';
import Helppage from './Mainpages/Helppage';
import SingUpForm from './Componentes/SignUpForm/SignUpForm';
import Cartadd from './Componentes/Cart2/Cartadd';
import Login from './Componentes/Login/Login';
import Search from './Componentes/Search/Search';
import Newspage from './Mainpages/Newspage';
import Sell from './Componentes/Sell/Sell';
import SneakerProducts from './Componentes/SneakerProducts/SneakerProducts';
import Alphbates from './Componentes/Alphbates/Alphbates';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landinpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/help" element={<Helppage />} />
        <Route path="/sing" element={<SingUpForm />} />
        <Route path="/cartadd/:name" element={<Cartadd />} />  {/* Dynamic route for Cartadd */}
        <Route path="/SingUpFrom" element={<SingUpForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/News" element={<Newspage />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/sneaker-products" element={<SneakerProducts />} />
        
      </Routes>
      <Alphbates/>

    
    </div>

    
  );
}

export default App;
