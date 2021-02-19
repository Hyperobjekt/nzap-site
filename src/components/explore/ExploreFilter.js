import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setFilterAction } from '../../redux/actions/FiltersActions';
// import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { generateUrl } from '../../_helpers'
import 'antd/dist/antd.css';
import './ExploreFilter.scss';

const { Option } = Select;
const { Panel } = Collapse;


const ExploreFilter = ({ filters, setFilterAction }) => {
  const [isFilterDrawOpen, toggleFilterDraw] = useState(localStorage.isFilterDrawOpen === 'true');
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={isFilterDrawOpen ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;

  useEffect(() => {
    window.history.replaceState(null, null, filters.url)
    // if (!query.state) setQuery({ ...query, state: 'national' })
    // if (filters.levelOneFilters.length) {
    //   loadScenarios(query)
    //   loadFiltersAction(filters, query)
    // }
  }, [filters])

  function usStateChange(usStateSlug) {
    let usStates = [...filters.usStates].map(state => ({ ...state, active: state.slug === usStateSlug }));
    return setFilterAction({ ...filters, usStates, url: generateUrl({ ...filters, usStates }) })
  }

  function examineChange(tab) {
    if (filters.explorer === 'year') {
      let years = [...filters.years].map(year => ({ ...year, active: year.slug === tab }))
      return setFilterAction({ ...filters, table: tab, years, url: generateUrl({ ...filters, table: tab, years }) })
    }
    if (filters.explorer === 'pathway') {
      let scenarios = [...filters.scenarios].map(scenario => ({ ...scenario, active: scenario.slug === tab }))
      return setFilterAction({ ...filters, table: tab, scenarios, url: generateUrl({ ...filters, table: tab, scenarios }) })
    }
  }

  function updateCategories(slug) {
    let activeSlugs = [...filters.levelOneFilters].filter(category => category.active).map(category => category.slug);
    activeSlugs.includes(slug) ? activeSlugs.splice(activeSlugs.indexOf(slug), 1) : activeSlugs.push(slug)
    let levelOneFilters = [...filters.levelOneFilters].map(category => ({ ...category, active: activeSlugs.includes(category.slug) }));
    return setFilterAction({ ...filters, levelOneFilters, url: generateUrl({ ...filters, levelOneFilters }) })
  }

  function updateSubcategories(slug) {
    let activeSlugs = [...filters.levelTwoFilters].filter(subcategory => subcategory.active).map(subcategory => subcategory.slug);
    activeSlugs.includes(slug) ? activeSlugs.splice(activeSlugs.indexOf(slug), 1) : activeSlugs.push(slug);
    let levelTwoFilters = [...filters.levelTwoFilters].map(subcategory => ({ ...subcategory, active: activeSlugs.includes(subcategory.slug) }));
    return setFilterAction({ ...filters, levelTwoFilters, url: generateUrl({ ...filters, levelTwoFilters }) })
  }

  function updateFilterDraw(isActive) {
    localStorage.setItem('isFilterDrawOpen', isActive);
    toggleFilterDraw(isActive);
  }

  const examiner = () => {
    if (!filters.years || !filters.scenarios) return;
    let reject = ['', 'high', 'low', 'yes']
    let years = [...filters.years].sort((a, b) => a.slug < b.slug ? -1 : 1);
    let pathways = [...filters.scenarios].filter(e => !reject.includes(e.slug))
    let tabs;
    if (filters.explorer === 'year') tabs = years;
    if (filters.explorer === 'pathway') {
      let sortOrder = ['ref', 'e-positive', 'e-negative', 'e-b-positive', 'ere-negative', 'ere-positive'];
      tabs = [];
      [...pathways].forEach(e => tabs[sortOrder.indexOf(e.slug)] = e)
    }

    return <React.Fragment>
      {/* Desktop */}
      <div className="d-none d-md-table text-center w-100 tabs">
        {tabs.map((tab, i) =>
          <div
            role="button"
            tabIndex={0} key={i}
            className={filters.explorer === tab.slug ? 'd-table-cell pl-3 pr-3 clickable tab active' : 'd-table-cell pl-3 pr-3 clickable tab'}
            onKeyDown={() => { examineChange(tab.slug) }}
            onClick={() => { examineChange(tab.slug) }}>
            <div className="tile tween pt-1">
              {tab.label}
            </div>
          </div>
        )}
      </div>
      {/* Mobile */}
      <label htmlFor="explore-by-filter" className="d-block d-md-none pb-2 scope">Scope ???(select to change {filters.explorer})</label>
      <Select
        className="d-block d-md-none w-100 nzap-radius"
        id="explore-by-filter"
        showArrow={false}
        defaultValue={filters.explorer}
        onChange={examineChange}
        aria-activedescendant={null}
        aria-expanded="false">
        {tabs.map((tab, i) => <Option key={i} id={tab.slug} value={tab.slug}>{tab.label}</Option>)}
      </Select>
    </React.Fragment>
  }


  const loadUI = () => {
    let activeUsState = filters.usStates.filter(state => state.active)[0].slug;
    return <div className="container nzap-filters">
      <div className="row">
        <div className="col-12 pl-0 pt-4 pb-3">
          <label htmlFor="geo-scope" className="d-block pb-2 scope">
            Scope (select state or national)
        </label>
          <Select className="nzap-radius w-100 w-md-25" id="geo-scope" showArrow={false} defaultValue={activeUsState} onChange={usStateChange} aria-activedescendant={null} aria-expanded="false">
            {filters.usStates.map((usState, i) => <Option key={i} id={usState.slug} value={usState.slug}>{usState.label}</Option>)}
          </Select>
        </div>
        <div className="col-12 position-relative pb-3 pl-0">
          <Collapse
            bordered={false}
            defaultActiveKey={isFilterDrawOpen ? ['1'] : []}
            expandIcon={({ isActive }) => updateFilterDraw(isActive)}
            className="site-collapse-custom-collapse">
            <Panel header={filterHeader} key="1" className="site-collapse-custom-panel" >
              <div className="container-fluid pl-0">
                <div className="row">
                  <div className="col-12 filter-categories">
                    <div className="d-block pl-2 filter-label pb-2">Categories</div>
                    <div className="d-block pl-2 filter-data">
                      {filters.levelOneFilters.map((category, i) => {
                        const categoryClass = category.active
                          ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
                        return <div role="button" tabIndex={0} key={i} className={categoryClass} onKeyDown={() => { return updateCategories(category.slug) }} onClick={() => { return updateCategories(category.slug) }}>{category.label}</div>
                      })}
                    </div>
                  </div>
                  <div className="col-12 filter-categories">
                    <div className="d-block pl-2 filter-label pb-2">Subcategories</div>
                    <div className="d-block pl-2 filter-data">
                      {filters.levelTwoFilters.map((category, i) => {
                        const categoryClass = category.active
                          ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
                        return <div role="button" tabIndex={0} key={i} className={categoryClass} onKeyDown={() => { return updateSubcategories(category.slug) }} onClick={() => { return updateSubcategories(category.slug) }}>{category.label}</div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="col-12 pl-md-4 pr-md-4">
          <div className="row">
            <div className="d-md-block col-12 pl-0 pr-0 examiner position-relative">
              <div className="d-none d-md-block position-absolute" id="top-left-corner"></div>
              <div className="d-none d-md-block position-absolute" id="top-right-corner"></div>
              {examiner()}
            </div>
          </div>
        </div>

      </div>
    </div >

  }
  return (<>{filters ? loadUI() : null}</>)
}

ExploreFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilterAction: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = { setFilterAction }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);