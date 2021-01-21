import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../_styles/_stylesGuide";
import './Header.scss';

const Header = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  return (
    <div className="container-fluid nzap-header">
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row pt-2 pb-5">
              <div className="col-4 project-title">
                <NavLink className="pr-2 pl-2" to="/" exact>NET-ZERO AMERICA</NavLink>
              </div>
              <div className="col-8 text-right">
                <nav className="nzap-navigation">
                  <NavLink className="pr-2 pl-2" to="/#explore" activeStyle={activeStyle} exact>Explore the Data</NavLink>
                  <NavLink className="pr-2 pl-2" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink>
                  <NavLink className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Media</NavLink>
                  <NavLink className="pl-2" to="/about" activeStyle={activeStyle} exact>About</NavLink>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
