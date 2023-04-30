import React from "react";

function Navbar() {
  return (
    <nav className="navbar flex jcSb">
      <div className="flex atc nav-logo-cont">
        <img src="logo.png" />
        <ul className="flex atc nav-ul">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex atc">
        <img src="icon-cart.png" />
        <img src="image-avatar.png" className="nav-dp-img"/>
      </div>
    </nav>
  );
}

export default Navbar;
