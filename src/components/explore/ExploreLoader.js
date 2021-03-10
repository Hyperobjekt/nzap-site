import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Progress, Tabs, Pagination } from 'antd';
import { Download } from 'react-bootstrap-icons'
// import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { loadFilters, setFilterAction } from '../../redux/actions/FiltersActions';
import * as filtersApi from "../../api/filtersApi";
import * as scenariosApi from "../../api/scenariosApi";
import { generateUrl, getQueryObject, convertToCSV, assembleFilters, assembleQuery, updateFiltersFromQuery, handleError } from '../../_helpers'
// import initialState from "../../redux/reducers/initialState";
import Spinner from '../_global/Spinner';
import PropTypes from "prop-types";
import ExploreByPathway from './ExploreByPathway';
import ExploreByYear from './ExploreByYear';
import './ExploreLoader.scss'
import * as moment from 'moment-timezone';
import ExploreFilter from "./ExploreFilter";
import offsiteIcon from '../../assets/images/icons/offsite-link.svg'
import dataGuidePDF from '../../assets/papers/data-guide.pdf';




const { TabPane } = Tabs;
const ExploreLoader = ({ loading, count, loadFilters, setFilterAction, filters, scenarios }) => {
  let sheetArr = [];
  const location = useLocation();
  const [downloadingCSV, setDownloadingCSV] = useState(false)
  const [dlProgress, setDlProgress] = useState(0);



  useEffect(() => {
    if (!location.search) {
      loadFilters().catch(handleError);
      // loadScenarios(filters.url).catch(handleError);
      return;
    }
    let queryObject = getQueryObject(location);
    // loadScenarios(location.search).catch(handleError);
    filtersApi.getFilters().then(fdata => {
      let freshfilters = updateFiltersFromQuery(assembleFilters(filters, fdata), queryObject);
      console.log(freshfilters)
      setFilterAction({ ...freshfilters, url: generateUrl(freshfilters) })
    })
  }, []);


  const changeExplorer = tab => {
    localStorage.setItem('explorer', tab);
    let newFilters = {
      ...filters,
      explorer: tab,
      table: tab === 'year' ? '2020' : 'ref',
      page: null
    }
    setFilterAction({ ...newFilters, url: generateUrl(newFilters) })
  }
  const changePage = (page, pageSize) => {
    let limit = window.PAGE_LIMIT;
    var myDiv = document.getElementById('nzap-table-holder');
    myDiv.scrollTop = 0;
    if (pageSize) limit = pageSize;
    setFilterAction({ ...filters, page, limit, url: generateUrl({ ...filters, page, limit }) })
  }
  const downloadFullCSV = (sheetArr, headers) => {
    let csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...sheetArr].join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `nzap-data-${moment().format()}.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
    setTimeout(() => {
      setDownloadingCSV(false);
      setDlProgress(0)
    }, 3000)
  }
  const downloadBatch = i => {
    setDownloadingCSV(true);
    let downloadCount = Math.ceil(count / window.PAGE_LIMIT);
    let queryObject = { ...assembleQuery(filters.url), skip: i * window.PAGE_LIMIT, limit: window.PAGE_LIMIT, sort: '_alt_l1,_alt_l2,_alt_l3,_alt_v,_variabl_name,_year' }
    scenariosApi.getScenarios(queryObject).then(dl => {
      let data = dl.data.map(row => {
        Object.keys(row).filter(cell => cell.charAt(0) === '_' || cell === 'id' || cell.substring(0, 4) === 'alt_' || cell.substring(0, 5) === 'unit_').forEach(key => delete row[key])
        return row;
      })
      let converted = convertToCSV(data);
      i++;
      setDlProgress(Math.round((i / downloadCount) * 100))
      sheetArr = [...sheetArr, ...converted.csvArr]
      if (downloadCount > i) return downloadBatch(i);
      if (downloadCount === i) return downloadFullCSV(sheetArr, converted.headers)
    })
  }

  const loadUI = () => {
    return <React.Fragment>
      <div className="nzap-explore-loader" id="explore">
        <div className="row">
          <div className="col-12 pt-3 filter-section-label">
            <h3>Explore the Data</h3>
          </div>
          <div className="col-12 mb-4 d-md-none d-block filter-data-guidelines">
            <a target="blank" rel="noopener noreferrer" href={dataGuidePDF}>
              <span className="pr-2">Read our data guide (PDF)</span>
              <span>
                <img src={offsiteIcon} style={{ width: '12px' }} alt="" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-12 pt-3">
            <div className="d-block mb-3 filter-explore-by">Examine by</div>
          </div>

          <div className="col-12">
            <div className="row pl-3 pr-3">

              <div className="col-12 explore-tabs-holder">
                <div className="row">
                  <div className="col-12 col-md-6 pr-md-0">
                    <Tabs defaultActiveKey={localStorage.explorer || filters.explorer} onChange={changeExplorer}>
                      <TabPane className="pl-1" tab="YEAR" key="year" />
                      <TabPane tab="PATHWAY" key="pathway" />
                    </Tabs>
                  </div>
                  <div className="col-12 d-none d-md-flex justify-content-end align-items-end col-md-6 pl-md-0 text-center text-md-right">
                    <div className="d-block pb-1 data-guidelines">
                      <a target="blank" rel="noopener noreferrer" href={dataGuidePDF}>
                        <span className="pr-2">Read our data guide (PDF)</span>
                        <span>
                          <img src={offsiteIcon} style={{ width: '16px', position: 'relative', top: '-2px' }} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <ExploreFilter />

      {/* */}
      <div className="row">
        <div className="col-12 nzap-table-holder">
          {loading ? <Spinner /> : (
            <div className="row">
              {scenarios.length ? <div className="col-12" id="nzap-table-holder" role="button" tabIndex={0}>
                {filters.explorer === 'pathway' ? <ExploreByPathway /> : <ExploreByYear />}
              </div> : <div className="col-12 text-center pt-5 pl-5 pr-5 no-data-holder">
                <div className="message nzap-deep-radius">
                  <h3>Sorry! No matching data found.</h3>
                  <p style={{ 'color': '#385369' }}>Adjust the filters and try again.</p>
                </div>
              </div>
              }
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
          <div className="row">
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
                  Download the fact sheet for {filters.usStates.filter(e => e.active)[0].label}
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-3 pt-md-2 text-center text-md-right order-1 order-md-12 nzap-pagination">
              {/* showSizeChanger={false} */}
              <Pagination total={count} current={Number(filters.page) || 1} pageSizeOptions={[200, 500, 1000, 1500, 2000]} defaultPageSize={Number(filters.limit) || window.PAGE_LIMIT} onChange={changePage} />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  }

  return (<>{filters.url ? loadUI() : null}</>)
}








ExploreLoader.propTypes = {
  scenarios: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  loadFilters: PropTypes.func.isRequired,
  // loadScenarios: PropTypes.func.isRequired,
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

const mapDispatchToProps = { loadFilters, setFilterAction }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreLoader);


