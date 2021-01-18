// Root reducer
import { combineReducers } from "redux";
import scenarios from "./scenariosReducer";
import apiCallsInProgress from './apiStatusReducer'
import query from "./queryReducer";
import count from "./countReducer";
import filters from "./filtersReducer";

const rootReducer = combineReducers({
  scenarios, apiCallsInProgress, query, count, filters
})

export default rootReducer;