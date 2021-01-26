import React from "react";
import introImage from '../../assets/images/the-report/intro-image.jpg';
import reportCoverImage from '../../assets/images/the-report/report-cover.png';
import blockquoteIcon from '../../assets/images/icons/blockquote.svg'

import './TheReport.scss';
import { Download } from "react-bootstrap-icons";

const TheReportPage = () => (
  <div className="container pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-7 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle">Download The Report</div>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-block pr-3 pt-4 introduction">
                  <p className="pt-md-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum? Repellendus impedit ab cum fugit ea delectus similique, reiciendis autem maxime repudiandae velit quis temporibus sunt nisi cumque laudantium?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum? Repellendus impedit ab cum fugit ea delectus similique, reiciendis autem maxime repudiandae velit quis temporibus sunt nisi cumque laudantium?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-11 pl-3 pr-5 pt-2 pt-md-4 pb-5 quotable">

            <div className="d-none d-md-inline-block icon-holder align-top pt-2">
              <img src={blockquoteIcon} alt="" />
            </div>
            <div className="d-inline-block quote-holder pl-md-4">
              <div className="d-block quote">
                “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eveniet unde ipsam! Quibusdam, dicta ratione perferendis explicabo ea quaerat praesentium voluptas alias aspernatur quo architecto labore, sequi, accusamus sed aliquid.”
            </div>
              <div className="d-block pt-2 by">
                <span><b>Lorem I. Dolor,</b> <br className="d-md-none d-block" />Lorem ipsum dolor, sit amet consectetur.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="row">
      <div className="col-12 pt-3">
        <img className="w-100 d-block" src={reportCoverImage} alt="" />
      </div>
      <div className="col-12 pt-4">
        <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the Full Report </span><Download className="" /></button>
      </div>
      <div className="col-12 pt-5">
        <div className="row">
          <div className="col-12 annexes-label">Download the Annexes</div>
        </div>
        <div className="row annexes">
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex A.1 (NZA)</div>
            <div className="d-block pb-1 title">Evolved Energy Research final report</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex A.2 (NZA)</div>
            <div className="d-block pb-1 title">Technical appendix to EER final report</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex A.3 (NZA)</div>
            <div className="d-block pb-1 title">Inputs catalog for EER modeling</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex D (NZA)</div>
            <div className="d-block pb-1 title">Solar and wind generation transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex E (NZA)</div>
            <div className="d-block pb-1 title">Thermal power plants transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex F (NZA)</div>
            <div className="d-block pb-1 title">Electricity transmission</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex G (NZA)</div>
            <div className="d-block pb-1 title">Electricity distribution transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex H (NZA)</div>
            <div className="d-block pb-1 title">Bioenergy transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex I (NZA)</div>
            <div className="d-block pb-1 title">CO2 Transport and Storage Transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex J (NZA)</div>
            <div className="d-block pb-1 title">Iron & steet industry transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex K (NZA)</div>
            <div className="d-block pb-1 title">Cement Industry Transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex L (NZA)</div>
            <div className="d-block pb-1 title">Mobilizing Capital</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex M (NZA)</div>
            <div className="d-block pb-1 title">Mobilizing Capital</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex N (NZA)</div>
            <div className="d-block pb-1 title">Fossil fuels transition</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex O (NZA)</div>
            <div className="d-block pb-1 title">Non-CO2 emissions</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex P (NZA)</div>
            <div className="d-block pb-1 title">Past and Prospective Changes in the Net CO2 Flux of US Forests</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex Q (NZA)</div>
            <div className="d-block pb-1 title">Agricultural sink potentials</div>
            <div className="d-block button-holder">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default TheReportPage;
