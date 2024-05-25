import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContex'



const Navbar = () => {

  const{openMenu,setOpenMenu} = useContext(StoreContext);

  const navigate = useNavigate();
  
  const navigateToCart = () =>{
    navigate('/cart');
  }

  const navigateToPayment = () =>{
    navigate('/payment');
  }

  const navigateHome = () =>{
    navigate('/');
  }


  return (
    <div className="navbar">
        <img onClick={navigateHome} id="navbar-logo" src={assets.logo} alt="" />
        <img onClick={()=>setOpenMenu(!openMenu)} className="openMenu" src={assets.open_menu} alt="" />
      <div className="navbar-right">
        <div className="navbar-right-icon hidden">
          <img src={assets.my_account} alt="" />
          <span>My account</span>
        </div>
        <div onClick={navigateToCart} id='cart-responsive' className="navbar-right-icon">
          <img src={assets.payment_method} alt="" />
          <span>Cart</span>
        </div>
        <div onClick={navigateToPayment} className="navbar-right-icon hidden">
          <img src={assets.arrowRight} alt="" />
          <span>Payment</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar