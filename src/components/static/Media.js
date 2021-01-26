import React from "react";
import introImage from '../../assets/images/the-report/intro-image.jpg';
import fastCompanyLogo from '../../assets/images/media/fast-company.png';
import howDoWeFixItLogo from '../../assets/images/media/how-do-we-fix-it.png';
import theInterchangeLogo from '../../assets/images/media/the-interchange.png';
import theNewYorkTimesLogo from '../../assets/images/media/the-new-york-times.png';
import theWashingtonPostLogo from '../../assets/images/media/the-washington-post.png';
import yahooFinanceLogo from '../../assets/images/media/yahoo-finance.png';

import './Media.scss';

const MediaPage = () => (
  <div className="container pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-7 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle">Net-Zero America <br />in the Media</div>
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

        </div>

      </div>
    </div>

    <div className="row name-drop">
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theNewYorkTimesLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">New York Times</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theWashingtonPostLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">Washington Post</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={fastCompanyLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">Fast Company</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={howDoWeFixItLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">How do we fix it?</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={theInterchangeLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">The Interchange</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
      <div className="col-4 pb-3 pt-5">
        <div className="image">
          <img className="w-100" src={yahooFinanceLogo} alt="" />
        </div>
        <div className="pt-3 pb-3 publication">Yahoo Finance</div>
        <div className="snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum culpa molestias excepturi doloribus error at quae natus quasi.</div>
      </div>
    </div>

  </div>

);

export default MediaPage;
