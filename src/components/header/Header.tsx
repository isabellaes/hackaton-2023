import React from "react";
import menu from "../../assets/menu-icon.png";
import logga from "../../assets/simple-wind-rose.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img className="hamburger-img" src={menu} alt="hamburger" />
        <div className="title">
          <h1>Aktivitetskompassen</h1>
          <h2>Borås</h2>
        </div>
        <img className="compass-img" src={logga} alt="compass" />
      </div>
    </div>
  );
};

export default Header;
