import React, { useState } from "react";

const MouseHover = ({ children }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = (status) => {
    setHover(status);
  };

  return (
    <div
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      {children(hover)}
    </div>
  );
};

export default MouseHover;
