import React from "react";
import introImage from '../../assets/images/media/page-header-media.png';
import fastCompanyLogo from '../../assets/images/media/fast-company.png';
import howDoWeFixItLogo from '../../assets/images/media/how-do-we-fix-it.png';
import theInterchangeLogo from '../../assets/images/media/the-interchange.png';
import theNewYorkTimesLogo from '../../assets/images/media/the-new-york-times.png';
import theWashingtonPostLogo from '../../assets/images/media/the-washington-post.png';
import yahooFinanceLogo from '../../assets/images/media/yahoo-finance.png';
import gristLogo from '../../assets/images/media/media-logos-grist.png';

import './Media.scss';

const MediaPage = () => (
  <div className="container container-body mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-6 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>Net-Zero America <br />in the Media</h1></div>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div className="row d-none">
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

        </div>

      </div>
    </div>

    <div className="row name-drop pt-2">
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theNewYorkTimesLogo} alt="The New York Times" />
        </div>
        <div className="pt-3 pb-2 publication">New York Times</div>
        <div className="snippet">&#8220;To Cut Emissions to Zero, U.S. Needs to Make Big Changes in Next 10 Years&#8221;</div>
        <div className="articleLink"><a href="https://www.nytimes.com/2020/12/15/climate/america-next-decade-climate.html" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theWashingtonPostLogo} alt="The Washington Post" />
        </div>
        <div className="pt-3 pb-2 publication">Washington Post</div>
        <div className="snippet">&#8220;Biden wants the U.S. to stop contributing to climate change by 2050. Here’s what that would actually take.&#8221;</div>
        <div className="articleLink"><a href="https://www.washingtonpost.com/climate-environment/2020/12/15/biden-wants-halt-all-us-climate-emissions-by-2050-heres-what-that-would-actually-take/" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={fastCompanyLogo} alt="Fast Company" />
        </div>
        <div className="pt-3 pb-2 publication">Fast Company</div>
        <div className="snippet">&#8220;The U.S. can get to net-zero emissions by 2050. Here’s how&#8221;</div>
        <div className="articleLink"><a href="https://www.fastcompany.com/90589586/the-u-s-can-get-to-net-zero-emissions-by-2050-heres-how" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={howDoWeFixItLogo} alt="How Do We Fix It?" />
        </div>
        <div className="pt-3 pb-2 publication">How do we fix it?</div>
        <div className="snippet">&#8220;Net-Zero America by 2050: Jesse Jenkins and Eric Larson&#8221;</div>
        <div className="articleLink"><a href="https://www.howdowefixit.me/new-blog-3/netzerousa" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theInterchangeLogo} alt="The Interchange" />
        </div>
        <div className="pt-3 pb-2 publication">The Interchange</div>
        <div className="snippet">&#8220;Paths to Net-Zero Emissions <br />by 2050&#8221;</div>
        <div className="articleLink"><a href="https://art19.com/shows/the-interchange/episodes/9ff3d1cc-7026-4b99-bdf1-380b4014da64" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={yahooFinanceLogo} alt="Yahoo Finance" />
        </div>
        <div className="pt-3 pb-2 publication">Yahoo Finance</div>
        <div className="snippet">&#8220;The priorities are doubling down on wind and solar generation and accelerate electric vehicles&#8221;</div>
        <div className="articleLink"><a href="https://finance.yahoo.com/video/priorities-doubling-down-wind-solar-170022720.html" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
      <div className="col-12 col-md-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={gristLogo} alt="Grist" />
        </div>
        <div className="pt-3 pb-2 publication">Grist</div>
        <div className="snippet">&#8220;The priorities are doubling down on wind and solar generation and accelerate electric vehicles&#8221;</div>
        <div className="articleLink"><a href="https://finance.yahoo.com/video/priorities-doubling-down-wind-solar-170022720.html" target="_blank" rel="noopener noreferrer">READ THE ARTICLE</a></div>
      </div>
    </div>

  </div>

);

export default MediaPage;
