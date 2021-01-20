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
  let str = "?" + Object.keys(queryObject).map((key) => {
    const element = queryObject[key];
    if (typeof element === 'string') return element || null
    return element.length ? `${key}=${element.join(',')}` : null;
  }).filter(e => e).join('&');
  return str;
}

export const handleError = error => {
  console.log(">> Loading scenarios failed" + error);
}