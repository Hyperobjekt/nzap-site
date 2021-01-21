import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import './ExploreByYear.scss';

function getTableHeader(filtersScenarios) {
  let reject = ['yes', 'low', 'high', ''];
  let labels = {
    ref: 'Business as usual',
    'e-positive': "High Electrification",
    'e-negative': 'Less high Electrification',
    'e-b-positive': 'High Biomass',
    'ere-negative': 'Renewable Constrained',
    'ere-positive': '100% Renewable'
  }
  return {
    headers: [...filtersScenarios]
      .filter(scenario => reject.indexOf(scenario.slug) === -1)
      .sort((a, b) => a.slug > b.slug ? 1 : -1)
      .map(e => ({ ...e, altName: labels[e.slug] })),
  }
}
function getTableBody(scenarios) {
  let obj = {}
  scenarios.forEach(e => {
    obj[e._filter_level_1] = obj[e._filter_level_1] || { label: e.filter_level_1 }
    obj[e._filter_level_1][e._filter_level_2] = obj[e._filter_level_1][e._filter_level_2] || { label: e.filter_level_2 }
    obj[e._filter_level_1][e._filter_level_2][e._variable_name] = obj[e._filter_level_1][e._filter_level_2][e._variable_name] || { label: e.variable_name }
    obj[e._filter_level_1][e._filter_level_2][e._variable_name][e._scenario] = obj[e._filter_level_1][e._filter_level_2][e._variable_name][e._scenario] || {
      category: e.filter_level_1,
      subcategory: e.filter_level_2,
      variableName: e.variable_name,
      scenario: e.scenario,
      value: e.value
    }
  })
  // scenarios.forEach(e => {
  //   let key = `${e._filter_level_1}-${e._filter_level_2}`;
  //   obj[key][e._variable_name] = {}
  // })
  // scenarios.forEach(e => {
  //   let key = `${e._filter_level_1}-${e._filter_level_2}`;
  //   obj[key][e._variable_name][e._scenario] = {}
  // })
  // scenarios.forEach(e => {
  //   let key = `${e._filter_level_1}-${e._filter_level_2}-${e._variable_name}`;
  //   obj[key] = {
  //     category: e.filter_level_1,
  //     subcategory: e.filter_level_2,
  //     variableName: e.variable_name,
  //   }
  // })
  // scenarios.forEach(e => {
  //   let key = `${e._filter_level_1}-${e._filter_level_2}-${e._variable_name}`;
  //   if (e._scenario === 'e-positive') obj[key][e._scenario] = e.value
  //   if (e._scenario === 'e-negative') obj[key][e._scenario] = e.value
  //   if (e._scenario === 're-positive') obj[key][e._scenario] = e.value
  //   if (e._scenario === 're-negative') obj[key][e._scenario] = e.value
  //   if (e._scenario === 'b-positive') obj[key][e._scenario] = e.value
  //   if (e._scenario === 'ref') obj[key][e._scenario] = e.value
  // })
  return obj
}


const ExploreByYear = ({ filters, scenarios }) => {

  const [table, setTable] = useState(getTableHeader(filters.scenarios))
  useEffect(() => {
    setTable({ ...table, body: getTableBody(scenarios) })
  }, [scenarios])

  const renderBody = (table) => {
    let headers = [...table.headers].filter(e => e.altName);
    let headerKeys = headers.map(e => e.slug)
    headerKeys.unshift("")
    let l1 = Object.keys(table.body);
    const renderCells = varNameRow => {
      return headerKeys.map((e, i) => {
        if (i === 0) return <div key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pb-2 lead">{varNameRow.label}</div>
        if (!varNameRow[e]) return <div key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pb-2">---</div>
        return <div key={i} className="d-table-cell nzap-table-cell pl-2 pr-2 pt-2 pb-2">{varNameRow[e].value}</div>
      })
    }

    const renderVariableNames = l2Row => {
      let varName = Object.keys(l2Row);
      return varName.map((varNameKey, varNameIndex) => {
        let varNameRow = l2Row[varNameKey]
        return <div key={varNameIndex} className="nzap-table-row d-table-row">
          {varNameKey !== 'label' ? renderCells(varNameRow) : null}
        </div>
      })
    }

    const renderLevelTwo = l1Row => {
      let l2 = Object.keys(l1Row)
      return l2.map((l2Key, l2Index) => {
        let l2Row = l1Row[l2Key]
        return <div key={l2Index} className="nzap-table-row">
          {l2Row.label}
          {l2Key !== "label" ? renderVariableNames(l2Row) : null}
        </div>
      })
    }

    return l1.map((l1Key, l1Index) => {
      let l1Row = table.body[l1Key];
      return <div key={l1Index} className="nzap-table-row">
        {l1Row.label}
        {l1Key !== "label" ? renderLevelTwo(l1Row) : null}
      </div>
    })
  }


  return (
    <div className="col-12">

      <div className="w-100 nzap-table">
        <div className="nzap-table-row">
          <div className="pt-2 pb-2 pl-2 pr-2 nzap-table-header-cell d-inline-block align-top lead">Categories &amp; Subcategories</div>
          {table.headers.filter(e => e.altName).map((header, i) => <div key={i} className="pt-2 pb-2 pl-2 pr-2 nzap-table-header-cell d-inline-block align-top"><span className="label">{header.label}</span> <span className="alt-name">{header.altName}</span></div>)}
        </div>
      </div>
      {table.body ? renderBody(table) : null}
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