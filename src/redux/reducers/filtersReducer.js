import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const generateUrl = filters => {
  let urlArr = [];
  let explorer = filters.explorer;
  let state = [...filters.usStates].filter(us => us.active)[0].slug;
  let categories = [...filters.levelOneFilters].filter(category => category.active).map(category => category.slug).join(',');
  let subcategories = [...filters.levelOneFilters].filter(category => category.active).map(category => category.levelTwoFilters).flat().filter(subcategory => subcategory.active).map(subcategory => subcategory.slug).join(',');
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

const getCategories = filters => {
  return [...filters.levelOneFilters]
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
const assembleFilters = (stateFilters, actionFilters) => {

  let filter = {
    ...stateFilters,
    years: actionFilters.years,
    scenarios: actionFilters.scenarios,
    explorer: actionFilters.explorer || 'pathway',
    usStates: getUsStates(actionFilters),
    levelOneFilters: getCategories(actionFilters),
    table: getTableExamBy(actionFilters),
    page: actionFilters.page || 0
  }
  filter.url = generateUrl(filter);
  return { ...filter }
}

export default function filtersReducer(state = initialState.filters, action) {

  switch (action.type) {
    case types.SET_FILTER_ACTION:
      return assembleFilters(state.filters, action.filters)
    default:
      return state;
  }
}