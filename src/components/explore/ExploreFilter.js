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

const filterShape = require('../../_data/filter-data.json');

// const getQueryObject = () => {
//   let obj = {};
//   ['state', 'years', 'categories', 'subcategories', 'examine'].forEach(q => {
//     let val = new URLSearchParams(useLocation().search).get(q);
//     obj[q] = val ? val.split(',') : []
//   });
//   return obj
// }


const ExploreFilter = ({ query, loadQuery }) => {
  const [filterDraw, setFilterDraw] = useState(localStorage.filterDraw === 'true');
  const [usState, setUsState] = useState(query.state ? query.state[0] : null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={filterDraw ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;

  useEffect(() => {

    if (!usState && query.state) setUsState(query.state[0] || 'none')
    if (query.categories && !categories.length) setCategories(assembleCategories());
    let activeSubcategories = categories.filter(category => category.active && category.subcategories.length).length
    console.log(activeSubcategories, subcategories.length)
    if (activeSubcategories && !subcategories.length) setSubCategories(assembleSubcategories());
    if (!activeSubcategories && subcategories.length) setSubCategories([]);
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

  function updateCategories(slug) {
    let newCategories = [...categories].map(category => {
      if (category.slug === slug) category.active = !category.active;
      return category;
    })
    let queryObject = { ...query, categories: newCategories.filter(category => category.active).map(category => category.slug) };
    loadQuery(queryObject)
    setCategories(newCategories);
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function updateSubcategories(slug) {
    let newSubcategories = [...subcategories].map(subcategory => {
      if (subcategory.slug === slug) subcategory.active = !subcategory.active;
      return subcategory;
    })
    let queryObject = { ...query, subcategories: newSubcategories.filter(subcategory => subcategory.active).map(subcategory => subcategory.slug) }
    loadQuery(query)
    setSubCategories(newSubcategories)
    return window.history.replaceState(null, null, getQueryString(queryObject))
  }

  function assembleCategories() {
    return filterShape.categories.map(e => {
      e.active = query.categories.indexOf(e.slug) > -1;
      return e;
    })
  }

  function assembleSubcategories() {
    if (!categories.length) return [];
    let subcategories = categories
      .filter(category => category.active)
      .map(category => category.subcategories)
      .flat()
    return subcategories.map(e => {
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
              {filterShape.usStates.map((usState, i) => <Option key={i} value={usState.slug}>{usState.label}</Option>)}
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
                      {categories.map((category, i) => {
                        const categoryClass = category.active
                          ? "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-1 pb-1 mb-3 mr-2 nzap-radius clickable filter-category";
                        return <div key={i} className={categoryClass} onClick={() => { return updateCategories(category.slug) }}>{category.label}</div>
                      })}
                    </div>
                  </div>
                  <div className="col-12 filter-categories">
                    <div className="d-block filter-label">Subcategories</div>
                    <div className="d-block filter-data">
                      {subcategories.map((subcategory, i) => {
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
      </div>
    </div>
  )
}

ExploreFilter.propTypes = {
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