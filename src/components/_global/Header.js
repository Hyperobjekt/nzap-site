import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from 'antd';
import styles from "../../_styles/_stylesGuide";
import './Header.scss';

const Header = () => {
  const sg = styles();
  const activeStyle = { color: sg.colors.primary };
  const [drawOpen, toggleDraw] = useState(false)

  const closeDraw = () => {
    toggleDraw(!drawOpen)
  }

  return (
    <div className="container-fluid nzap-header">
      <Drawer placement='right' closable={false} onClose={closeDraw} visible={drawOpen} key='right'>
        <div className="d-block text-right mt-5 pt-5">
          <ul className="draw pt-5">
            <li className="pt-3"><NavLink className="pr-2 pl-2" to="/about" activeStyle={activeStyle} exact>About</NavLink></li>
            <li className="pt-3"><NavLink className="pr-2 pl-2" to="/the-report" activeStyle={activeStyle} exact>The Report</NavLink></li>
            <li className="pt-3"><NavLink className="pr-2 pl-2" to="/fact-sheet" activeStyle={activeStyle} exact>Fact Sheets</NavLink></li>
            <li className="pt-3"><NavLink className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Media</NavLink></li>
            <li className="pt-3"><NavLink className="pl-2" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink></li>
          </ul>
        </div>
      </Drawer>
      <div className="row">
        <div className={drawOpen ? "col-12 header-fixed open" : "col-12 header-fixed"}>
          <div className="container">
            <div className="row py-2 pt-md-3 pb-md-3">
              <div className="col-8 pl-0 col-md-3 col-lg-4 d-flex align-items-center project-title">
                <NavLink className="pr-2 pl-md-2" to="/" exact>NET-ZERO AMERICA</NavLink>
              </div>
              <div className="col-4 d-md-none text-right col-4 d-flex justify-content-end align-items-center d-md-none text-right">
                <div className="d-inline-block">
                  <div role="button" tabIndex={0} className={drawOpen ? 'nav-icon tween position-relative active' : 'nav-icon tween position-relative'} onKeyDown={() => { toggleDraw(!drawOpen) }} onClick={() => { toggleDraw(!drawOpen) }}>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="d-none d-md-block col-md-9 col-lg-8 text-right">
                <nav aria-label="header-navigation" className="nzap-navigation" role="navigation">
                  <NavLink className="pr-2 pl-2" to="/about" activeStyle={activeStyle} exact>About</NavLink>
                  <NavLink className="pr-2 pl-2" to="/the-report" activeStyle={activeStyle} exact>The Report</NavLink>
                  <NavLink className="pr-2 pl-2" to="/fact-sheet" activeStyle={activeStyle} exact>Fact Sheets</NavLink>
                  <NavLink className="pr-2 pl-2" to="/media" activeStyle={activeStyle} exact>Media</NavLink>
                  <NavLink className="pl-2" to="/publications" activeStyle={activeStyle} exact>Publications</NavLink>
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
