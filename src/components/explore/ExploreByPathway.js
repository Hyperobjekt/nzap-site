import React from 'react';
import PropTypes from "prop-types";

const ExploreByPathway = ({ scenarios }) => {
  return (<div>
    By Pathway
    <pre> {JSON.stringify(scenarios, 0, 4)}</pre>
  </div>)
}
ExploreByPathway.propTypes = {
  scenarios: PropTypes.array.isRequired,
}
export default ExploreByPathway