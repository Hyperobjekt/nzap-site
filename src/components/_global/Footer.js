import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../_styles/_stylesGuide";
import primcetonLogo from '../../assets/images/footer/princeton-logo.svg'
import './Footer.scss';

const Footer = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  return (
    <div className="container mt-5 nzap-footer">
      <div className="row pt-3 pb-5">
        <div className="col-4 pl-1 pr-1 footer-logo">
          <img src={primcetonLogo} alt="" />
        </div>
        <div className="col-8 pl-1 pr-1 pt-2 text-right d-none">
          <nav className="footer-navigation">
            <NavLink className="pr-2 pl-2" to="/#explore" activeStyle={activeStyle} exact>Legal</NavLink> |
            <NavLink className="pr-2 pl-2" to="/publications" activeStyle={activeStyle} exact>Contact</NavLink>|
            <NavLink className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Copyright</NavLink>
          </nav>
        </div>
      </div>
    </div>

  );
};

export default Footer;
