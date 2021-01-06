// Root reducer
import { combineReducers } from "redux";
import scenarios from "./scenariosReducer";
import apiCallsInProgress from './apiStatusReducer'

const rootReducer = combineReducers({
  scenarios, apiCallsInProgress
})

export default rootReducer;