const scenarios = require('../src/_data/nzap_data.json').slice(0, 10000);

const newScenario = {
  id: null,
  firstName: "",
  lastName: "",
  age: null,
  pronouns: [],
  interests: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newScenario,
  scenarios,
};
