import React, { useState } from "react";
import useMeasure from "react-use-measure"
import { useSpring, animated } from "react-spring"
import introImage from '../../assets/images/publications/page-header-maps.jpg';
// import blockquoteIcon from '../../assets/images/icons/blockquote.svg'
import socolowBulletinPdf from '../../assets/papers/socolow-bulletin-75-contending-with-climate-change-the-next-25-years-final-dec-10-2020.pdf';
import socolowDaedalusPdf from '../../assets/papers/socolow-daedalus-witnessing-as-published-fall-2020.pdf';
import workingPaperPdf from '../../assets/papers/Working_Paper-High_Road_Labor_and_Renewable_Energy-PUBLIC_RELEASE-4-13-21.pdf'

import './TheReport.scss';
import './Publications.scss';
import { Download } from "react-bootstrap-icons";

const Accordion = ({ children, }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, bounds] = useMeasure()
  const spring = useSpring({
    height: isOpen ? bounds.height : 0
  })

  return (
    <>
      <animated.div className="accordion" style={spring}>
        <div className="accordion__inner pb-2" ref={ref}>
          { children }
        </div>
      </animated.div>
      <button className="show-more" onClick={e => setIsOpen(isO => !isO)} aria-expanded={isOpen}>
        Show {isOpen ? "less" : "more"} <span className={isOpen ? 'rotated' : ''}></span>
      </button>
    </>
  )
}

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
              <div data-aos="fade-in" data-aos-delay="250" className="col-12 col-md-4 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="200" className="row page-content">
              <div className="col-12 col-lg-11">
                <div className="d-block pr-3 pt-4 introduction">
                  <h2>Working Papers</h2>
                </div>
              </div>
            </div>
            <div className="row pl-3">
              <div data-aos="fade-in" data-aos-delay="0" className="pt-4 introduction">
                <div className="d-block pb-3 tag">High Road Labor and Renewable Energy</div>
                <p className="pt-md-2">Achieving an economy-wide net-zero greenhouse gas emissions goal by mid-century in the United States entails transforming the energy workforce.</p>
                <Accordion>
                  <p>In this study, we focus on the
                      influence of increased labor compensation and domestic manufacturing shares on (1)
                      renewable energy technology costs, (2) the costs of transitioning the U.S. economy to netzero emissions, and (3) labor outcomes, including total employment and wage benefits,
                      associated with the deployment of utility-scale solar photovoltaics (PV) and land based and
                      offshore wind power. We find that manufacturing and installation labor cost premiums as
                      well as increases in domestic content shares across wind and utility-scale solar photovoltatic
                      supply chains result in relatively modest increases in total capital and operating costs. These
                      small increases in technology costs may be partially or fully offset by increases in labor
                      productivity. We also show that solar and wind technology cost premiums associated with
                      high road labor policies have a minimal effect on the pace and scale of renewable energy
                      deployment and the total cost of transitioning to a net-zero emissions economy. Public
                      policies such as tax credits, workforce development support, and other instruments can
                      redistribute technology cost premiums associated with high road labor policies to support
                      both firms and workers.</p>
                </Accordion>
                <a target="blank" rel="noopener noreferrer" href={workingPaperPdf} className="nzap-button pt-2 pb-2 pr-3 pl-3 mt-3 nzap-radius"><span className="pr-2">Download the paper </span><Download className="" /></a>
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="200" className="row page-content pt-4">
              <div className="col-12 col-lg-11">
                <div className="d-block pr-3 pt-4 introduction">
                  <h2>Papers by Robert Socolow</h2>
                  <p className="pt-4">Robert Socolow published two related articles in 2020 while the Net Zero America project was under way, which we include here because they explore issues that enlarge the NZA discussion. Centrally, Socolow seeks domains where depolarization of the current fractious arguments around climate change can be reduced: he advocates “middle-building.”</p>
                  <Accordion>
                    <p>Toward this end, Socolow urges vigilant attention to the downsides to rapid expansion of every low-carbon technology, as opposed to uncritical embrace: “we must leave room to say No.” NZA’s close examination of the land demands for wind, solar, and bioenergy are examples of what he is urging.</p>
                    <p>Middle-building may also be fostered, Socolow suggests, on behalf of a much more ambitious climate science effort – one that focuses on the most worrisome risks and that is enhanced by contributions from many disciplines.  The daunting tasks set forth in NZA should be pursued under the strongest possible searchlights.</p>
                    <p>Adopting a global perspective, Socolow urges balanced attention to pathways to net-zero economies in both currently industrializing countries constructing much of their major infrastructure for the first time, and already industrialized countries whose task is to swap out a high-carbon infrastructure already in place, though aging.</p>
                    <p>Socolow notes that middle-building will also be promoted by an inclusive discussion of the underlying rationale for sustainability. The sustainability objective derives from the nearly universal belief that the flourishing of the human species is a moral imperative.</p>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="row pl-3">
              <div data-aos="fade-in" data-aos-delay="0" className="pt-4">
                <div className="d-block pb-3 tag">Witnessing for the Middle to Depolarize the Climate Change Conversation</div>
                <a target="blank" rel="noopener noreferrer" href={socolowDaedalusPdf} className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the paper </span><Download className="" /></a>
              </div>
              <div data-aos="fade-in" data-aos-delay="100" className="pt-4">
                <div className="d-block pb-3 tag">Contending with climate change: The next 25 years</div>
                <a target="blank" rel="noopener noreferrer" href={socolowBulletinPdf} className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download the paper </span><Download className="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>
);

export default PublicationsPage;
