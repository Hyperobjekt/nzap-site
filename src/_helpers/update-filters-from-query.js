export const updateFiltersFromQuery = (filters, query) => {
  let data = { ...filters }
  // Explorer
  data.explorer = query.explorer || data.explorer
  // levelOneFilters - categories
  data.levelOneFilters = [...filters.levelOneFilters].map(category => ({ ...category, active: query.categories.indexOf(category.slug) > -1 }))
  // levelTwoFilters - subcategories
  data.levelTwoFilters = [...filters.levelTwoFilters].map(subcategory => ({ ...subcategory, active: query.subcategories.indexOf(subcategory.slug) > -1 }))
  // page
  data.page = query.page || data.page
  // scenarios
  // table
  data.table = query.table || data.table
  // url
  // usStates
  data.usStates = [...filters.usStates].map(state => ({ ...state, active: state.slug === query.state }));
  // years
  return data
}