import React from 'react'
import './Footer.css'
import { assets, menu_list } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <img id='footer-logo' src={assets.logo} alt="" />
        <div className="footer-menu-list">
            <ul>
                {menu_list.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
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