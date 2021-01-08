// Root reducer
import { combineReducers } from "redux";
import scenarios from "./scenariosReducer";
import apiCallsInProgress from './apiStatusReducer'
import query from "./queryReducer";

const rootReducer = combineReducers({
  scenarios, apiCallsInProgress, query
})

export default rootReducer;