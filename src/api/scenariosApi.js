import { handleResponse, handleError } from "./apiUtils";


export function getScenarios(query = null) {
  let baseUrl = `${process.env.API_URL}/scenarios?limit=${query.skip || 200}&skip=${query.skip || 0}`;
  delete query.limit;
  delete query.skip;
  return fetch(baseUrl, {
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: JSON.stringify(query)
  })
    .then(handleResponse)
    .catch(handleError);
}
