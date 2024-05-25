import React, { useContext } from 'react'
import { assets, mobile_list } from './assets/assets'
import Navbar from './Components/Navbar/Navbar'
import NavbarExploreMenu from './Components/NavbarExploreMenu/NavbarExploreMenu'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Product from './Pages/Product/Product'
import Modal from './Components/Modal/Modal'
import { StoreContext } from './StoreContext/StoreContex'
import Payment from './Pages/Payment/Payment'

const App = () => {

  const{showModal, setShowModal} = useContext(StoreContext);

  return (
    <div className="app-container">
      {showModal?<Modal/>:<></>}
      <Navbar />
      <NavbarExploreMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App