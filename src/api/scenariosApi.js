import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/scenarios/";

export function getScenarios(id = null) {
  let url = id ? `${baseUrl}${id}` : `${baseUrl}?_limit=20`;
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
