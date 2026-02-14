// services/auth.js

const API_URL = "http://localhost:1337";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      identifier: email,
      password: password
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao autenticar");
  }

  localStorage.setItem("token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getToken() {
  return localStorage.getItem("token");
}
