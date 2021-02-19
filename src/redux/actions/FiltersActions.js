import * as types from "./actionTypes";
import * as filtersApi from "../../api/filtersApi";

export const setFilterAction = (filters) => ({ type: types.SET_FILTER_ACTION, filters });



export function loadFilters() {
  return function (dispatch) {
    return filtersApi.getFilters().then(filters => {
      dispatch(setFilterAction(filters))
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