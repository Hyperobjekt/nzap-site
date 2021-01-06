import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../_stylesGuide";

const Header = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  return (
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-4 project-title">
          Net Zero America Project
        </div>
        <div className="col-8 text-right">
          <nav>
            <NavLink className="pr-2 pl-2" to="/" activeStyle={activeStyle} exact>Publications</NavLink>
            <NavLink className="pr-2 pl-2" to="/explore" activeStyle={activeStyle}>Media</NavLink>
            <NavLink className="pl-2" to="/explore" activeStyle={activeStyle}>About</NavLink>
          </nav>
        </div>
      </div>
    </div>

  );
};

export default Header;
