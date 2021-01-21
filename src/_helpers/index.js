export const getQueryObject = (location) => {
  let obj = {};
  [{ key: 'state', default: '' }, { key: 'year', default: '' }, { key: 'pathway', default: '' }, { key: 'examine', default: '' }, { key: 'categories', default: [] }, { key: 'subcategories', default: [] },]
    .forEach(q => {
      let val = new URLSearchParams(location.search).get(q.key);
      if (q.default !== '') obj[q.key] = val ? val.split(',') : q.default
      if (q.default === '') obj[q.key] = val ? val : q.default
    });
  return obj
}


export const getQueryString = queryObject => {
  const removeDuplicates = arr => [...new Set(arr)]
  queryObject.categories = removeDuplicates(queryObject.categories)
  queryObject.subcategories = removeDuplicates(queryObject.subcategories)
  return "?" + Object.keys(queryObject).map((key) => {
    const element = queryObject[key];
    if (!element || !element.length) return null;
    if (typeof element !== 'string' && element.length) return `${key}=${element.join(',')}`
    if (typeof element === 'string') return `${key}=${element}`
  }).filter(e => e).join('&')
}



export const handleError = error => {
  console.log(">> Loading scenarios failed" + error);
}