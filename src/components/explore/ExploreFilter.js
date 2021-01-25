import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setQuery } from '../../redux/actions/QueryActions';
import { setUsStateFilter, setLevelOneFilter, setLevelTwoFilter, loadFiltersActionSuccess } from '../../redux/actions/FiltersActions';
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

  function yearChange(year) {
    let queryObject = { ...query, year };
    setQuery(queryObject);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }
  function yearPathway(pathway) {
    let queryObject = { ...query, pathway };
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

    if (explorer === 'year') return <div className="d-none d-md-table text-center w-100 years">
      {years.map((year, i) =>
        <div key={i} className={(query.year || '2020') === year.slug ? 'd-table-cell pl-3 pr-3 clickable year active' : 'd-table-cell pl-3 pr-3 clickable year'} onClick={() => { yearChange(year.slug) }}>
          <div className="tile tween pt-1">
            {year.label}
          </div>
        </div>
      )}
    </div>
    if (explorer === 'pathway') return <div className="d-table text-center w-100 years">
      {pathways.map((pathway, i) =>
        <div key={i} className={(query.pathway || 'ref') === pathway.slug ? 'd-table-cell pl-3 pr-3 clickable year active' : 'd-table-cell pl-3 pr-3 clickable year'} onClick={() => { yearPathway(pathway.slug) }}>
          <div className="tile tween pt-1">
            {pathway.label}
          </div>
        </div>
      )}
    </div>
  }

  return (
    <div className="container nzap-filters">
      <div className="row">
        <div className="col-12 pl-0 pt-4 pb-3">
          <div className="d-block pb-2 scope">
            Scope (select state or national)
          </div>
          {query.state ? <Select className="nzap-radius" showArrow={false} defaultValue={query.state} style={{ width: 250 }} onChange={usStateChange}>
            {filters.usStates.map((usState, i) => <Option key={i} value={usState.slug}>{usState.label}</Option>)}
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
                        return <div key={i} className={categoryClass} onClick={() => { return updateCategories(category.slug) }}>{category.label}</div>
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
                        return <div key={i} className={subcategoryClass} onClick={() => { return updateSubcategories(subcategory.slug) }}>{subcategory.label}</div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="col-12 pl-4 pr-4">
          <div className="row">
            <div className="d-none d-md-block col-12 pl-0 pr-0 examiner position-relative pt-3">
              <div className="d-none d-md-block position-absolute" id="left-corner"></div>
              <div className="d-none d-md-block position-absolute" id="right-corner"></div>
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