import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Tabs } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { loadQuery } from '../../redux/actions/QueryActions';
import { loadFilters } from '../../redux/actions/FiltersActions';

import Spinner from '../_global/Spinner';
import ExploreFilter from './ExploreFilter';
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';

import './ExploreLoader.scss'


const { TabPane } = Tabs;


const getQueryObject = (location) => {
  let obj = {};
  ['state', 'year', 'categories', 'subcategories', 'examine'].forEach(q => {
    let val = new URLSearchParams(location.search).get(q);
    obj[q] = val ? val.split(',') : []
  });
  return obj
}

const handleError = error => {
  console.log(">> Loading scenarios failed" + error);
}

const ExploreLoader = ({ loading, filters, scenarios, query, loadQuery, loadScenarios, loadFilters, count }) => {
  const location = useLocation();
  const [queryString, setQueryString] = useState('');
  useEffect(() => {
    let qObject = getQueryObject(location)
    if (scenarios.length === 0 && Object.keys(query).length === 0) {
      loadScenarios(qObject).catch(handleError)
      loadFilters().catch(handleError)
    }
    if (Object.keys(query).length !== 0 && queryString !== getQueryString(query)) loadScenarios(query).catch(handleError)
    if (Object.keys(query).length === 0 || queryString !== getQueryString(query)) {
      setQueryString(getQueryString(qObject))
      loadQuery(qObject);
    }
  }, [scenarios, query, filters])

  function getQueryString(queryObject) {
    return "?" + Object.keys(queryObject).map((key) => {
      const element = queryObject[key];
      return element.length ? `${key}=${element.join(',')}` : null;
    }).filter(e => e).join('&')
  }

  const [explorer, setExplorer] = useState('year');
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
    {Object.keys(filters).length ? <ExploreFilter filters={filters} /> : null}
    {loading ? <Spinner /> : (
      <div className="container">
        <div className="row">
          {Object.keys(filters).length ? <div className="col-12">
            {explorer === 'pathway' ? <ExploreByPathway scenarios={scenarios} filters={filters} /> : <ExploreByYear scenarios={scenarios} filters={filters} />}
          </div> : null}
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
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  loadQuery: PropTypes.func.isRequired,
  loadFilters: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0,
    query: state.query,
    filters: state.filters,
    count: state.count
  }
}

const mapDispatchToProps = { loadScenarios, loadQuery, loadFilters }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


