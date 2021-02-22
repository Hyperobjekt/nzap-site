import { generateUrl } from './get-query-string'

const getCategories = filters => {
  let order = ['macro-results', 'pillar-1-efficiencyelectrification', 'pillar-2-clean-electricity', 'pillar-3-clean-fuels', 'pillar-4-ccus', 'pillar-5-non-co2-emissions', 'pillar-6-land-sinks', 'impacts'];
  [...filters.levelOneFilters].forEach(e => {
    let category = { ...e };
    delete category.levelTwoFilters
    order[order.indexOf(category.slug)] = category;
    return category;
  })
  return order
}
const getSubcategories = filters => {
  // let order = []
  let duplicates = [];
  let l2f = [...filters.levelOneFilters]
    .map(e => e.levelTwoFilters.map(ee => ({ ...ee, levelOneSlug: e.slug }))).flat()
    .map(e => { if (!duplicates.includes(e.slug)) { duplicates.push(e.slug); return { ...e } } })
    .filter(e => e)
  return l2f
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