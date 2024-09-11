import React from "react";
import { NavLink } from "react-router-dom";
import DeepShieldLogo from "../assets/DeepShieldLogo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header" data-aos="fade-up">
      <div className="logo">
        <img
          src={DeepShieldLogo}
          alt=""
          style={{ width: "60px", paddingTop: "10px" }}
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/stats"}>Stats</NavLink>
          </li>
          <li>
            <NavLink to={"/mission"}>Mission</NavLink>
          </li>
          <li>
            <NavLink to={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"/features"}>Features</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
