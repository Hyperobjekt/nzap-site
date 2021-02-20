export const getQueryObject = (location) => {
  let obj = {};
  [{ key: 'state', default: '' }, { key: 'explorer', default: '' }, { key: 'table', default: '' }, { key: 'page', default: '' }, { key: 'categories', default: [] }, { key: 'subcategories', default: [] },]
    .forEach(q => {
      let val = new URLSearchParams(location.search).get(q.key);
      if (q.default !== '') obj[q.key] = val ? val.split(',') : q.default
      if (q.default === '') obj[q.key] = val ? val : q.default
    });
  return obj
}