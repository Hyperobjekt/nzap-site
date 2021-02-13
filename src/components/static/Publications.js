import React from "react";
import introImage from '../../assets/images/publications/page-header-maps.jpg';
// import blockquoteIcon from '../../assets/images/icons/blockquote.svg'
import socolowBulletinPdf from '../../assets/papers/socolow-bulletin-75-contending-with-climate-change-the-next-25-years-final-dec-10-2020.pdf';
import socolowDaedalusPdf from '../../assets/papers/socolow-daedalus-witnessing-as-published-fall-2020.pdf';


import './TheReport.scss';
import './Publications.scss';
import { Download } from "react-bootstrap-icons";

const PublicationsPage = () => (
  <div className="container container-body mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 col-lg-10 pt-5 atf the-report">
            <div className="row">
              <div data-aos="fade-in" data-aos-delay="200" className="col-12 pt-3 pt-md-5 col-md-8 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>Related Publications</h1></div>
              </div>
              <div data-aos="fade-in" data-aos-delay="200" className="col-12 col-md-4 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="600" className="row page-content">
              <div className="col-12 col-lg-11">
                <div className="d-block pr-3 pt-4 introduction">
                  <h2>Papers by Robert Socolow</h2>
                  <p className="pt-md-4">Robert Socolow published two related articles in 2020 while the Net Zero America project was under way, which we include here because they explore issues that enlarge the NZA discussion. Centrally, Socolow seeks domains where depolarization of the current fractious arguments around climate change can be reduced: he advocates “middle-building.”</p>
                  <p>Toward this end, Socolow urges vigilant attention to the downsides to rapid expansion of every low-carbon technology, as opposed to uncritical embrace: “we must leave room to say No.” NZA’s close examination of the land demands for wind, solar, and bioenergy are examples of what he is urging.</p>
                  <p>Middle-building may also be fostered, Socolow suggests, on behalf of a much more ambitious climate science effort – one that focuses on the most worrisome risks and that is enhanced by contributions from many disciplines.  The daunting tasks set forth in NZA should be pursued under the strongest possible searchlights.</p>
                  <p>Adopting a global perspective, Socolow urges balanced attention to pathways to net-zero economies in both currently industrializing countries constructing much of their major infrastructure for the first time, and already industrialized countries whose task is to swap out a high-carbon infrastructure already in place, though aging.</p>
                  <p>Socolow notes that middle-building will also be promoted by an inclusive discussion of the underlying rationale for sustainability. The sustainability objective derives from the nearly universal belief that the flourishing of the human species is a moral imperative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="row pl-3">
      <div className="col-12">
        <div data-aos="fade-in" data-aos-delay="200" className="d-inline-block pt-4 pr-4">
          <div className="d-block pb-3 tag">&#8220;Witnessing for the Middle to Depolarize <br />the Climate Change Conversation&#8221;</div>
          <a target="blank" rel="noopener noreferrer" href={socolowDaedalusPdf} className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the paper </span><Download className="" /></a>
        </div>
        <div data-aos="fade-in" data-aos-delay="200" className="d-inline-block pt-4 ">
          <div className="d-block pb-3 tag">&#8220;Contending with climate change: <br />The next 25 years&#8221;</div>
          <a target="blank" rel="noopener noreferrer" href={socolowBulletinPdf} className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the paper </span><Download className="" /></a>
        </div>
      </div>
    </div>

  </div>
);

export default PublicationsPage;
