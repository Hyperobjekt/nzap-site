const fs = require('fs');
const neatCsv = require('neat-csv');
const path = process.argv[2]

// Supply the path to a csv
// Output a JSON file
const processData = data => {
  let fileArray = path.split('/');
  let file = `${fileArray[fileArray.length - 1].split('.')[0]}.json`;
  fileArray.pop()
  let jsonFile = `${fileArray.join('/')}/${file}`;
  let indexed = data.map((e, i) => {
    let obj = { id: i + 1 }
    return { ...obj, ...e };
  })
  fs.writeFileSync(jsonFile, JSON.stringify(indexed, 0, 2));
}

fs.readFile(path, async (err, data) => (err) ? console.error(err) : processData(await neatCsv(data)))

