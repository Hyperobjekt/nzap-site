import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setQuery } from '../../redux/actions/QueryActions';
import { setUsStateFilter, setLevelTwoFilter, loadFiltersActionSuccess } from '../../redux/actions/FiltersActions';
import { loadScenarios } from '../../redux/actions/ScenariosActions';
import { getQueryString } from '../../_helpers'
import 'antd/dist/antd.css';
import './ExploreFilter.scss';

const { Option } = Select;
const { Panel } = Collapse;


const ExploreFilter = ({ explorer, query, setQuery, filters, setUsStateFilter, setLevelTwoFilter, loadFiltersActionSuccess, loadScenarios }) => {
  const [isFilterDrawOpen, toggleFilterDraw] = useState(localStorage.isFilterDrawOpen === 'true');
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={isFilterDrawOpen ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;

  useEffect(() => {
    if (!query.state) setQuery({ ...query, state: 'national' })
    if (filters.levelOneFilters.length) {
      loadScenarios(query)
      loadFiltersActionSuccess(filters, query)
    }
  }, [query])


  function usStateChange(usStateSlug) {
    let queryObject = { ...query, state: usStateSlug };
    setQuery(queryObject)
    setUsStateFilter(usStateSlug)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function examineChange(tab) {
    let queryObject = { ...query };
    queryObject[explorer] = tab;
    setQuery(queryObject);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateCategories(slug) {
    let categorySlugs;
    if (!query.categories.includes(slug)) categorySlugs = [...query.categories, slug];
    if (query.categories.includes(slug)) {
      categorySlugs = [...query.categories]
      categorySlugs.splice(query.categories.indexOf(slug), 1)
    }
    let queryObject = { ...query, categories: categorySlugs };
    setQuery(queryObject)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateSubcategories(slug) {
    let subcategorySlugs;
    if (!query.subcategories.includes(slug)) subcategorySlugs = [...query.subcategories, slug];
    if (query.subcategories.includes(slug)) {
      subcategorySlugs = [...query.subcategories]
      subcategorySlugs.splice(query.subcategories.indexOf(slug), 1)
    }
    let queryObject = { ...query, subcategories: subcategorySlugs };
    setQuery(queryObject);
    setLevelTwoFilter(queryObject.subcategories);
    return window.history.replaceState(null, null, getQueryString(queryObject));
  }

  function updateFilterDraw(isActive) {
    localStorage.setItem('isFilterDrawOpen', isActive);
    toggleFilterDraw(isActive);
  }

  const examiner = () => {
    if (!filters.years || !filters.scenarios) return;

    let reject = ['', 'high', 'low', 'yes']
    let years = [...filters.years].sort((a, b) => a.slug < b.slug ? -1 : 1);
    let pathways = [...filters.scenarios].sort((a, b) => a.slug < b.slug ? -1 : 1).filter(e => !reject.includes(e.slug))
    let tempQuery = { ...query };

    let tabs;
    if (explorer === 'year') {
      tabs = years;
      tempQuery[explorer] = tempQuery[explorer] || '2020'
    }
    if (explorer === 'pathway') {
      tabs = pathways;
      tempQuery[explorer] = tempQuery[explorer] || 'ref'
    }

    return <React.Fragment>
      {/* Desktop */}
      <div className="d-none d-md-table text-center w-100 tabs">
        {tabs.map((tab, i) =>
          <div
            role="button"
            tabIndex={0} key={i}
            className={(tempQuery[explorer]) === tab.slug ? 'd-table-cell pl-3 pr-3 clickable tab active' : 'd-table-cell pl-3 pr-3 clickable tab'}
            onKeyDown={() => { examineChange(tab.slug) }}
            onClick={() => { examineChange(tab.slug) }}>
            <div className="tile tween pt-1">
              {tab.label}
            </div>
          </div>
        )}
      </div>
      {/* Mobile */}
      <label htmlFor="explore-by-filter" className="d-block d-md-none pb-2 scope">Scope ???(select to change {explorer})</label>
      <Select
        className="d-block d-md-none w-100 nzap-radius"
        id="explore-by-filter"
        showArrow={false}
        defaultValue={tempQuery[explorer]}

        onChange={examineChange}
        aria-activedescendant={null}
        aria-expanded="false">
        {tabs.map((tab, i) => <Option key={i} id={tab.slug} value={tab.slug}>{tab.label}</Option>)}
      </Select>
    </React.Fragment>
  }

  return (
    <div className="container nzap-filters">
      <div className="row">
        <div className="col-12 pl-0 pt-4 pb-3">
          <label htmlFor="geo-scope" className="d-block pb-2 scope">
            Scope (select state or national)
          </label>
          {query.state ? <Select className="nzap-radius w-100 w-md-25" id="geo-scope" showArrow={false} defaultValue={query.state} onChange={usStateChange} aria-activedescendant={null} aria-expanded="false">
            {filters.usStates.map((usState, i) => <Option key={i} id={usState.slug} value={usState.slug}>{usState.label}</Option>)}
          </Select> : null}
        </div>
        <div className="col-12 pb-3 pl-0">
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
                    {filters.levelTwoFilters.filter(subcategory => subcategory.slug).length ? <div className="d-block filter-label pl-2 pb-2">Subcategories</div> : null}
                    <div className="d-block pl-2 filter-data">
                      {filters.levelTwoFilters.filter(subcategory => subcategory.slug).map((subcategory, i) => {
                        const subcategoryClass = subcategory.active
                          ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-2 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-2 mr-2 nzap-radius clickable filter-category"
                        return <div role="button" tabIndex={0} key={i} className={subcategoryClass} onKeyDown={() => { return updateSubcategories(subcategory.slug) }} onClick={() => { return updateSubcategories(subcategory.slug) }}>{subcategory.label}</div>
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
    </div>
  )
}

ExploreFilter.propTypes = {
  explorer: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired,
  setUsStateFilter: PropTypes.func.isRequired,
  setLevelTwoFilter: PropTypes.func.isRequired,
  loadFiltersActionSuccess: PropTypes.func.isRequired,
  loadScenarios: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    filters: state.filters,
    query: state.query
  }
}

const mapDispatchToProps = { setQuery, setUsStateFilter, setLevelTwoFilter, loadFiltersActionSuccess, loadScenarios }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);