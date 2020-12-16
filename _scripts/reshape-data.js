const fs = require('fs');
const path = process.argv[2]

// Extract usStates
// Extract categories and subcategories

let output = { usStates: [] };

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
    if (output.usStates.indexOf(data[i].geo) === -1) output.usStates.push(data[i].geo);
    if (tempCategories.indexOf(data[i].category) === -1) tempCategories.push(data[i].category);
  }
  output.categories = tempCategories.map(e => { return { label: e } });
  return extractSubCategories(output, data)
}

fs.readFile(path, async (err, data) => (err) ? console.error(err) : processData(data))
