import { handleResponse, handleError } from "./apiUtils";


export function getScenarios(query = null) {
  let baseUrl = process.env.API_URL + "/scenarios?";
  if (query.limit) baseUrl = baseUrl + `limit=${query.limit}&`;
  if (query.skip) baseUrl = baseUrl + `skip=${query.skip}`;
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
