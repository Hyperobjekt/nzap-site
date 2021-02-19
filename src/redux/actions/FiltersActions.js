import * as types from "./actionTypes";
import * as filtersApi from "../../api/filtersApi";

export const setFilterAction = (filters, query) => ({ type: types.SET_FILTER_ACTION, filters, query });



export function loadFilters(query) {
  return function (dispatch) {
    return filtersApi.getFilters().then(filters => {
      return dispatch(setFilterAction(filters, query))
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