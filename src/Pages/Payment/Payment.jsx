import React from "react";
import GoBack from "../../Components/GoBack/GoBack";
import "./Payment.css";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContex";

const Payment = () => {
    
  const { cartTotal } = useContext(StoreContext);

  return (
    <div className="payment">
      <GoBack />

      <div className="payment-container">
        <div className="payment-left">
        <h2>Delivery information</h2>

        <div className="basic-info">
          <div className="info">
            <label htmlFor="">First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="info">
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="info">
          <label htmlFor="">Country</label>
          <input type="text" placeholder="Country" />
        </div>
        <div className="info">
          <label htmlFor="">City</label>
          <input type="text" placeholder="City" />
        </div>
        <div className="info">
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="Phone" />
        </div>
      </div>
      <div className="payment-right">

        <h3>Summary</h3>
      
      <div className="cart-summary">
        <div className="summary-info">
          <p>Total</p>
          <p>{cartTotal()}</p>
        </div>
        <div className="summary-info">
          <p>Delivery fee</p>
          <p>$5</p>
        </div>
        <div className="summary-info">
          <p>Subtotal</p>
          <p>${cartTotal() +5}</p>
        </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Payment;
