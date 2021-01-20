import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { setQuery } from '../../redux/actions/QueryActions';
import { setUsStateFilter, setLevelOneFilter } from '../../redux/actions/FiltersActions'
import 'antd/dist/antd.css';
import './ExploreFilter.scss';

const { Option } = Select;
const { Panel } = Collapse;

const getQueryString = queryObject => "?" + Object.keys(queryObject).map((key) => {
  const element = queryObject[key];
  return element.length ? `${key}=${element.join(',')}` : null;
}).filter(e => e).join('&')


const ExploreFilter = ({ query, setQuery, filters, setUsStateFilter, setLevelOneFilter }) => {
  const [filterDraw, setFilterDraw] = useState(localStorage.filterDraw === 'true');
  const [levelTwoFilters, setLevelTwoFilters] = useState([]);
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={filterDraw ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;

  useEffect(() => {
    console.log(query)
    setQuery(query)
    setUsStateFilter(query.state || 'national');
    setLevelOneFilter(query.categories)
    // if (query.categories && !levelOneFilters.length) setLevelOneFilters(assembleCategories());
    // let activeSubcategories = levelOneFilters.filter(category => category.active && category.levelTwoFilters.length).map(category => category.levelTwoFilters).flat();
    // if (activeSubcategories.length !== levelTwoFilters.length) setLevelTwoFilters(assembleSubcategories());
    // if (activeSubcategories && !levelTwoFilters.length) setLevelTwoFilters(assembleSubcategories());
    // if (!activeSubcategories && levelTwoFilters.length) setLevelTwoFilters([]);
  }, [])


  function usStateChange(usStateSlug) {
    let queryObject = { ...query, state: [usStateSlug] };
    setQuery(queryObject)
    setUsStateFilter(usStateSlug)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function yearChange(year) {
    let queryObject = { ...query, year: [year] };
    setQuery(queryObject);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateCategories(slug) {
    let categorySlugs = [...query.categories, slug];
    let queryObject = { ...query, categories: categorySlugs };
    setQuery(queryObject)
    console.log(query.categories, queryObject)
    setLevelOneFilter(queryObject.categories);
    return window.history.replaceState(null, null, getQueryString(query))
  }

  function updateSubcategories(slug) {
    let newSubcategories = [...levelTwoFilters].map(subcategory => {
      if (subcategory.slug === slug) subcategory.active = !subcategory.active;
      return subcategory;
    })
    let subcategories = newSubcategories.filter(subcategory => subcategory.active).map(subcategory => subcategory.slug)
    let queryObject = { ...query, subcategories }
    setQuery(queryObject)
    setLevelTwoFilters(newSubcategories)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }


  function updateFilterDraw(isActive) {
    localStorage.setItem('filterDraw', isActive);
    setFilterDraw(isActive);
  }


  return (
    <div className="container nzap-filters">
      <div className="row">
        <div className="col-12">
          {query.state ? <Select defaultValue={query.state} style={{ width: 250 }} onChange={usStateChange}>
            {filters.usStates.map((usState, i) => <Option key={i} value={usState.slug}>{usState.label}</Option>)}
          </Select> : null}
        </div>
        <div className="col-12">
          <Collapse
            bordered={false}
            defaultActiveKey={filterDraw ? ['1'] : []}
            expandIcon={({ isActive }) => updateFilterDraw(isActive)}
            className="site-collapse-custom-collapse">
            <Panel header={filterHeader} key="1" className="site-collapse-custom-panel" >

              <div className="container-fluid pl-0">
                <div className="row">
                  <div className="col-12 filter-categories">
                    <div className="d-block filter-label">Categories</div>
                    <div className="d-block filter-data">
                      {filters.levelOneFilters.map((category, i) => {
                        const categoryClass = category.active
                          ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
                        return <div key={i} className={categoryClass} onClick={() => { return updateCategories(category.slug) }}>{category.label}</div>
                      })}
                    </div>
                  </div>
                  <div className="col-12 filter-categories">
                    {levelTwoFilters.filter(subcategory => subcategory.slug).length ? <div className="d-block filter-label">Subcategories</div> : null}
                    <div className="d-block filter-data">
                      {levelTwoFilters.filter(subcategory => subcategory.slug).map((subcategory, i) => {
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
        <div className="col-12 pt-3">
          <div className="d-table text-center w-100">
            {filters.years.sort((a, b) => a.slug < b.slug ? -1 : 1).map((year, i) => <div key={i} className="d-table-cell clickable" onClick={() => { yearChange(year.slug) }}>{year.label}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

ExploreFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired,
  setUsStateFilter: PropTypes.func.isRequired,
  setLevelOneFilter: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    filters: state.filters,
    query: state.query
  }
}

const mapDispatchToProps = { setQuery, setUsStateFilter, setLevelOneFilter }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);