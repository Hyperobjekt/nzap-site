import * as types from "./actionTypes";
import * as scenariosApi from "../../api/scenariosApi";
import { beginApiCall } from './apiStatusActions';

// Export Action creators
export function createScenarioAction(scenario) {
  return { type: types.CREATE_SCENARIO_ACTION, scenario }
}

export function loadScenariosActionSuccess(scenarios = null) {
  return { type: types.LOAD_SCENARIOS_ACTION_SUCCESS, scenarios }
}

export function updateScenarioAction(scenario) {
  return { type: types.UPDATE_SCENARIO_ACTION, scenario }
}

export function deleteScenarioAction(scenario) {
  return { type: types.DELETE_SCENARIO_ACTION, scenario }
}


export function loadScenarios(query) {
  return function (dispatch) {
    dispatch(beginApiCall())
    console.log(query)
    return scenariosApi.getScenarios().then(scenarios => {
      dispatch(loadScenariosActionSuccess(scenarios))
    }).catch(err => {
      throw err;
    })
  }
}