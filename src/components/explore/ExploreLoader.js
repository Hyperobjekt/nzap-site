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
  ['state', 'years', 'categories', 'subcategories', 'examine'].forEach(q => {
    let val = new URLSearchParams(location.search).get(q);
    obj[q] = val ? val.split(',') : []
  });
  return obj
}

const ExploreLoader = ({ loading, scenarios, query, loadQuery, loadScenarios, ...props }) => {
  const location = useLocation();
  useEffect(() => {
    if (scenarios.length === 0) loadScenarios().catch(error => {
      console.log(">> Loading scenarios failed" + error);
    });
    loadQuery(getQueryObject(location));
  }, [props.scenarios])

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
    <ExploreFilter />
    {loading ? <Spinner /> : (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <pre>{JSON.stringify(query)}</pre>
            {explorer === 'pathway' ? <ExploreByPathway scenarios={scenarios} /> : <ExploreByYear scenarios={scenarios} />}
          </div>
        </div>
      </div>
    )}
  </div>)
}

ExploreLoader.propTypes = {
  scenarios: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  loadQuery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0,
    query: state.query
  }
}

const mapDispatchToProps = { loadScenarios, loadQuery }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


