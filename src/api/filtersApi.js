import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/filters";

export function getFilters() {
  return fetch(baseUrl, {
    method: 'GET',
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch(handleError);
}