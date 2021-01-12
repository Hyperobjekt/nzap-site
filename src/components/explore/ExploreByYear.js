import React, { useEffect } from 'react';
import PropTypes from "prop-types";

const ExploreByYear = ({ scenarios }) => {

  useEffect(() => {
  }, [scenarios])

  return (<div>
    By Year
    <pre> {JSON.stringify(scenarios, 0, 4)}</pre>
  </div>)
}
ExploreByYear.propTypes = {
  scenarios: PropTypes.array.isRequired,
}
export default ExploreByYear