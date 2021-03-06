const apiURL = 'https://tec3-project-tracker.herokuapp.com';
const headers = { 'Content-Type': 'application/json' };

function validateResponse(res) {
  if (res.ok) return res.json();

  throw new Error('Error connecting to API.');
};

async function getRequest(path = '', body) {   
  return await fetch(`${apiURL}${path}`, {
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse);
};

async function postRequest(path, body) {   
  return await fetch(`${apiURL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse);
};

async function deleteRequest(path, body) {   
  return await fetch(`${apiURL}${path}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse);
};

async function patchRequest(path, body) {   
  return await fetch(`${apiURL}${path}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  })
    .then(validateResponse);
};

const ApiService = {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest,
};

export default ApiService;
