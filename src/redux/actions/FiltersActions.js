import * as types from "./actionTypes";
import * as filtersApi from "../../api/filtersApi";
import { beginApiCall } from './apiStatusActions';

// Export Action creators
export function loadFiltersActionSuccess(filters) {
  return { type: types.LOAD_FILTERS_ACTION_SUCCESS, filters }
}

// export function selectCategoryAction(filters) {
//   return { type: '' }
// }


export function loadFilters() {
  return function (dispatch) {
    dispatch(beginApiCall())
    return filtersApi.getFilters().then(filters => {
      dispatch(loadFiltersActionSuccess(filters))
    }).catch(err => {
      throw err;
    })
  }
}

// export function selectCategrory() {
//   return function (dispatch) {
//     dispatch(selectCategoryAction())
//   }
// }