import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
    </div>
  );
};

export default Header;
