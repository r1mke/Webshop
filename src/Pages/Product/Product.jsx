import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { StoreContext } from "../../StoreContext/StoreContex";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import GoBack from "../../Components/GoBack/GoBack";

const Product = () => {
  const { getProductById, addToCart, cartItems, setShowModal, setModalInfo } =
    useContext(StoreContext);

  const { id } = useParams();

  const product = getProductById(id);

  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity) {
      addToCart(id, quantity);
      setShowModal(true);
      setModalInfo([product.brand, product.model]);
    } else {
      setModalInfo(["Choose the quantity!"]);
      setShowModal(true);
    }
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  return (
    <div className="product">
      {<GoBack />}
      <div className="product-container">
        <img src={product.image} alt="" />
        <div className="product-info">
          <div className="product-info-name-brand">
            <h2>
              {product.brand} {product.model}
            </h2>
            <span>${product.price}</span>
          </div>
          {/* <p>Opis</p> */}
          <div className="button-add-product">
            <input
              defaultValue={0}
              min={0}
              type="number"
              id="product-quantity"
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />

            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
