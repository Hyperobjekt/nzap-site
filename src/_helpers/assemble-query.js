export const assembleQuery = (filterUrl) => {
  let query = {}
  if (!filterUrl) return query
  filterUrl.substring(1).split('&').forEach(e => {
    let arrays = ['categories', 'subcategories'];
    arrays.includes(e.split('=')[0])
      ? query[e.split('=')[0]] = e.split('=')[1].split(',')
      : query[e.split('=')[0]] = e.split('=')[1]
  })


  let categories = query.categories ? { $or: query.categories.map(category => ({ _filter_level_1: category })) } : null
  let subcategories = query.subcategories ? { $or: query.subcategories.map(category => ({ _filter_level_2: category })) } : null
  let examiner = query.explorer === 'pathway' ? { _scenario: query.table } : { _year: query.table }
  let assembled = { $and: [{ _geo: query.state || 'national' }, examiner] }
  if (categories && categories.$or.length) assembled.$and.push(categories)
  if (subcategories && subcategories.$or.length) assembled.$and.push(subcategories)
  if (query.limit) assembled.limit = query.limit;
  if (query.page) assembled.skip = query.page;
  return assembled;
}
