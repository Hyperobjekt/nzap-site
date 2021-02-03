const { Parser } = require('json2csv');

export const convertToCSV = (jsonData, start) => {
  const headers = Object.keys(jsonData[0]).filter(key => key.charAt(0) !== '_' && key !== 'id');
  try {
    const parser = new Parser({ headers });
    let csvArr = parser.parse(jsonData).split("\n")
    if (!start) csvArr.shift();
    return { headers, csvArr }
  } catch (err) {
    console.error(err);
  }
}