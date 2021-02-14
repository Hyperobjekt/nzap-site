import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadFilters } from '../../redux/actions/FiltersActions';
import { handleError } from '../../_helpers'
import introImage from '../../assets/images/fact-sheets/page-header-fact sheets.jpg';

import './FactSheet.scss';


const FactSheetPage = ({ filters, loadFilters }) => {
  useEffect(() => {
    loadFilters(null).catch(handleError);
  }, [])


  const loadStates = states => {
    let pdfs = {};
    function importAll(r) {
      return r.keys().map(r);
    }
    let pdfImports = importAll(require.context('../../assets/state-reports/', false, /\.pdf$/));
    pdfImports.forEach(r => {
      let key = r.replace('-report.pdf', '').replace('./nzap-', '').replace('/img/nzap-', '')
      pdfs[key] = r;
    });

    return states.map((state, i) => <div data-aos-delay={i * 100} data-aos-offset="100" className="col-6 col-md-3 pt-2 pb-2 fact-state" key={i}>
      <a href={pdfs[state.slug]} target="blank">{state.label}</a>
    </div>)
  }

  return <div className="container container-body mt-md-5 pt-md-5 pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div data-aos="fade-in" data-aos-delay="0" className="col-12 pt-3 pt-md-5 col-md-6 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle"><h1>State-by-State Fact Sheets</h1></div>
              </div>
              <div data-aos="fade-in" data-aos-delay="50" className="col-12 col-md-5 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="0" className="row">
              <div className="col-12 col-lg-9">
                <div className="d-block pr-3 pt-4 introduction">
                  <p className="pt-md-4">
                    Download PDFs featuring tables for each scenario and year featured in our study, for 48 states and the nation as a whole.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div  data-aos="fade-in" data-aos-delay="0" className="row pt-5 fact-states">
          {loadStates(filters.usStates)}
        </div>
      </div>
    </div>


  </div>

}


FactSheetPage.propTypes = {
  filters: PropTypes.object.isRequired,
  loadFilters: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = { loadFilters }

export default connect(mapStateToProps, mapDispatchToProps)(FactSheetPage);
