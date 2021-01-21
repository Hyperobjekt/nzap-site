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



const getAssembledQuery = (query) => {
  let categories = {
    $or: query.categories.map(category => ({ _filter_level_1: category }))
  }
  let subcategories = {
    $or: query.subcategories.map(category => ({ _filter_level_2: category }))
  }

  let examiner = query.pathway && !query.year
    ? { _scenario: query.pathway || 'ref' }
    : { _year: query.year || '2020' }


  let assembled = {
    $and: [{
      _geo: query.state || 'national'
    }, examiner]
  }
  if (categories.$or.length) assembled.$and.push(categories)
  if (subcategories.$or.length) assembled.$and.push(subcategories)
  return assembled;
}


export function loadScenarios(query) {
  return function (dispatch) {
    dispatch(beginApiCall())
    let assembledQuery = getAssembledQuery(query);
    return scenariosApi.getScenarios(assembledQuery).then(scenarios => {
      dispatch(loadScenariosActionSuccess(scenarios.data))
      dispatch(setCountAction(scenarios.count))
    }).catch(err => {
      dispatch(loadScenariosActionFailure())
      throw err;
    })
  }
}