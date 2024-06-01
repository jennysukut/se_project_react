export const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    const data = res.json();
    return data;
  } else {
    Promise.reject(`Uh oh! Error: ${res.status}`);
  }
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem({ item, token }) {
  console.log("trying to add an item");
  console.log(item);
  console.log(token);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  }).then(checkResponse);
}

function deleteItem(id, { token }) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
