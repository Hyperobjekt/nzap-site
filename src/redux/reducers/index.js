// Root reducer
import { combineReducers } from "redux";
import scenarios from "./scenariosReducer";
import apiCallsInProgress from './apiStatusReducer'
import query from "./queryReducer";
import count from "./countReducer";

const rootReducer = combineReducers({
  scenarios, apiCallsInProgress, query, count
})

export default rootReducer;