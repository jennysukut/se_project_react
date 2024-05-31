import { baseUrl, checkResponse } from "./api";

function register({ user }) {
  const { name, avatarUrl, email, password } = user;
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatarUrl, email, password }),
  }).then(checkResponse);
}

function signIn({ user }) {
  const { email, password } = user;
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export { register, signIn };
