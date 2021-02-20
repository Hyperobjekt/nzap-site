import { generateUrl } from './get-query-string'

const getCategories = filters => {
  return [...filters.levelOneFilters].map(e => {
    let category = { ...e };
    delete category.levelTwoFilters
    return category;
  })
}
const getSubcategories = filters => {
  return [...filters.levelOneFilters]
    .map(e => e.levelTwoFilters.map(ee => ({ ...ee, levelOneSlug: e.slug })))
    .flat()
}

const getUsStates = filters => {
  let selectedState = [...filters.usStates].filter(state => state.active);
  if (!selectedState.length) return [...filters.usStates].map(state => {
    state.active = state.slug === 'national';
    return state;
  })
  return [...filters.usStates];
}
const getTableExamBy = filters => {
  if (filters.table) return filters.table;
  if (filters.explorer === 'year' || !filters.explorer) return '2020';
  return 'ref'
}
export const assembleFilters = (stateFilters, actionFilters) => {
  let filter = {
    ...stateFilters,
    years: actionFilters.years,
    scenarios: actionFilters.scenarios,
    explorer: actionFilters.explorer || 'pathway',
    usStates: getUsStates(actionFilters),
    levelOneFilters: getCategories(actionFilters),
    levelTwoFilters: getSubcategories(actionFilters),
    table: getTableExamBy(actionFilters),
    page: actionFilters.page || 0
  }
  filter.url = generateUrl(filter);
  return { ...filter }
}