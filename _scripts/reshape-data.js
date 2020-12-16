const fs = require('fs');
const path = process.argv[2]

// Extract usStates
// Extract categories and subcategories

let output = { usStates: [], years: [], scenarios: [] };

const capitalize = str => {
  return str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}

const saveOutput = output => {
  fs.writeFileSync('data/filter-data.json', JSON.stringify(output));
}

const extractSubCategories = (output, data) => {
  for (let i = 0; i < output.categories.length; i++) {
    let subcategories = []
    data
      .filter(e => e.category === output.categories[i].label && !!e.sub_category)
      .forEach(e => subcategories.indexOf(e.sub_category) === -1 ? subcategories.push(e.sub_category) : null)
    output.categories[i].subcategories = subcategories.map(e => { return { label: e } })
  }
  return saveOutput(output);
}

const processData = dataString => {
  let tempCategories = [];
  let data = JSON.parse(dataString);
  for (let i = 0; i < data.length; i++) {
    let state = capitalize(data[i].geo)
    if (output.usStates.indexOf(state) === -1) output.usStates.push(state);
    if (output.years.indexOf(data[i].year) === -1) output.years.push(data[i].year)
    if (output.scenarios.indexOf(data[i].scenario) === -1) output.scenarios.push(data[i].scenario)
    if (tempCategories.indexOf(data[i].category) === -1) tempCategories.push(data[i].category);
  }
  output.categories = tempCategories.map(e => { return { label: e } });
  return extractSubCategories(output, data)
}

fs.readFile(path, async (err, data) => (err) ? console.error(err) : processData(data))
