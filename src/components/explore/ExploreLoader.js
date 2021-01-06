import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Tabs } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import Spinner from '../_global/Spinner';
import ExploreFilter from './ExploreFilter';
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';


const { TabPane } = Tabs;

const ExplorePage = ({ loading, scenarios, loadScenarios, ...props }) => {
  useEffect(() => {
    if (scenarios.length === 0) loadScenarios().catch(error => {
      console.log(">> Loading scenarios failed" + error);
    });
  }, [props.scenarios])

  const [explorer, setExplorer] = useState('year')


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
            {explorer === 'pathway' ? <ExploreByPathway scenarios={scenarios} /> : <ExploreByYear scenarios={scenarios} />}

          </div>
        </div>
      </div>
    )}
  </div>)
}

ExplorePage.propTypes = {
  scenarios: PropTypes.array.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = { loadScenarios }

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);


