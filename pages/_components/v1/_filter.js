import React, { useEffect, useState } from 'react';
import UIKit from 'uikit';

const rawData = require('../../../data/filter-data.json');

const NzapFilter = (props) => {

  useEffect(() => {
    UIKit.dropdown('#dropdown-states-menu', { mode: 'click' })
    UIKit.dropdown('#dropdown-categories-menu', { mode: 'click' })
  })

  const [usState, setUsState] = useState(rawData.usStates[0]);
  const [byGroup, setByGroup] = useState('year');
  const [categories, setCategories] = useState(rawData.categories.map(e => e.label))
  const [activeCategories, setActiveCategories] = useState([])
  const [subcategories, setSubCategories] = useState([]);
  const [domActiveCategories, setDomActiveCategories] = useState([]);
  const [showMoreFilters, setShowMoreFilters] = useState(false)

  let domStates = rawData.usStates.map((usState, i) => <li onClick={() => { updateState(usState) }} className="pt-1 pb-1 pl-1 pr-1 clickable options" key={i}>{usState}</li>);
  let domCategories = categories.map((category, i) => <li onClick={() => { updateActiveCategory(category) }} className="pt-1 pb-1 pl-1 pr-1 clickable options" key={i}>{category}</li>);

  function updateState(usState) {
    UIKit.dropdown('#dropdown-states-menu').hide();
    setUsState(usState);
  }
  function updateActiveCategory(category) {
    let catArr = [...activeCategories, category];
    let subCatArr = rawData.categories
      .filter(e => catArr.includes(e.label))
      .map(e => {
        console.log(e)
        return e.subcategories;
      })
      .flat()
      .map(e => e.label)
      .map((e, i) =>
        <div className="d-inline-block pl-2 pr-2 mr-2 mb-2 pt-0 pb-0 clickable nzap-deep-radius nzap-border sub-category" key={i}>{e}</div>
      )
    let domActiveCatArr = catArr.map((e, i) =>
      <div className="d-inline-block position-relative pl-2 pr-4 mr-2 mb-2 pt-0 pb-0 clickable nzap-deep-radius nzap-border category" key={i}>
        <span>{e}</span>
        <span className="icon position-absolute"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg></span>
      </div>
    );
    setActiveCategories(catArr);
    setSubCategories(subCatArr);
    setDomActiveCategories(domActiveCatArr);
  }
  function toggleGroup() {
    if (byGroup === 'year') setByGroup('scenario');
    if (byGroup === 'scenario') setByGroup('year');
  }
  function toggleFilters() {
    setShowMoreFilters(!showMoreFilters)
  }


  return (
    <div className="container filter-holder nzap-deep-radius nzap-neumorph">
      <div className="row">
        <div className="col-12 pl-4 pr-4 pt-4 pb-4">
          <div className="row main-filters">
            <div className="col-6">

              <div className="select nzap-border nzap-radius position-relative pl-2 pr-2 pt-1 pb-1 d-inline-block">
                <span>{usState}</span>
                <span className="position-absolute icon">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </div>
              <div id="dropdown-states-menu" className="nzap-shadow">
                <ul className="uk-nav uk-dropdown-nav pv-3">
                  {domStates}
                </ul>
              </div>

            </div>
            <div className="col-6 text-right">
              <div className="d-inline-block pr-3 clickable">
                <span className="pr-1">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-richtext" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                    <path fillRule="evenodd" d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" />
                  </svg>
                </span>
                <span>PDF</span>
              </div>
              <div className="d-inline-block pr-4 clickable">
                <span className="pr-1">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-ruled" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 10H3V9h10v1H6v2h7v1H6v2H5v-2H3v-1h2v-2z" />
                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                  </svg>
                </span>
                <span>CSV</span>
              </div>
              <div className="d-inline-block">
                <div onClick={toggleGroup}
                  className={
                    byGroup === 'year' ? 'd-block position-relative text-center pt-2 pb-2 clickable toggle year' : 'd-block position-relative text-center pt-2 pb-2 clickable toggle scenario'
                  }>
                  <div className="d-inline-block position-relative pl-3 pr-2 mr-1 tween by-year">By Year</div>
                  <div className="d-inline-block position-relative pl-2 pr-3 ml-1 tween by-scenario">By Scenario</div>
                  <div className="position-absolute nzap-deep-radius tween background"></div>
                </div>
              </div>
            </div>
          </div>
          <div className={
            showMoreFilters
              ? 'row tween category-filters show'
              : 'row tween category-filters hide'
          }>
            <div className="col-12 pt-4">
              <div className="d-block text-uppercase pt-2 pb-2 filter-label">Categories</div>
              <div className="d-block">
                {domActiveCategories}
                <div className="d-inline-block">
                  <div className="category-input">
                    <input className="uk-input uk-form-width-small pl-0 no-border" type="text" placeholder="Add a category..." />
                  </div>
                  <div id="dropdown-categories-menu" className="nzap-shadow">
                    <ul className="uk-nav uk-dropdown-nav pv-3">
                      {domCategories}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 pt-4">
              {subcategories.length > 0 ? <div className="d-block text-uppercase pt-2 pb-2 filter-label">Sub-Categories</div> : <div></div>}
              <div className="d-block">
                {subcategories}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 pt-4 text-right hide-extra">
              <div className="d-inline-block clickable pr-3" onClick={toggleFilters}>
                {
                  showMoreFilters
                    ? <><span className="pr-2"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-bar-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z" />
                    </svg></span><span>Hide filters</span></>
                    : <><span className="pr-2"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-bar-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                    </svg></span><span>Show filters</span></>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default NzapFilter