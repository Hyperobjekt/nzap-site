const rawData = require('../../../data/data.json');
import React, { useEffect, useState } from 'react';


const NzapTable = () => {
  let allYears = rawData.years.map((e, i) => <div className="d-inline-block year clickable pl-3 pr-3" key={i}>
    {e}
  </div>)
  const [domYears, setDomYears] = useState(allYears);

  return (
    <div className="container table-holder">
      <div className="row">
        <div className="col-12 pt-5 text-center years">
          {domYears}
        </div>
      </div>
    </div>
  )

}

export default NzapTable