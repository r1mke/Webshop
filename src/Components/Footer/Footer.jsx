import React from 'react'
import './Footer.css'
import { assets, menu_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContex'

const Footer = () => {

    const { category, setCategory, title, setTitle, model, setModel, openMenu, setOpenMenu } = useContext(StoreContext);

    const navigate = useNavigate();

    const handleMenuItemClick = (item) => {
        setCategory(item.category);
        setTitle(item.name);
        setModel("");
        navigate("/");
      };

  return (
    <div className='footer'>
        <img id='footer-logo' src={assets.logo} alt="" />
        <div className="footer-menu-list">
            <ul>
                {menu_list.map((item,index)=>{
                    return <li onClick={()=>handleMenuItemClick(item)} key={index}>{item.name}</li>
                })}
            </ul>
        </div>
        <div className="footer-social-icons">
            <a href="https://www.facebook.com/kerim.begic.969/"><img src={assets.facebook} alt="" /></a>
            <a href="https://www.instagram.com/r1mke/"><img src={assets.instagram} alt="" /></a>
            <a href=""><img src={assets.linkedin} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer