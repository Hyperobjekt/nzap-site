import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Progress, Tabs, Pagination } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { loadFilters, setFilterAction } from '../../redux/actions/FiltersActions';
import { getQueryObject, getQueryString, convertToCSV, handleError } from '../../_helpers'
import Spinner from '../_global/Spinner';
import PropTypes from "prop-types";
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';
import './ExploreLoader.scss'
import ExploreFilter from "./ExploreFilter";


const { TabPane } = Tabs;
const ExploreLoader = ({ loading, loadFilters, setFilterAction, filters, loadScenarios, scenarios }) => {
  const location = useLocation();

  useEffect(() => {
    let queryObject = getQueryObject(location);
    loadFilters(queryObject).catch(handleError);
    loadScenarios(filters.url).catch(handleError);
  }, []);


  const changeExplorer = tab => {
    localStorage.setItem('explorer', tab);
    setFilterAction({ ...filters, explorer: tab })
  }


  const loadUI = () => {
    return <React.Fragment>
      <div className="nzap-explore-loader" id="explore">
        <div className="row">
          <div className="col-12 pt-3 filter-section-label">
            <h3>Explore the Data</h3>
          </div>
          <div className="col-12 pt-3">
            <div className="d-block mb-3 filter-explore-by">Examine by</div>
            <Tabs defaultActiveKey={localStorage.explorer || filters.explorer} onChange={changeExplorer}>
              <TabPane tab="YEAR" key="year" />
              <TabPane tab="PATHWAY" key="pathway" />
            </Tabs>
          </div>
        </div>
      </div>

      {/* Filter */}
      <ExploreFilter />

      {/* */}
      <div className="row">
        <div className="col-12">
          {loading ? <Spinner /> : (
            <div className="row">
              {loading}
              {scenarios.length ? <div className="col-12 nzap-table-holder" id="nzap-table-holder" role="button" tabIndex={0}>
                {filters.explorer === 'pathway' ? <ExploreByPathway /> : <ExploreByYear />}
              </div> : null}
            </div>
          )}
        </div>
        <div className="col-12 pl-4 pr-4">
          <div className="row">
            <div className="col-12 pl-0 pr-0 nzap-table-footer position-relative pt-3">
              <div className="d-none d-md-block position-absolute" id="bottom-left-corner"></div>
              <div className="d-none d-md-block position-absolute" id="bottom-right-corner"></div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12 col-md-6 pt-4 pt-md-2 text-center text-md-left order-12 order-md-1 links">
              <div className="d-block pt-2">
                <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius" onClick={() => { downloadBatch(0) }}>
                  {
                    downloadingCSV
                      ? <React.Fragment>
                        {dlProgress === 100 ? <span className="pr-2">Done</span> : <span className="pr-2">Downloading...</span>}
                        <Progress strokeColor={{ from: '#108ee9', to: '#ed6d08' }} type="circle" percent={dlProgress} width={30} />
                      </React.Fragment>
                      : <React.Fragment>
                        <span className="pr-2">Download this table as a csv </span>
                        <Download className="" />
                      </React.Fragment>
                  }
                </button>
              </div>
              <div className="d-block pt-3">
                <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius">
                  Download the fact sheet for {filters.usStates.filter(e => e.slug === query.state)[0] ? filters.usStates.filter(e => e.slug === query.state)[0].label : ''}
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-3 pt-md-2 text-center text-md-right order-1 order-md-12 nzap-pagination">
              <Pagination total={count} current={currentPage} showSizeChanger={false} defaultPageSize={200} onChange={changePage} />
            </div>
          </div> */}
        </div>
      </div>

    </React.Fragment>
  }

  return (<>{filters.url ? loadUI() : null}</>)
}








ExploreLoader.propTypes = {
  scenarios: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  loadFilters: PropTypes.func.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  setFilterAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0,
    filters: state.filters,
    count: state.count
  }
}

const mapDispatchToProps = { loadScenarios, loadFilters, setFilterAction }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


