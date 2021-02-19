// export const getQueryString = queryObject => {
//   const removeDuplicates = arr => [...new Set(arr)]
//   queryObject.categories = removeDuplicates(queryObject.categories)
//   queryObject.subcategories = removeDuplicates(queryObject.subcategories)
//   return "?" + Object.keys(queryObject).map((key) => {
//     const element = queryObject[key];
//     if (!element || !element.length) return null;
//     if (typeof element !== 'string' && element.length) return `${key}=${element.join(',')}`
//     if (typeof element === 'string') return `${key}=${element}`
//   }).filter(e => e).join('&')
// }




export const generateUrl = filters => {
  let urlArr = [];
  let explorer = filters.explorer;
  let state = [...filters.usStates].filter(us => us.active)[0].slug;
  let categories = [...filters.levelOneFilters].filter(category => category.active).map(category => category.slug).join(',');
  let subcategories = [...filters.levelTwoFilters].filter(subcategory => subcategory.active).map(subcategory => subcategory.slug).join(',');
  let table = filters.table;
  let page = filters.page;
  if (explorer) urlArr.push(`explorer=${explorer}`)
  if (state) urlArr.push(`state=${state}`)
  if (categories) urlArr.push(`categories=${categories}`)
  if (subcategories) urlArr.push(`subcategories=${subcategories}`)
  if (table) urlArr.push(`table=${table}`)
  if (page) urlArr.push(`page=${page}`);
  if (urlArr.length) return `?${urlArr.join('&')}`;
  return ''
}