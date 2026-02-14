// services/people.js

const API_URL = "http://localhost:1337/foods";
const BASE_URL = "http://localhost:1337";

export async function getFoods() {
  const token = localStorage.getItem("token");

  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  if (!res.ok) {
    throw new Error("Erro ao buscar comidas");
  }

  const data = await res.json();

  return data.map(item => ({
    ...item,
    link: item.link ? `${BASE_URL}${item.link}` : null
  }));
}
