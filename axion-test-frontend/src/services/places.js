// services/places.js

const API_URL = "http://localhost:1337/places";
const BASE_URL = "http://localhost:1337";

export async function getPlaces() {
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
    throw new Error("Erro ao buscar lugares");
  }

  const data = await res.json();
  console.log("FETCH PLACES", data); 

  return data.map(item => ({
    ...item,
    link: item.link ? `${BASE_URL}${item.link}` : null
  }));

  
}
