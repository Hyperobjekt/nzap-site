import React from "react";
import ExploreLoader from "../explore/ExploreLoader";
import './HomePage.scss';
import introImage from '../../assets/images/home/main-image.png';
import scenarioImage1 from '../../assets/images/home/scenario1.png'
import scenarioImage2 from '../../assets/images/home/scenario2.png'
import scenarioImage3 from '../../assets/images/home/scenario3.png'
import scenarioImage4 from '../../assets/images/home/scenario4.png'
import scenarioImage5 from '../../assets/images/home/scenario5.png'
import scrollDownIcon from '../../assets/images/icons/scroll-down.svg'
import blockquoteIcon from '../../assets/images/icons/blockquote.svg'


const HomePage = () => (
  <div className="container pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="d-block position-absolute text-center text-uppercase to-data-explorer">
          <div className="d-block">
            <a href="#explore">Explore<br />the data</a>
          </div>
          <div className="d-block">
            <a href="#explore"><img src={scrollDownIcon} alt="" /></a>
          </div>
        </div>

        <div className="row">
          <div className="col-12 pt-5 atf">

            <div className="d-block pt-4 nzap-jumbotron">
              <img className="position-absolute intro-image" src={introImage} alt="" />
              <div className="d-block display-3 text-uppercase pt-5 mt-5 title">Net-Zero America:</div>
              <div className="d-block lead display-4 subtitle">Potential Pathways, <br />Infrastructure, and Impacts</div>
              <div className="d-block pr-3 pt-4 introduction">
                <p className="pt-4">Using state-of-the-art modeling tools, a new study from Princeton’s Andlinger Center For Energy + The Environment provides <span className="highlight">five plausible scenarios for the U.S. to reach net-zero emissions by 2050</span>, each one featuring historically unprecedented rates of deployment for multiple technologies.</p>
                <p className="pt-2">This site presents these scenarios in an interactive context so that policy makers, experts and other interested parties can examine approaches to decarbonization identified by the Net-Zero America Project.</p>
              </div>
            </div>

          </div>

          <div className="col-11 pl-3 pr-5 pt-4 pb-5 quotable">

            <div className="d-inline-block icon-holder align-top pt-2">
              <img src={blockquoteIcon} alt="" />
            </div>
            <div className="d-inline-block quote-holder pl-4">
              <div className="d-block quote">
                “With multiple plausible and affordable pathways available, <br />
                the societal conversation can now turn from ‘if ’ to ‘how’ and <br />
                focus on the choices.”
              </div>
              <div className="d-block pt-2 by">
                <span><b>John P. Holdren,</b> Science Advisor to President Obama</span>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>

    <div className="row">
      <div className="col-12 solutions">
        <h3 className="label pb-4">Five Approaches to Decarbonization</h3>
        <div className="row approaches">
          <div className="col-md-4 pr-3 approach">
            <div className="image-header position-relative">
              <img className="position-absolute" src={scenarioImage1} alt="" />
            </div>
            <h6 className="scenario pt-2">Scenario 1</h6>
            <h4 className="title">
              <span className="highlight">E+</span><span className="pl-1 label">High<br />Electrification</span>
            </h4>
            <ul className="features ml-0 pl-3 pb-4">
              <li>Lorem ipsum</li>
              <li>1.011 Dolor sit amet</li>
              <li>Consectetuer</li>
              <li>10% Adipiscing elit</li>
              <li>Sed diam nonummy</li>
            </ul>
          </div>
          <div className="col-md-4 pr-3 approach">
            <div className="image-header position-relative">
              <img className="position-absolute" src={scenarioImage2} alt="" />
            </div>
            <h6 className="scenario pt-2">Scenario 2</h6>
            <h4 className="title">
              <span className="highlight">E-</span><span className="pl-1 label">Less-High<br />Electrification</span>
            </h4>
            <ul className="features ml-0 pl-3 pb-4">
              <li>Lorem ipsum</li>
              <li>1.011 Dolor sit amet</li>
              <li>Consectetuer</li>
              <li>10% Adipiscing elit</li>
              <li>Sed diam nonummy</li>
            </ul>
          </div>
          <div className="col-md-4 pr-3 approach">
            <div className="image-header position-relative">
              <img className="position-absolute" src={scenarioImage3} alt="" />
            </div>
            <h6 className="scenario pt-2">Scenario 3</h6>
            <h4 className="title">
              <span className="highlight">E-B+</span><span className="pl-1 label">High<br />Biomass</span>
            </h4>
            <ul className="features ml-0 pl-3 pb-4">
              <li>Lorem ipsum</li>
              <li>1.011 Dolor sit amet</li>
              <li>Consectetuer</li>
              <li>10% Adipiscing elit</li>
              <li>Sed diam nonummy</li>
            </ul>
          </div>
          <div className="col-md-4 pr-3 approach">
            <div className="image-header position-relative">
              <img className="position-absolute" src={scenarioImage4} alt="" />
            </div>
            <h6 className="scenario pt-2">Scenario 4</h6>
            <h4 className="title">
              <span className="highlight">E+RE-</span><span className="pl-1 label">Renewable<br />Constrained</span>
            </h4>
            <ul className="features ml-0 pl-3 pb-4">
              <li>Lorem ipsum</li>
              <li>1.011 Dolor sit amet</li>
              <li>Consectetuer</li>
              <li>10% Adipiscing elit</li>
              <li>Sed diam nonummy</li>
            </ul>
          </div>
          <div className="col-md-4 pr-3 approach">
            <div className="image-header position-relative">
              <img className="position-absolute" src={scenarioImage5} alt="" />
            </div>
            <h6 className="scenario pt-2">Scenario 5</h6>
            <h4 className="title">
              <span className="highlight">E+RE+</span><span className="pl-1 label">100%<br />Renewable</span>
            </h4>
            <ul className="features ml-0 pl-3 pb-4">
              <li>Lorem ipsum</li>
              <li>1.011 Dolor sit amet</li>
              <li>Consectetuer</li>
              <li>10% Adipiscing elit</li>
              <li>Sed diam nonummy</li>
            </ul>
          </div>
        </div>
      </div>

    </div>


    <div className="row">
      <div className="col-12"><ExploreLoader /></div>
    </div>
  </div>

);

export default HomePage;
