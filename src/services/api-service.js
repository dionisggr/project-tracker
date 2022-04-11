// const apiURL = 'https://tec3-project-tracker.herokuapp.com';
const apiURL = 'http://localhost:8000';
const headers = { 'Content-Type': 'application/json' };

function validateResponse(res) {
  if (res.ok) return res.json();

  throw new Error('Error connecting to API.');
};

function getRequest(path = '', body) {   
  return fetch(`${apiURL}${path}`, {
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .catch(console.log);
};

function postRequest(path, body) {   
  return fetch(`${apiURL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .catch(console.log);
};

function deleteRequest(path, body) {   
  return fetch(`${apiURL}${path}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .catch(console.log);
};

function patchRequest(path, body) {   
  return fetch(`${apiURL}${path}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .catch(console.log);
};

const ApiService = {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest,
};

export default ApiService;
