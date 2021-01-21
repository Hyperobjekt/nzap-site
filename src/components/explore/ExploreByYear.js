import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import './ExploreByYear.scss';

function getTableHeader(filtersScenarios) {
  console.log(filtersScenarios)
  let reject = ['yes', 'low', 'high', ''];
  let labels = {
    ref: 'Business as usual',
    'e-positive': "High Electrification",
    'e-negative': 'Less high Electrification',
    'e-b-positive': 'High Biomass',
    'ere-negative': 'Renewable Constrained'
  }
  return {
    headers: filtersScenarios
      .filter(scenario => reject.indexOf(scenario.slug) === -1)
      .sort((a, b) => a.slug > b.slug ? 1 : -1)
      .map(e => ({ ...e, altName: labels[e.slug] })),
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
        <div className="d-table-cell pt-2 pb-2 pl-2 pr-2 nzap-table-cell lead">{row.category}, {row.subcategory}</div>
        {table.headers.map((header, i) => <div key={i} className="d-table-cell nzap-table-cell pl-2 pr-2">{row[header.slug] || "---"}</div>)}
      </div>
    })
  }

  return (
    <div className="col-12">

      <div className="d-table w-100 nzap-table">
        <div className="d-table-row nzap-table-row">
          <div className="d-table-cell pt-2 pb-2 pl-2 pr-2 nzap-table-header-cell lead">Categories &amp; Subcategories</div>
          {table.headers.map((header, i) => <div key={i} className="d-table-cell pt-2 pb-2 pl-2 pr-2 nzap-table-header-cell"><span className="label">{header.label}</span> <span className="alt-name">{header.altName}</span></div>)}
        </div>
        {table.body ? renderBody(table) : null}
      </div>


    </div>
  )
}
ExploreByYear.propTypes = {
  filters: PropTypes.object.isRequired,
  scenarios: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
    scenarios: state.scenarios
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreByYear);