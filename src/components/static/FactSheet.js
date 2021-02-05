import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadFilters } from '../../redux/actions/FiltersActions';
import { handleError } from '../../_helpers'
import introImage from '../../assets/images/fact-sheets/page-header-fact sheets.png';

import './FactSheet.scss';

const FactSheetPage = ({ filters, loadFilters }) => {
  useEffect(() => {
    loadFilters(null).catch(handleError);
  }, [])


  const loadStates = states => {
    return states.map((state, i) => <div className="col-3 pt-2 pb-2 fact-state" key={i}>
      <a href="/">{state.label}</a>
    </div>)
  }

  return <div className="container pb-5">
    <div className="row">
      <div className="col-12 position-relative">

        <div className="row">
          <div className="col-12 pt-5 atf the-report">
            <div className="row">
              <div className="col-12 pt-3 pt-md-5 col-md-7 position-relative">
                <div className="d-block lead display-4 position-absolute subtitle">State-by-State Fact Sheets</div>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img className="intro-image d-none d-md-inline-block" src={introImage} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="d-block pr-3 pt-4 introduction">
                  <p className="pt-md-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum? Repellendus impedit ab cum fugit ea delectus similique, reiciendis autem maxime repudiandae velit quis temporibus sunt nisi cumque laudantium?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos dolorum?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row pt-5 fact-states">
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
