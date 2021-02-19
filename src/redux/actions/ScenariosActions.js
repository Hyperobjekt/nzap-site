import * as types from "./actionTypes";
import * as scenariosApi from "../../api/scenariosApi";
import { beginApiCall } from './apiStatusActions';
import { setCountAction } from './CountActions';
import { assembleQuery } from '../../_helpers';

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





export function loadScenarios(filterUrl) {

  return function (dispatch) {
    dispatch(beginApiCall())
    let assembledQuery = assembleQuery(filterUrl);
    return scenariosApi.getScenarios(assembledQuery).then(scenarios => {
      dispatch(loadScenariosActionSuccess(scenarios.data))
      dispatch(setCountAction(scenarios.count))
    }).catch(err => {
      dispatch(loadScenariosActionFailure())
      throw err;
    })
  }
}