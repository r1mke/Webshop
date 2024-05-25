import React, { createContext, useState } from "react";
import { mobile_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContexProvider = (props) => {
  const [category, setCategory] = useState("All");

  const [title, setTitle] = useState("Mobile Phones");

  const [model, setModel] = useState("");

  const [cartItems, setCartItems] = useState({});

  const [showModal, setShowModal] = useState(false);

  const[modalInfo, setModalInfo] = useState([]);

  const[openMenu,setOpenMenu] = useState(false);

  const getProductById = (id) => {
    const numericId = parseInt(id, 10);
    return mobile_list.find((p) => p.id === numericId);
  };

  const addToCart = (id, quantity) => {
    if(!cartItems[id]){
    setCartItems((prev) => ({ ...prev, [id]: quantity }));
    } else{
      setCartItems((prev) => ({ ...prev, [id]: prev[id]+quantity }));
    }

  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const newItems = {...prev};
      delete newItems[id];
      return newItems;
    });
  };


  const addOneItem = (id)=>{
    setCartItems((prev)=>({...prev, [id]:prev[id]+1}))
  }

  const removeOneItem =(id)=>{
    if(cartItems[id]===1){
      removeFromCart(id);
    } else{
      setCartItems((prev)=>({...prev, [id]:prev[id]-1}));
    }
  }

  const cartTotal = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = mobile_list.find(p => p.id === parseInt(id, 10));
      if (product) {
        total += product.price * cartItems[id];
      }
    }
    return total;
  };
 

  const contextValue = {
    category,
    setCategory,
    title,
    setTitle,
    model,
    setModel,
    getProductById,
    addToCart,
    removeFromCart,
    cartItems,
    showModal,
    setShowModal,
    modalInfo,
    setModalInfo,
    addOneItem,
    removeOneItem,
    cartTotal,
    openMenu,
    setOpenMenu
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
