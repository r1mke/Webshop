import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Item = ({id,name,brand,model,price, description, category, image}) => {

  const navigate = useNavigate();

  const handleItemClick=(id)=>{
    navigate(`/product/${id}`);
  }

  return (
    <div  className="item">
      <div className="item-container">
        <img onClick={()=>handleItemClick(id)}   src={image} alt="" />
        <div className="item-info">
          <p>{brand}</p>
          <p>${price}</p>
        </div>
          <p className='phone-model'>{model}</p>
      </div>
      <button onClick={()=>handleItemClick(id)} id='button-view-details'>DETAILS</button>
    </div>
  );
}

export default Item