import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Tabs } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { loadQuery } from '../../redux/actions/QueryActions';

import Spinner from '../_global/Spinner';
import ExploreFilter from './ExploreFilter';
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';


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

const ExploreLoader = ({ loading, scenarios, query, loadQuery, loadScenarios, count }) => {
  const filters = require('../../_data/nzap_filters.json');
  const location = useLocation();
  const [queryString, setQueryString] = useState('');
  useEffect(() => {
    let qObject = getQueryObject(location)

    if (scenarios.length === 0 && Object.keys(query).length === 0) loadScenarios(qObject).catch(handleError)
    if (Object.keys(query).length !== 0 && queryString !== getQueryString(query)) loadScenarios(query).catch(handleError)
    if (Object.keys(query).length === 0 || queryString !== getQueryString(query)) {
      setQueryString(getQueryString(qObject))
      loadQuery(qObject);
    }

  }, [scenarios, query])

  function getQueryString(queryObject) {
    return "?" + Object.keys(queryObject).map((key) => {
      const element = queryObject[key];
      return element.length ? `${key}=${element.join(',')}` : null;
    }).filter(e => e).join('&')
  }

  const [explorer, setExplorer] = useState('year');
  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Tabs defaultActiveKey="1" onChange={setExplorer}>
            <TabPane tab="Examine by Year" key="year" />
            <TabPane tab="Examine by Pathway" key="pathway" />
          </Tabs>
        </div>
      </div>
    </div>
    <ExploreFilter filters={filters} />
    {loading ? <Spinner /> : (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {explorer === 'pathway' ? <ExploreByPathway scenarios={scenarios} filters={filters} /> : <ExploreByYear scenarios={scenarios} filters={filters} />}
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
  loadQuery: PropTypes.func.isRequired,
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

const mapDispatchToProps = { loadScenarios, loadQuery }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


