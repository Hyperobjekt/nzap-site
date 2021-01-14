import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";


function getTableHeader(filtersScenarios) {
  let reject = ['yes', 'low', 'high', '']
  return {
    headers: filtersScenarios.filter(scenario => reject.indexOf(scenario.slug) === -1),
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
    if (e._scenario === 'e-positive') obj[key]['ePositive'] = e.value
    if (e._scenario === 'e-negative') obj[key]['eNegative'] = e.value
    if (e._scenario === 're-positive') obj[key]['rePositive'] = e.value
    if (e._scenario === 're-negative') obj[key]['reNegative'] = e.value
    if (e._scenario === 'b-positive') obj[key]['bPositive'] = e.value
    if (e._scenario === 'ref') obj[key]['ref'] = e.value
  })

  return obj
}


const ExploreByYear = ({ filters, scenarios }) => {

  const [table, setTable] = useState(getTableHeader(filters.scenarios))

  useEffect(() => {
    setTable({ ...table, body: getTableBody(scenarios) })
  }, [scenarios])

  return (<div className="container">
    <div className="row">
      <div className="col-12">

        <pre>{JSON.stringify(table, 0, 2)}</pre>
      </div>
    </div>
  </div>)
}
ExploreByYear.propTypes = {
  filters: PropTypes.object.isRequired,
  scenarios: PropTypes.array.isRequired,
}
export default ExploreByYear