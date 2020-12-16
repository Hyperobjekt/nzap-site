const rawData = require('../../../data/filter-data.json');
import React, { useEffect, useState } from 'react';


const NzapTable = () => {
  let allYears = rawData.years.map((e, i) => <div className="d-inline-block group-values clickable pl-3 pr-3 pt-2" key={i}>{e}</div>)
  let allScenarios = rawData.scenarios.map((e, i) => <div className="d-inline-block group-values clickable pl-3 pr-3 pt-2" key={i}>{e}</div>)
  const [byGroup, setByGroup] = useState('year');
  const [tableBy, setTableBy] = useState(allYears);

  function toggleGroup() {
    if (byGroup === 'year') {
      setByGroup('scenario');
      setTableBy(allScenarios);
      return;
    }
    if (byGroup === 'scenario') {
      setByGroup('year');
      setTableBy(allYears);
      return;
    }

  }

  return (
    <div className="container table-holder">
      <div className="row">
        <div className="col-8 pt-5 group-by">{tableBy}</div>
        <div className="col-4 pt-5 text-right">
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
    </div>
  )

}

export default NzapTable