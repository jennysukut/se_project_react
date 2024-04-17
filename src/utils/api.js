const baseUrl = "http://localhost:3001";

function checkResponse(res) {
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

function addItem({ item }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  }).then(checkResponse);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
