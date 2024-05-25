import React from "react";
import "./GoBack.css";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const GoBack = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate(-1);
  };
  return (
    <div onClick={backToHome} className="back-to-home">
      <img src={assets.arrow} alt="" />
      <span>Go Back</span>
    </div>
  );
};

export default GoBack;
