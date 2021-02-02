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