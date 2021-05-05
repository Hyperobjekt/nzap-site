import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from 'antd';
import styles from "../../_styles/_stylesGuide";
import './Header.scss';
require('../../assets/images/home/nza-social.png');
 
const Header = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  const [drawOpen, toggleDraw] = useState(false)

  const closeDraw = () => {
    toggleDraw(!drawOpen)
  }

  return (
    <div className="container-fluid nzap-header">
      <div className="row">
        <div className={drawOpen ? "col-12 nzap-shadow header-fixed open" : "col-12 nzap-shadow header-fixed"}>
          <div className="container">
            <div className="row py-2 pt-md-3 pb-md-3">
              <div className="col-8 pl-0 col-md-3 col-lg-4 d-flex align-items-center project-title">
                <NavLink className="pr-2 pl-md-2" to="/" exact>NET-ZERO AMERICA</NavLink>
              </div>
              <div className="col-4 d-md-none text-right col-4 d-flex justify-content-end align-items-center d-md-none text-right">
                <div className="d-inline-block">
                  <div
                    role="button"
                    tabIndex={0}
                    className={drawOpen ? 'nav-icon tween position-relative active' : 'nav-icon tween position-relative'}
                    onKeyDown={() => { toggleDraw(!drawOpen) }}
                    onClick={() => { toggleDraw(!drawOpen) }}>
                    <div></div>
                  </div>
                </div>
                <Drawer scrolllocker="true" placement='right' closable={false} onClose={closeDraw} visible={drawOpen} key='right'>
                  <div className="d-block text-right">
                    <div className="d-inline-block">
                      <div
                        role="button"
                        tabIndex={0}
                        className={drawOpen ? 'nav-icon tween position-relative active' : 'nav-icon tween position-relative'}
                        onKeyDown={() => { toggleDraw(!drawOpen) }}
                        onClick={() => { toggleDraw(!drawOpen) }}>
                        <div></div>
                      </div>
                    </div>
                    <ul className="draw pt-5">
                      <li className="pt-3">
                        <NavLink 
                        onClick={closeDraw} 
                        className="pr-2 pl-2" 
                        to="#explore" 
                        activeStyle={activeStyle} 
                        exact 
                        isActive={(_, location) => location.hash === "#explore"}>Explore Data</NavLink>
                      </li>
                      <li className="pt-3"><NavLink onClick={closeDraw} className="pr-2 pl-2" to="/about" activeStyle={activeStyle} exact>About</NavLink></li>
                      <li className="pt-3"><NavLink onClick={closeDraw} className="pr-2 pl-2" to="/the-report" activeStyle={activeStyle} exact>The Report</NavLink></li>
                      <li className="pt-3"><NavLink onClick={closeDraw} className="pr-2 pl-2" to="/fact-sheet" activeStyle={activeStyle} exact>Fact Sheets</NavLink></li>
                      <li className="pt-3"><NavLink onClick={closeDraw} className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Media</NavLink></li>
                      <li className="pt-3"><NavLink onClick={closeDraw} className="pl-2" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink></li>
                    </ul>
                  </div>
                </Drawer>
              </div>

              <div className="d-none d-md-block col-md-9 col-lg-8 text-right pr-0">
                <nav aria-label="header-navigation" className="nzap-navigation" role="navigation">
                  <ul>
                    <li>
                      <a 
                      className="pr-2 pl-2" 
                      href="/#explore" 
                      activeStyle={activeStyle} 
                      exact 
                      isActive={(_, location) => location.hash === "#explore"}>Explore Data</a>
                    </li>
                    <li><NavLink className="pr-2 pl-2" to="/about" activeStyle={activeStyle} exact>About</NavLink></li>
                    <li><NavLink className="pr-2 pl-2" to="/the-report" activeStyle={activeStyle} exact>The Report</NavLink></li>
                    <li><NavLink className="pr-2 pl-2" to="/fact-sheet" activeStyle={activeStyle} exact>Fact Sheets</NavLink></li>
                    <li><NavLink className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Media</NavLink></li>
                    <li><NavLink className="pl-2" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
