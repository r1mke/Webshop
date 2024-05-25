import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContex";
import { assets, mobile_list } from "../../assets/assets";
import Item from "../Item/Item";
import "./ExploreProducts.css";

const ExploreProducts = () => {
  const { title, category, model } = useContext(StoreContext);

  return (
    <div className="exploreProducts">
      <h2>{title}</h2>
      <div className="products">
        {mobile_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            if (model !== "") {
              if (model === item.brand) {
                return (
                  <Item
                    key={index}
                    id={item.id}
                    name={item.name}
                    brand={item.brand}
                    model={item.model}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                  />
                );
              }
            } else {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  model={item.model}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default ExploreProducts;
