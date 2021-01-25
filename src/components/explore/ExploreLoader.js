import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Download } from 'react-bootstrap-icons'
import PropTypes from "prop-types";
import { Tabs, Pagination } from 'antd';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { setQuery } from '../../redux/actions/QueryActions';
import { loadFilters } from '../../redux/actions/FiltersActions';
import Spinner from '../_global/Spinner';
import ExploreFilter from './ExploreFilter';
import { getQueryObject, getQueryString, handleError } from '../../_helpers'
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';
import './ExploreLoader.scss'
const { TabPane } = Tabs;

const ExploreLoader = ({ loading, count, setQuery, loadFilters, loadScenarios, scenarios, query, filters }) => {
  const location = useLocation();
  const [explorer, setExplorer] = useState(localStorage.explorer || 'year');
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let queryObject = getQueryObject(location)
    if (explorer === 'pathway') queryObject.year = '';
    if (explorer === 'year') queryObject.pathway = '';
    loadScenarios(queryObject).catch(handleError)
    loadFilters(queryObject).catch(handleError)
    setQuery(queryObject);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }, [explorer])

  const changePage = page => {
    setCurrentPage(page)
    let queryObject = { ...query, skip: page };
    setQuery(queryObject);
  }

  const changeExplorer = tab => {
    localStorage.setItem('explorer', tab);
    setExplorer(tab)
    if (tab === 'pathway') setQuery({ ...query, year: '' });
    if (tab === 'year') setQuery({ ...query, pathway: '' })
  }

  return (<div>
    <div className="nzap-explore-loader">
      <div className="row">
        <div className="col-12 pt-5 filter-section-label" id="explore">Explore the Data</div>
        <div className="col-12 pt-3">
          <div className="d-block mb-3 filter-explore-by">Examine by</div>
          <Tabs defaultActiveKey={explorer} onChange={changeExplorer}>
            <TabPane tab="YEAR" key="year" />
            <TabPane tab="PATHWAY" key="pathway" />
          </Tabs>
        </div>
      </div>
    </div>
    <ExploreFilter explorer={explorer} />
    <div className="row">
      <div className="col-12">
        {loading ? <Spinner /> : (
          <div className="row">
            {scenarios.length ? <div className="col-12 nzap-table-holder">
              {explorer === 'pathway' ? <ExploreByPathway /> : <ExploreByYear />}
            </div> : null}
          </div>
        )}
      </div>
      <div className="col-12 pl-4 pr-4">
        <div className="row">
          <div className="col-12 pl-0 pr-0 nzap-table-footer position-relative pt-3">
            <div className="d-none d-md-block position-absolute" id="left-corner"></div>
            <div className="d-none d-md-block position-absolute" id="right-corner"></div>
          </div>
        </div>
        <div className="row">

          <div className="col-12 col-md-6 pt-4 pt-md-2 text-center text-md-left order-12 order-md-1 links">
            <div className="d-block pt-2"><button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius"><span className="pr-2">Download this table as csv </span><Download className="" /></button></div>
            <div className="d-block pt-3">
              <button className="nzap-button pt-2 pb-2 pr-3 pl-3 nzap-radius">
                download the fact sheet for {filters.usStates.filter(e => e.slug === query.state)[0] ? filters.usStates.filter(e => e.slug === query.state)[0].label : ''}
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 pt-3 pt-md-2 text-center text-md-right order-1 order-md-12 nzap-pagination">
            <Pagination total={count} current={currentPage} showSizeChanger={false} defaultPageSize={200} onChange={changePage} />
          </div>
        </div>

      </div>
    </div>

  </div>)
}








ExploreLoader.propTypes = {
  scenarios: PropTypes.array.isRequired,
  query: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  loadScenarios: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  loadFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
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

const mapDispatchToProps = { loadScenarios, setQuery, loadFilters }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


