import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

import './ExploreByYear.scss';

function getTableHeader(filtersScenarios) {
  let reject = ['yes', 'low', 'high', '']
  return {
    headers: filtersScenarios.filter(scenario => reject.indexOf(scenario.slug) === -1).sort((a, b) => a.slug > a.slug ? 1 : -1),
  }
}
function getTableBody(scenarios) {
  let obj = {}
  scenarios.forEach(e => {
    let key = `${e._filter_level_1}-${e._filter_level_2}-${e._variable_name}`;
    obj[key] = {
      category: e.filter_level_1,
      subcategory: e.filter_level_2,
      variableName: e.variable_name,
    }
  })
  scenarios.forEach(e => {
    let key = `${e._filter_level_1}-${e._filter_level_2}-${e._variable_name}`;
    if (e._scenario === 'e-positive') obj[key][e._scenario] = e.value
    if (e._scenario === 'e-negative') obj[key][e._scenario] = e.value
    if (e._scenario === 're-positive') obj[key][e._scenario] = e.value
    if (e._scenario === 're-negative') obj[key][e._scenario] = e.value
    if (e._scenario === 'b-positive') obj[key][e._scenario] = e.value
    if (e._scenario === 'ref') obj[key][e._scenario] = e.value
  })
  return obj
}


const ExploreByYear = ({ filters, scenarios }) => {

  const [table, setTable] = useState(getTableHeader(filters.scenarios))

  useEffect(() => {
    setTable({ ...table, body: getTableBody(scenarios) })
  }, [scenarios])

  const renderBody = (table) => {
    let keys = Object.keys(table.body);
    return keys.map((key, i) => {
      let row = table.body[key];
      return <div key={i} className="d-table-row nzap-table-row">
        <div className="d-table-cell nzap-table-cell">{row.category}, {row.subcategory}</div>
        {table.headers.map((header, i) => <div key={i} className="d-table-cell nzap-table-cell">{row[header.slug] || "---"}</div>)}
      </div>
    })
  }

  return (<div className="container">
    <div className="row">
      <div className="col-12">

        <div className="d-table w-100 nzap-table">
          <div className="d-table-row nzap-table-row">
            <div className="d-table-cell pt-2 pb-2 nzap-table-header-cell lead">Categories & Subcategories</div>
            {table.headers.map((header, i) => <div key={i} className="d-table-cell pt-2 pb-2 nzap-table-header-cell">{header.label}</div>)}
          </div>
          {table.body ? renderBody(table) : null}
        </div>
      </div>
    </div>
  </div>)
}
ExploreByYear.propTypes = {
  filters: PropTypes.object.isRequired,
  scenarios: PropTypes.array.isRequired,
}
export default ExploreByYear