import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Awash</NavLink> {/* hamne yeha per isiliye NavLink ka use kiya hai kyuki iske andar ek active class hoti hai jisese hum pta chalta haiki abhi hum kaun se page per hai  */}
        </li>
        <li>
          <NavLink to="/Abhishek">Abhishek</NavLink>
        </li>
        <li>
          <NavLink to="/Anjali">Anjali</NavLink>
        </li>
        <li>
          <NavLink to="/Jyoti">Jyoti</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
