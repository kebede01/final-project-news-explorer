import { BASE_URL } from "./constants.js";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// export const checkToken = () => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: { name: "Test", email: "test@example.com", id: "fake ID" },
//     });
//   });
// };

export const getUserInfo = (token) => {
  // Send a GET request to /users/me
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Specify an authorization header with an appropriately
      // formatted value.
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
// export const authorize = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ token: "fake token" });
//   });
// };

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}
// export const register = () => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: { name: "fake user", email: "test@example.com", id: "fake ID" },
//     });
//   });
// };
export const register = (username, email, password) => {
   return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username,  email, password }),
  }).then(checkResponse);
};
