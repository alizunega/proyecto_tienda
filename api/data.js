// api/data.js
export default function handler(req, res) {
  // Lógica para obtener los datos desde json-server
  // Por ejemplo, puedes usar fetch para obtener datos desde un endpoint.
  fetch("../db.json")
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: "Error fetching data" }));
}
