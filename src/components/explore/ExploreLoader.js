import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Tabs } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { setQuery } from '../../redux/actions/QueryActions';
import { loadFilters } from '../../redux/actions/FiltersActions';
import Spinner from '../_global/Spinner';
import ExploreFilter from './ExploreFilter';
import { getQueryObject, handleError } from '../../_helpers'
// import ExploreByPathway from './ExploreByPathway';
// import ExploreByYear from './ExploreByYear';
import './ExploreLoader.scss'
const { TabPane } = Tabs;

const ExploreLoader = ({ loading, count, setQuery, loadFilters, loadScenarios }) => {
  const location = useLocation();
  const [explorer, setExplorer] = useState('year');

  useEffect(() => {
    let queryObject = getQueryObject(location)
    loadScenarios(queryObject).catch(handleError)
    loadFilters(queryObject).catch(handleError)
    setQuery(queryObject);
  }, [])

  return (<div>
    <div className="nzap-explore-loader">
      <div className="row">
        <div className="col-12 pt-5 filter-section-label" id="explore">Explore the Data</div>
        <div className="col-12 pt-3">
          <div className="d-block mb-3 filter-explore-by">Examine by</div>
          <Tabs defaultActiveKey="1" onChange={setExplorer}>
            <TabPane tab="YEAR" key="year" />
            <TabPane tab="PATHWAY" key="pathway" />
          </Tabs>
        </div>
      </div>
    </div>
    <ExploreFilter />
    {loading ? <Spinner /> : (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* {explorer === 'pathway' ? <ExploreByPathway scenarios={scenarios} /> : <ExploreByYear scenarios={scenarios} />} */}
          </div>
        </div>
        <div className="row">
          <div className="col-6 links">
            Download
          </div>
          <div className="col-6 text-right nzap-pagination">
            total: {count}
          </div>
        </div>
      </div>
    )}
  </div>)
}

ExploreLoader.propTypes = {
  scenarios: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  loadFilters: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0,
    query: state.query,
    count: state.count
  }
}

const mapDispatchToProps = { loadScenarios, setQuery, loadFilters }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


