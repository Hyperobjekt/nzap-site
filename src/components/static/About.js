import React from "react";
import aboutImage from '../../assets/images/about/page-header-about.jpg';
import blockquoteIcon from '../../assets/images/icons/blockquote.svg'
import './About.scss';



const AboutPage = () => (
  <div className="container container-body mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-0 pt-5 atf the-report">
            <div className="row">
              <div data-aos="fade-in" data-aos-delay="200" className="col-12 pt-3 pt-md-5 col-md-8 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>About the Project</h1></div>
              </div>
              <div data-aos="fade-in" data-aos-delay="250" className="col-12 col-md-4 text-center">
                <img className="intro-image d-none d-md-inline-block" src={aboutImage} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div data-aos="fade-in" data-aos-delay="200" className="col-12 col-lg-9 offset-lg-0 pt-5 section-a">
            <p>The Net-Zero America study <a href="https://environmenthalfcentury.princeton.edu/research/2020/big-affordable-effort-needed-america-reach-net-zero-emissions-2050-princeton-study" target="_blank" rel="noopener noreferrer" >was released </a>December 15, 2020. The work aims to inform and ground political, business, and societal conversations regarding what it would take for the U.S. to achieve an economy-wide target of net-zero emissions of greenhouse gases by 2050.  Achieving this goal, i.e. building an economy that emits no more greenhouse gases into the atmosphere than are permanently removed and stored each year, is essential to halt the buildup of climate-warming gases in the atmosphere and avert costly damages from climate change. This study provides granular guidance on what getting to net-zero really requires and on the actions needed to translate pledges into tangible progress.</p>
          </div>


          <div data-aos="fade-in" className="col-12 col-md-11 col-lg-10 pl-4 pr-md-5 pt-4 pt-md-5 pb-4 pb-md-5 mt-3 mb-5 quotable">

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
          <div data-aos="fade-in" data-aos-delay="0" className="col-12 col-lg-9 offset-lg-0 section-a">

            <p>The work outlines five distinct technological pathways all of which achieve the 2050 goal. The report authors are neutral as to which of these is “best”, and the path the nation ultimately takes will no doubt differ from all of these.  The goal of this work is to provide confidence that the U.S. now has multiple genuine paths to net-zero by 2050 and to provide a blueprint for priority actions for the next decade.  These priorities include accelerating deployment at scale of technologies and solutions that are mature and affordable today and will have high value regardless of what path the nation takes, as well as a set of actions to build key enabling infrastructure and improve a set of less mature technologies that will help complete the transition to a net-zero America.</p>
            <p>With multiple plausible and affordable pathways available, the societal conversation can now turn from “if” to “how” and focus on the choices the nation and its myriad stakeholders wish to make to shape the transition to net-zero.  These conversations will need to be sensitive to the different values and priorities of diverse communities. That requires insight on how the nation will be reshaped by different paths to net-zero, and the benefits, costs, and challenges for specific locations, industries, professions, and communities.  Supporting these decisions requires analysis at visceral, human scales, which the Net Zero America study seeks to provide.</p>
            
          </div>
          
          <div data-aos="fade-in" data-aos-delay="200" className="col-12 col-md-11 col-lg-10 pl-4 pr-5 pt-2 pt-md-5 pb-4 pr-lg-3 mt-3 quotable">

            <div className="d-none d-md-inline-block icon-holder align-top pt-2">
              <img src={blockquoteIcon} alt="" />
            </div>
            <div className="d-inline-block quote-holder pl-md-4">
              <div className="d-block quote">
                “The goal of this work is to provide confidence that the U.S. now has multiple genuine paths to net-zero by 2050 and to provide a blueprint for priority actions for the next decade. ”
              </div>
              <div className="d-block pt-3 by">

              </div>
            </div>
            </div>  
            <div data-aos="fade-in" data-aos-delay="0" className="col-12 col-lg-9 offset-lg-0 pt-5 section-a">  
            <p>During this two-year research effort, the authors had many informative discussions with individuals in environmental research and advocacy organizations, oil and gas companies, renewable energy companies, national labs, industry trade organizations, universities, and elsewhere.  The authors thank those individuals for their time and interest.  The authors also thank the approximately 300 stakeholders who attended briefings where preliminary study results were presented. The feedback received at and following those briefings have helped shape the contents of this report.  Of course, any errors or omissions in this study are the responsibility of the authors alone, as are any views or recommendations expressed herein.</p>
            <p>Funding for the research was provided by BP, through the <a href="https://cmi.princeton.edu/" target="_blank" rel="noopener noreferrer" >Carbon Mitigation Initiative</a> at Princeton University’s <a href="https://environment.princeton.edu/" target="_blank" rel="noopener noreferrer" >High Meadows Environmental Institute</a>, and ExxonMobil, through the Princeton E-ffiliates Partnership at the <a href="https://acee.princeton.edu/" target="_blank" rel="noopener noreferrer" >Andlinger Center for Energy and the Environment</a>, with in-kind support from the Andlinger Center for Energy and the Environment and from the University of Queensland’s Center for Sustainable Engineering Innovation.</p>
          </div>

        </div>
      </div>
    </div>


  </div>

);

export default AboutPage;
