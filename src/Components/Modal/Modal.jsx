import React from "react";
import "./Modal.css";
import { assets } from "../../assets/assets";
import "animate.css";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContex";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const { showModal, setShowModal, modalInfo } = useContext(StoreContext);

  const navigate = useNavigate();

  const goToCart=()=>{
    navigate('/cart');
    setShowModal(false);
  }

  const goToPayment=()=>{
    navigate('/payment');
    setShowModal(false);
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="close-div">
          <img onClick={() => setShowModal(false)} src={assets.close} alt="" />
        </div>
        {modalInfo.length === 2 ? (
          <>
            <div className="addtoCart-image">
              <img className="addtocart" src={assets.added_to_cart} alt="" />
            </div>
            <p>
              <b>
                {" "}
                "{modalInfo[0]} {modalInfo[1]}"{" "}
              </b>{" "}
              has been added to your cart.
            </p>
            <div className="modal-options">
              <button onClick={goToCart}>View cart</button>
              <button onClick={goToPayment}>Payment</button>
            </div>
          </>
        ) : (
          <div className="modal-error">
            <p>{modalInfo[0]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
