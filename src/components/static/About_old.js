import React from "react";
import introImage from '../../assets/images/the-report/intro-image.jpg';

import './About.scss';

const AboutPage = () => (
  <div className="container pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-7 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle">About the Project</div>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 pt-5 section-a">
            <div className="row pb-2 pt-2">
              <div className="col-2 text-center">
                <div className="d-inline-block image"></div>
              </div>
              <div className="col-9 pt-3">
                <div className="title">Lorem Ipsum Dolor</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam velit sed facere. Expedita repellat officiis obcaecati. Sint, deserunt, nisi minus aperiam laboriosam, mollitia nihil veritatis cupiditate quas tenetur fugiat!</div>
              </div>
            </div>
            <div className="row pb-2 pt-2">
              <div className="col-2 text-center">
                <div className="d-inline-block image"></div>
              </div>
              <div className="col-9 pt-3">
                <div className="title">Lorem Ipsum Dolor</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam velit sed facere. Expedita repellat officiis obcaecati. Sint, deserunt, nisi minus aperiam laboriosam, mollitia nihil veritatis cupiditate quas tenetur fugiat!</div>
              </div>
            </div>
            <div className="row pb-2 pt-2">
              <div className="col-2 text-center">
                <div className="d-inline-block image"></div>
              </div>
              <div className="col-9 pt-3">
                <div className="title">Lorem Ipsum Dolor</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam velit sed facere. Expedita repellat officiis obcaecati. Sint, deserunt, nisi minus aperiam laboriosam, mollitia nihil veritatis cupiditate quas tenetur fugiat!</div>
              </div>
            </div>
            <div className="row pb-2 pt-2">
              <div className="col-2 text-center">
                <div className="d-inline-block image"></div>
              </div>
              <div className="col-9 pt-3">
                <div className="title">Lorem Ipsum Dolor</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam velit sed facere. Expedita repellat officiis obcaecati. Sint, deserunt, nisi minus aperiam laboriosam, mollitia nihil veritatis cupiditate quas tenetur fugiat!</div>
              </div>
            </div>

          </div>

          <div className="col-12 pt-5 text-center section-b">
            <div className="row pt-4">
              <div className="col-4 pl-5 pr-5">
                <div className="d-block">
                  <div className="d-inline-block image"></div>
                </div>
                <div className="d-block pb-2 pt-3 title">Lorem Ipsom Dolor</div>
                <div className="d-block pb-3 description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus sit natus.</div>
              </div>
              <div className="col-4 pl-5 pr-5">
                <div className="d-block">
                  <div className="d-inline-block image"></div>
                </div>
                <div className="d-block pb-2 pt-3 title">Lorem Ipsom Dolor</div>
                <div className="d-block pb-3 description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus sit natus.</div>
              </div>
              <div className="col-4 pl-5 pr-5">
                <div className="d-block">
                  <div className="d-inline-block image"></div>
                </div>
                <div className="d-block pb-2 pt-3 title">Lorem Ipsom Dolor</div>
                <div className="d-block pb-3 description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus sit natus.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>

);

export default AboutPage;
