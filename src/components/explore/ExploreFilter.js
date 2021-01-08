import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Select, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './ExploreFilter.scss';

const { Option } = Select;
const { Panel } = Collapse;

const filterShape = require('../../_data/filter-data.json');

const getQueryObject = () => {
  let query = {};
  ['state', 'years', 'categories', 'subcategories', 'examine'].forEach(q => {
    let val = new URLSearchParams(useLocation().search).get(q);
    query[q] = val ? val.split(',') : []
  });
  return query
}


const ExploreFilter = () => {
  const [filterDraw, setFilterDraw] = useState(true);
  const [queryObject, setQueryObject] = useState(getQueryObject())
  const [usState, setUsState] = useState(new URLSearchParams(useLocation().search).get('state'));
  const [categories, setCategories] = useState(assembleCategories());
  const [subcategories, setSubCategories] = useState(assembleSubcategories(categories));
  const filterHeader = <><span className="pl-0">Filter</span><DownOutlined rotate={filterDraw ? 180 : 0} className="align-baseline pl-4 clickable" /> </>;
  useEffect(() => { })


  function getQueryString() {
    return "?" + Object.keys(queryObject).map((key) => {
      const element = queryObject[key];
      return element.length ? `${key}=${element.join(',')}` : null;
    }).filter(e => e).join('&')
  }

  function usStateChange(usStateSlug) {
    setUsState(usStateSlug);
    queryObject.state = [usStateSlug];
    setQueryObject(queryObject)
    window.history.replaceState(null, null, getQueryString())
  }

  function updateCategories(slug) {
    let newCategories = [...categories].map(category => {
      if (category.slug === slug) category.active = !category.active;
      return category;
    })
    queryObject.categories = newCategories.filter(category => category.active).map(category => category.slug);
    setQueryObject(queryObject)
    setCategories(newCategories);
    return window.history.replaceState(null, null, getQueryString())
  }

  function updateSubcategories(slug) {
    let newSubcategories = [...subcategories].map(subcategory => {
      if (subcategory.slug === slug) subcategory.active = !subcategory.active;
      return subcategory;
    })
    queryObject.subcategories = newSubcategories.filter(subcategory => subcategory.active).map(subcategory => subcategory.slug);
    setQueryObject(queryObject)
    setSubCategories(newSubcategories)
    return window.history.replaceState(null, null, getQueryString())
  }

  function assembleCategories() {
    return filterShape.categories.map(e => {
      e.active = queryObject.categories.indexOf(e.slug) > -1;
      return e;
    })
  }

  function assembleSubcategories(categories) {
    let subcategories = categories
      .filter(category => category.active)
      .map(category => category.subcategories)
      .flat()
    return subcategories.map(e => {
      e.active = queryObject.subcategories.indexOf(e.slug) > -1;
      return e;
    })
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Select defaultValue={usState} style={{ width: 250 }} onChange={usStateChange}>
            <Option value="none">Select a State or National</Option>
            {filterShape.usStates.map((usState, i) => <Option key={i} value={usState.slug}>{usState.label}</Option>)}
          </Select>
        </div>
        <div className="col-12">
          <Collapse
            bordered={false}
            defaultActiveKey={filterDraw ? ['1'] : []}
            expandIcon={({ isActive }) => setFilterDraw(isActive)}
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
                          ? "d-inline-block pl-2 pr-2 pt-2 pb-2 mb-2 mr-2 nzap-radius clickable filter-category active"
                          : "d-inline-block pl-2 pr-2 pt-2 pb-2 mb-2 mr-2 nzap-radius clickable filter-category"
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



function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    loading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);