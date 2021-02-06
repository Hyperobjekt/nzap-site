import React from "react";
import ExploreLoader from "../explore/ExploreLoader";
import './Landing.scss';
import introImage from '../../assets/images/home/main-image.png';
import scenarioImage1 from '../../assets/images/home/scenario1.png'
import scenarioImage2 from '../../assets/images/home/scenario2.png'
import scenarioImage3 from '../../assets/images/home/scenario3.png'
import scenarioImage4 from '../../assets/images/home/scenario4.png'
import scenarioImage5 from '../../assets/images/home/scenario5.png'
import scenarioImage6 from '../../assets/images/home/scenario6.png'
import scrollDownIcon from '../../assets/images/icons/scroll-down.svg'
import blockquoteIcon from '../../assets/images/icons/blockquote.svg'
import { Link } from "react-router-dom";


const LandingPage = () => (
  <div className="container container-body landing mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 pt-md-5 position-relative">

        <div className="d-block position-sticky explore-jump-holder">
          <div className="d-block position-absolute text-center text-uppercase to-data-explorer">
            <div className="d-block">
              <a href="#explore">Explore<br />the data</a>
            </div>
            <div className="d-block">
              <a href="#explore"><img src={scrollDownIcon} alt="explore the data anchor" /></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 pt-3 atf">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-7">
                <h1 className="d-block display-3 text-uppercase pt-md-5 mt-md-5 title">Net-Zero America:</h1>
                <h2 className="d-block lead display-4 subtitle">Potential Pathways, <br />Infrastructure, and Impacts</h2>
              </div>
              <div className="col-12 col-md-5">
                <img className="position-relative intro-image d-none d-md-block" src={introImage} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="d-block pr-3 pt-2 introduction">
                  <p className="pt-md-4">The Net-Zero America research quantifies five distinct technological pathways, all using technologies known today, by which the United States could decarbonize its entire economy. With multiple plausible and affordable pathways available, the societal conversation can now turn from “if” to “how” and focus on the choices the nation and its myriad stakeholders wish to make to shape the energy transition.</p>
                  <p className="d-none">The study is the first to map with high geographic specificity the infrastructure that needs to be built and the investments required to run the country without emitting more greenhouse gases into the atmosphere than are removed from it each year. It quantifies inherent challenges and opportunities with different pathways, and the granularity allows state-level assessments of implications for land use, employment, air pollution-related health impacts, capital mobilization, incumbent fossil fuel industries, and new clean-energy industries.</p>
                  <p className="d-none">Insights from this study can inform this conversation.  </p>
                  <p className="pt-2">This website presents the pathways in an interactive context to enable policy makers and other stakeholders to extract specific results that are most useful to them. The site should be used in conjunction with <Link to="/the-report">the Net-Zero America final report</Link> to fully understand the data contained herein.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-11 col-lg-10 pl-4 pr-5 pt-4 pt-md-5 pb-4 pb-md-5 mt-3 mb-5 quotable">

            <div className="d-none d-md-inline-block icon-holder align-top pt-2">
              <img src={blockquoteIcon} alt="" />
            </div>
            <div className="d-inline-block quote-holder pl-md-4">
              <div className="d-block quote">
                “Net Zero America ... sets an entirely new standard in this genre ... to provide an unprecedented degree of clarity and granularity about possible pathways to mid-century “net zero” for this country ... Everybody seriously interested in the crucial question of this country’s energy-climate future—not least the new Biden-Harris administration—needs to understand the findings of this extraordinary study.”
              </div>
              <div className="d-block pt-3 by">
                <span><b>John P. Holdren,</b> <br className="d-md-none d-block" />Science Advisor to President Obama</span>
              </div>
            </div>


          </div>
        </div>


        <div className="row">
          <div className="col-12 solutions">
            <h3 className="label pb-4">Five Approaches <br></br>to Decarbonization:</h3>
            <div className="row approaches">
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage1} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 1</h4>
                <h4 className="title">
                  <span className="highlight">E+</span><span className="pl-1 label">High<br />Electrification</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Nearly full electrification of transport and buildings by 2050</li>
                  <li>No land-use change for biomass supply allowed</li>
                  <li>Few other constraints on energy supply options</li>
                </ul>
              </div>
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage2} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 2</h4>
                <h4 className="title">
                  <span className="highlight">E-</span><span className="pl-1 label">Less-High<br />Electrification</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Less-rapid electrification of transport and buildings</li>
                  <li>No land-use change for biomass supply allowed</li>
                  <li>Few other constraints on energy supply options</li>
                </ul>
              </div>
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage3} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 3</h4>
                <h4 className="title">
                  <span className="highlight">E- B+</span><span className="pl-1 label">High<br />Biomass</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Less-rapid electrification of transport and buildings</li>
                  <li>Biomass supply requires converting some agricultural land from food to energy crops</li>
                  <li>Few other constraints on energy supply options</li>
                </ul>
              </div>
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage4} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 4</h4>
                <h4 className="title">
                  <span className="highlight">E+ RE-</span><span className="pl-1 label">Renewable<br />Constrained</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Nearly full electrification of transport and buildings by 2050</li>
                  <li>Solar and wind power annual capacity additions constrained to historical maximum</li>
                  <li>No land-use change for biomass supply allowed</li>
                  <li>Few other constraints on energy supply options</li>
                </ul>
              </div>
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage5} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 5</h4>
                <h4 className="title">
                  <span className="highlight">E+ RE+</span><span className="pl-1 label">100%<br />Renewable</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Nearly full electrification of transport and buildings by 2050</li>
                  <li>No fossil fuel use allowed by 2050</li>
                  <li>No land-use change for biomass supply allowed</li>
                  <li>No new nuclear power construction allowed, existing plants retired</li>
                  <li>No underground storage of CO2 allowed</li>
                </ul>
              </div>
              <div className="col-md-4 pr-3 approach">
                <div className="image-header position-relative">
                  <img className="position-absolute" src={scenarioImage6} alt="" />
                </div>
                <h4 className="scenario pt-2">Scenario 6</h4>
                <h4 className="title">
                  <span className="highlight">REF</span><span className="pl-1 label"><br />Reference</span>
                </h4>
                <ul className="features ml-0 pl-3 pb-4">
                  <li>Based on US EIA, <i>Annual Energy Outlook 2019</i> (Reference case)</li>
                  <li>No greenhouse gas emission constraints imposed</li>
                  <li>Same (low) projected oil and gas prices as for net-zero pathways</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>




    <div className="row">
      <div className="col-12"><ExploreLoader /></div>
    </div>
  </div>

);

export default LandingPage;
