import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function scenariosReducer(state = initialState.scenarios, action) {
  switch (action.type) { // I have no opinion for or against switch statements here fyi
    case types.CREATE_SCENARIO_ACTION:
      return [...state, { ...action.scenario }];
    case types.LOAD_SCENARIOS_ACTION_SUCCESS:
      return [...action.scenarios]
    case types.LOAD_SCENARIOS_ACTION_FAILURE:
      return []
    case types.UPDATE_SCENARIO_ACTION:
      return state.map(scenario => scenario.id === action.course.id ? action.action : action);
    case types.DELETE_SCENARIO_ACTION:
      return state.filter(scenario => scenario.id !== action.scenario.id);
    default:
      return state;
  }
}