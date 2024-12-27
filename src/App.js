import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import OTPVerification from './Componentes/OTPVerification/OTPVerification';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === "'true'"
  );

  // Effect to sync with localStorage changes (if needed)
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === "'true'";
    if (authStatus !== isAuthenticated) {
      setIsAuthenticated(authStatus);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Landinpage /> : <Navigate to="/verify-otp" />}
      />
      <Route
        path="/verify-otp"
        element={
          isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <OTPVerification onAuthenticate={() => setIsAuthenticated(true)} />
          )
        }
      />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/help" element={<Helppage />} />
      <Route path="/sing" element={<SingUpForm />} />
      <Route path="/cartadd/:name" element={<Cartadd />} />
      <Route path="/SingUpFrom" element={<SingUpForm />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/News" element={<Newspage />} />
      <Route path="/Sell" element={<Sell />} />
      <Route path="/sneaker-products" element={<SneakerProducts />} />
    </Routes>
  );
};

export default App;
