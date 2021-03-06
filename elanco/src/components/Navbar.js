import React from "react";
import logo from "../images/Logo.png";
import { links } from "../data";
const Navbar = () => {
  return (
    <nav>
      <img
        style={{ cursor: "pointer" }}
        src={logo}
        alt="Elanco Logo"
        onClick={() => {
          window.location.href = `/`;
        }}
      />
      {links.map((link) => {
        return (
          <a key={link.id} href={link.link}>
            <span>{link.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
