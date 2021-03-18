import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../_styles/_stylesGuide";
import primcetonLogo from '../../assets/images/footer/princeton-logo.svg'
import ccIcon from '../../assets/images/icons/cc-by-nc.svg'
import './Footer.scss';

const Footer = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  return (
    <div className="container mt-5 nzap-footer">
      <div className="row pt-3 pb-5 flex-column-reverse flex-md-row">
        <div className="col-md-3 mx-md-0 pt-5 pt-md-0 pl-md-1 pr-md-1 footer-logo">
          <img src={primcetonLogo} className="d-block mx-auto mx-md-0" alt="" />
        </div>
        <div className="col-md-9 px-0 py-0 py-md-2 text-right">
          <nav className="footer-navigation d-flex justify-content-center justify-content-md-end d-md-block flex-wrap">
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/" activeStyle={activeStyle} exact>Home</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/about" activeStyle={activeStyle} exact>About</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/the-report" activeStyle={activeStyle} exact>The Report</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/fact-sheet" activeStyle={activeStyle} exact>Fact Sheets</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/media" activeStyle={activeStyle} exact>Media</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 px-md-2 px-lg-3" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink>
            <NavLink className="pt-3 pt-md-0 px-3 pr-md-0 pl-md-2 pl-lg-3" to="/contact" activeStyle={activeStyle} exact>Contact</NavLink>
          </nav>
        </div>
      </div>
      <div className="nzap-footer__cc row pb-5">
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="d-block pt-4 pt-md-0 mx-auto mr-md-0">
          <img src={ccIcon} className="" alt="Creative Commons Attribution-NonCommercial" />
        </a>
      </div>
    </div>

  );
};

export default Footer;
