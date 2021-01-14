import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { loadQuery } from '../../redux/actions/QueryActions';
import 'antd/dist/antd.css';
import './ExploreFilter.scss';

const { Option } = Select;
const { Panel } = Collapse;



// const getQueryObject = () => {
//   let obj = {};
//   ['state', 'years', 'levelOneFilters', 'levelTwoFilters', 'examine'].forEach(q => {
//     let val = new URLSearchParams(useLocation().search).get(q);
//     obj[q] = val ? val.split(',') : []
//   });
//   return obj
// }


const ExploreFilter = ({ query, loadQuery, filters }) => {
  const [filterDraw, setFilterDraw] = useState(localStorage.filterDraw === 'true');
  const [usState, setUsState] = useState(query.state ? query.state[0] : null);
  const [levelOneFilters, setLevelOneFilters] = useState([]);
  const [levelTwoFilters, setLevelTwoFilters] = useState([]);
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={filterDraw ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;

  useEffect(() => {
    if (!usState && query.state) setUsState(query.state[0] || 'none')
    if (query.categories && !levelOneFilters.length) setLevelOneFilters(assembleCategories());
    let activeSubcategories = levelOneFilters.filter(category => category.active && category.levelTwoFilters.length).map(category => category.levelTwoFilters).flat();
    if (activeSubcategories.length !== levelTwoFilters.length) setLevelTwoFilters(assembleSubcategories());
    // if (activeSubcategories && !levelTwoFilters.length) setLevelTwoFilters(assembleSubcategories());
    // if (!activeSubcategories && levelTwoFilters.length) setLevelTwoFilters([]);
  })


  function getQueryString(queryObject) {
    return "?" + Object.keys(queryObject).map((key) => {
      const element = queryObject[key];
      return element.length ? `${key}=${element.join(',')}` : null;
    }).filter(e => e).join('&')
  }

  function usStateChange(usStateSlug) {
    let queryObject = { ...query, state: [usStateSlug] };
    loadQuery(queryObject)
    setUsState(usStateSlug);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function yearChange(year) {
    let queryObject = { ...query, year: [year] };
    loadQuery(queryObject);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateCategories(slug) {
    let newCategories = [...levelOneFilters].map(category => {
      if (category.slug === slug) category.active = !category.active;
      return category;
    })
    let categories = newCategories.filter(category => category.active).map(category => category.slug);
    let subcategories = newCategories
      .filter(category => category.active)
      .map(category => category.levelTwoFilters)
      .flat()
      .map(category => category.slug)
      .filter(category => query.subcategories.indexOf(category) > -1)
    let queryObject = { ...query, categories, subcategories };
    loadQuery(queryObject)
    setLevelOneFilters(newCategories);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateSubcategories(slug) {
    let newSubcategories = [...levelTwoFilters].map(subcategory => {
      if (subcategory.slug === slug) subcategory.active = !subcategory.active;
      return subcategory;
    })
    let subcategories = newSubcategories.filter(subcategory => subcategory.active).map(subcategory => subcategory.slug)
    let queryObject = { ...query, subcategories }
    loadQuery(queryObject)
    setLevelTwoFilters(newSubcategories)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function assembleCategories() {
    return filters.levelOneFilters.map(e => {
      e.active = query.categories.indexOf(e.slug) > -1;
      return e;
    })
  }

  function assembleSubcategories() {
    if (!levelOneFilters.length) return [];
    return levelOneFilters
      .filter(category => category.active)
      .map(category => category.levelTwoFilters)
      .flat().map(e => {
        e.active = query.subcategories.indexOf(e.slug) > -1;
        return e;
      })
  }

  function updateFilterDraw(isActive) {
    localStorage.setItem('filterDraw', isActive);
    setFilterDraw(isActive);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          {
            usState ? <Select defaultValue={usState} style={{ width: 250 }} onChange={usStateChange}>
              <Option value="none">Select a State or National</Option>
              {filters.usStates.map((usState, i) => <Option key={i} value={usState.slug}>{usState.label}</Option>)}
            </Select> : ''
          }
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
                      {levelOneFilters.map((category, i) => {
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
            {filters.years.map((year, i) => <div key={i} className="d-table-cell clickable" onClick={() => { yearChange(year.slug) }}>{year.label}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

ExploreFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  loadQuery: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    query: state.query
  }
}

const mapDispatchToProps = { loadQuery }

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);