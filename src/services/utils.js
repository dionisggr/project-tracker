const authToken = window.localStorage.getItem('projectTrackerAuthToken');
const isLocalHost = window.location.hostname === 'localhost';
const allowedUsers = ['lili', 'doug', 'dio', 'admin'];

const isAdmin = (isLocalHost || allowedUsers.includes(authToken))
  // && false

const utils = {
  isAdmin,
};

export default utils;
