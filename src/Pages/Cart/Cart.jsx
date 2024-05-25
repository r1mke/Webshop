import React from "react";
import "./Cart.css";
import GoBack from "../../Components/GoBack/GoBack";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContex";
import { mobile_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, removeFromCart, addOneItem, removeOneItem,cartTotal } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const goToPayment = () =>{
    navigate('/payment');
  }

  return (
    <div className="Cart">
      {<GoBack />}
      <div className="cart-container">
        <div className="cart-header">
          <h2>Cart</h2>
        </div>
        {Object.keys(cartItems).length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-items">
            {Object.keys(cartItems).map((item, index) => {
              const product = mobile_list.find(
                (p) => p.id === parseInt(item, 10)
              );
              return (
                
                  <div key={index} className="cart-item">
                    <div className="cart-item-left">
                      <img
                        onClick={() => goToProduct(product.id)}
                        src={product.image}
                        alt=""
                      />
                      <span>
                        {product.brand} <br /> {product.model}
                      </span>
                    </div>
                    <div className="quantity-control">
                      <p
                        onClick={() => addOneItem(product.id)}
                        className="sign"
                      >
                        +
                      </p>
                      <p className="quantity">{cartItems[item]}</p>
                      <p
                        onClick={() => removeOneItem(product.id)}
                        className="sign"
                      >
                        -
                      </p>
                    </div>
                    <div className="cart-item-right">
                      <span>${cartItems[item] * product.price}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="button-delete"
                    >
                      Remove
                    </button>
                  </div>
                
              );
            })}
          </div>
        )}
        {
          Object.keys(cartItems)!==0 ? (
            <div className="payment-button">
          <button onClick={goToPayment} id="paymentbutton">Proceed to checkout</button>
          <p>Your cart: ${cartTotal()}</p>
        </div>
          ) : (<></>)
        }
        
      </div>
    </div>
  );
};

export default Cart;
