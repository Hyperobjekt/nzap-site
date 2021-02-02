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