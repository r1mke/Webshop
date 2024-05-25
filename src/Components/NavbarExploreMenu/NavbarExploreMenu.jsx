import React, { useContext } from "react";
import "./NavbarExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContex";
import { useNavigate } from "react-router-dom";
const NavbarExploreMenu = () => {

  const {category, setCategory, title, setTitle, model, setModel, openMenu, setOpenMenu } = useContext(StoreContext);

  const navigate = useNavigate();

  const menuItemClick = (item) =>{
    if (category !== item.category) {
      setCategory(item.category);
    }
    if (title !== item.name) {
      setTitle(item.name);
    }
    if(model!==""){
      setModel("");
    }

    navigate("/")
  }

  return (
    <div className={!openMenu? "navbarExploreMenu" : "navbarExploreMenu active"}>
      
      <div className="navbarExploreMenu-list">
        <ul>
          {menu_list.map((item, index) => {
            return (
              <li
                onClick={()=>menuItemClick(item)}
                key={index}
                className="dropdown"
              >
                <a onClick={(e)=>e.preventDefault()} href="">{item.name}</a>
                <ul className="dropdown-menu">
                  {item.models.map((item, index) => {
                    return <li onClick={()=>setModel(item)} key={index}>{item}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    
  );
};

export default NavbarExploreMenu;
