import React, { useContext } from "react";
import "./NavbarExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContex";
import { useNavigate } from "react-router-dom";

const NavbarExploreMenu = () => {
  const { category, setCategory, title, setTitle, model, setModel, openMenu, setOpenMenu } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    setCategory(item.category);
    setTitle(item.name);
    setModel("");
    navigate("/");
  };

  const handleModelClick = (modelItem) => {
    setModel(modelItem);
    navigate("/");
  };

  return (
    <div className={!openMenu ? "navbarExploreMenu" : "navbarExploreMenu active"}>
      <div className="navbarExploreMenu-list">
        <ul>
          {menu_list.map((item, index) => (
            <li
              onClick={() => handleMenuItemClick(item)}
              key={index}
              className="dropdown"
            >
              <a href="#" onClick={(e) => e.preventDefault()}>{item.name}</a>
              <ul className="dropdown-menu">
                {item.models.map((modelItem, modelIndex) => (
                  <li onClick={(e) => { e.stopPropagation(); handleModelClick(modelItem); }} key={modelIndex}>
                    {modelItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarExploreMenu;
