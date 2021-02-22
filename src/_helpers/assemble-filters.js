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
const getTableExamBy = (filters, explorer) => {
  if (filters.table) return filters.table;
  if (explorer === 'year') return '2020';
  if (explorer === 'pathway') return 'ref';
}
export const assembleFilters = (stateFilters, actionFilters) => {
  let explorer = localStorage.getItem('explorer') || actionFilters.explorer || 'year';
  let filter = {
    ...stateFilters,
    years: actionFilters.years,
    scenarios: actionFilters.scenarios,
    explorer: explorer,
    usStates: getUsStates(actionFilters),
    levelOneFilters: getCategories(actionFilters),
    levelTwoFilters: getSubcategories(actionFilters),
    table: getTableExamBy(actionFilters, explorer),
    page: actionFilters.page || 0
  }
  filter.url = generateUrl(filter);
  return { ...filter }
}