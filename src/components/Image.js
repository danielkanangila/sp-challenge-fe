import React from "react";
import unnamed from "./../assets/unnamed.png";

const Image = ({ source, alt }) => {
  return <img src={source || unnamed} alt={alt} />;
};

export default Image;
