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
          <div className="col-12 col-lg-10 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-8 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>Download The Report</h1></div>
              </div>
              <div className="col-12 col-md-4 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-11">
                <div className="d-block pr-3 pt-4 introduction">
                  <p className="pt-md-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum? Repellendus impedit ab cum fugit ea delectus similique, reiciendis autem maxime repudiandae velit quis temporibus sunt nisi cumque laudantium?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum? Repellendus impedit ab cum fugit ea delectus similique, reiciendis autem maxime repudiandae velit quis temporibus sunt nisi cumque laudantium?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-none col-12 col-md-11 pl-3 pr-5 pt-2 pt-md-4 pb-5 quotable">

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
      <div className="col-12 pt-4">
        <img className="w-100 d-block" src={reportCoverImage} alt="" />
      </div>
      <div className="col-12 pt-4">
        <a target="blank" rel="noopener noreferrer" href="https://environmenthalfcentury.princeton.edu/sites/g/files/toruqf331/files/2020-12/Princeton_NZA_Interim_Report_15_Dec_2020_FINAL.pdf" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the Full Report </span><Download className="" /></a>
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
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAAGUH4MxiNjHduvpyeTOcToa/Princeton%20NZA%20Annexes/Annex%20A.1%20%28NZA%29.%20EvolvedEnergyResearch%20final%20report%20%28June%202020%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex A.2 (NZA)</div>
            <div className="d-block pb-1 title">Technical appendix to EER final report</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AABnmD1InjEiUtf4QpK1sDtsa/Princeton%20NZA%20Annexes/Annex%20A.2%20%28NZA%29.%20Technical%20appendix%20to%20EER%20final%20report.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex A.3 (NZA)</div>
            <div className="d-block pb-1 title">Inputs catalog for EER modeling</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AADitXzZ1wZLBpE6T5VWy3NHa/Princeton%20NZA%20Annexes/Annex%20A.3%20%28NZA%29.%20Inputs%20catalog%20for%20EER%20modeling.xlsx?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex D (NZA)</div>
            <div className="d-block pb-1 title">Solar and wind generation transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAApHESr8f_07VUYeTM4KRtha/Princeton%20NZA%20Annexes/Annex%20D%20%28NZA%29.%20Solar%20and%20wind%20generation%20transition%20%2821-01-05%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex E (NZA)</div>
            <div className="d-block pb-1 title">Thermal power plants transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AABbSLDaksLrk8ViJPROFhfJa/Princeton%20NZA%20Annexes/Annex%20E%20%28NZA%29.%20Thermal%20power%20plants%20transition%20DRAFT%20%2820-12-21%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex F (NZA)</div>
            <div className="d-block pb-1 title">Electricity transmission</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAAvIdaDeEE0Eu3ivOzI9-Ywa/Princeton%20NZA%20Annexes/Annex%20F%20%28NZA%29.%20Electricity%20transmission%20%282020-12-02%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex G (NZA)</div>
            <div className="d-block pb-1 title">Electricity distribution transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AACH65NQo40WYaTrXJMwuB70a/Princeton%20NZA%20Annexes/Annex%20G%20%28NZA%29.%20Electricity%20distribution%20transition%20DRAFT%20%2811-25-20%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex H (NZA)</div>
            <div className="d-block pb-1 title">Bioenergy transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAAg8PWdUVvCjM0b3ssVAaW9a/Princeton%20NZA%20Annexes/Annex%20H%20%28NZA%29.%20Bioenergy%20transition%20DRAFT%20%2811-7-20%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex I (NZA)</div>
            <div className="d-block pb-1 title">CO2 Transport and Storage Transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAD7eNeyMnecMz1EMU-c7kMDa/Princeton%20NZA%20Annexes/Annex%20I%20%28NZA%29.%20CO2%20Transport%20and%20StorageTransition%20DRAFT%202020-12-13.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex J (NZA)</div>
            <div className="d-block pb-1 title">Iron & steel industry transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AADviXfjElTqlHAztK9WFVVHa/Princeton%20NZA%20Annexes/Annex%20J%20%28NZA%29.%20Iron%20%26%20steel%20industry%20transition%20DRAFT%20%2811-23-22%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex K (NZA)</div>
            <div className="d-block pb-1 title">Cement Industry Transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AACZUS7Srsd9jHDT4yB670Ica/Princeton%20NZA%20Annexes/Annex%20K%20%28NZA%29.%20Cement%20Industry%20Transition%20DRAFT%202020-12-02.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex d-none">
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
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAC8UgprAudgl7cg8dsBlOrXa/Princeton%20NZA%20Annexes/Annex%20M%20%28NZA%29.%20Mobilizing%20Capital%20DRAFT%202021-01-03.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex N (NZA)</div>
            <div className="d-block pb-1 title">Fossil fuels transition</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AABM8f_QMi8nHQD5UWlcVD6la/Princeton%20NZA%20Annexes/Annex%20N%20%28NZA%29.%20Fossil%20fuels%20transition%20DRAFT%20%282020-12-21%29.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex O (NZA)</div>
            <div className="d-block pb-1 title">Non-CO2 emissions</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AADu6yyQ1bB8ljxhbv2lmDAEa/Princeton%20NZA%20Annexes/Annex%20O%20%28NZA%29.%20Non-CO2%20emissions%20DRAFT.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex P (NZA)</div>
            <div className="d-block pb-1 title">Past and Prospective Changes in the Net CO2 Flux of US Forests</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAB_ioCm9QLYH05b2jBQR1pPa/Princeton%20NZA%20Annexes/Annex%20P%20%28NZA%29.%20Past%20and%20Prospective%20Changes%20in%20the%20Net%20CO2%20Flux%20of%20US%20Forests%20FINAL%20DRAFT_updated.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
          <div className="col-12 pt-3 pb-3 annex">
            <div className="d-block pb-1 tag">Annex Q (NZA)</div>
            <div className="d-block pb-1 title">Agricultural sink potentials</div>
            <div className="d-block button-holder">
              <a target="blank" rel="noopener noreferrer" href="https://www.dropbox.com/sh/j1rmqf6dxpi0n1v/AAB39x1MDBEDpLfCKAx2zSRWa/Princeton%20NZA%20Annexes/Annex%20Q%20%28NZA%29.%20Agricultural%20sink%20potentials%20DRAFT.pdf?dl=0" className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download </span><Download className="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default TheReportPage;
