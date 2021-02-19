import * as types from "./actionTypes";
import * as scenariosApi from "../../api/scenariosApi";
import { beginApiCall } from './apiStatusActions';
import { setCountAction } from './CountActions';

// Export Action creators
export function createScenarioAction(scenario) {
  return { type: types.CREATE_SCENARIO_ACTION, scenario }
}

export function loadScenariosActionSuccess(scenarios = null) {
  return { type: types.LOAD_SCENARIOS_ACTION_SUCCESS, scenarios }
}
export function loadScenariosActionFailure(scenarios = []) {
  return { type: types.LOAD_SCENARIOS_ACTION_FAILURE, scenarios }
}

export function updateScenarioAction(scenario) {
  return { type: types.UPDATE_SCENARIO_ACTION, scenario }
}

export function deleteScenarioAction(scenario) {
  return { type: types.DELETE_SCENARIO_ACTION, scenario }
}



export const getAssembledQuery = (filterUrl) => {
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
  let examiner = query.explorer === 'pathway' ? { _year: query.table } : { _scenario: query.table }
  let assembled = { $and: [{ _geo: query.state || 'national' }, examiner] }
  if (categories && categories.$or.length) assembled.$and.push(categories)
  if (subcategories && subcategories.$or.length) assembled.$and.push(subcategories)
  if (query.limit) assembled.limit = query.limit;
  if (query.skip) assembled.skip = query.skip;
  return assembled;
}


export function loadScenarios(filterUrl) {

  return function (dispatch) {
    dispatch(beginApiCall())
    let assembledQuery = getAssembledQuery(filterUrl);
    return scenariosApi.getScenarios(assembledQuery).then(scenarios => {
      dispatch(loadScenariosActionSuccess(scenarios.data))
      dispatch(setCountAction(scenarios.count))
    }).catch(err => {
      dispatch(loadScenariosActionFailure())
      throw err;
    })
  }
}