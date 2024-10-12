// api/data.js
import data from "../db.json"; // Asegúrate de que la ruta sea correcta

export default function handler(req, res) {
  // Asegúrate de que el objeto data tenga una propiedad "products"
  if (req.method === "GET") {
    console.log(data);
    console.log(data.products);
    res.status(200).json(data.products); // Devuelve solo los productos
  } else {
    res.status(405).end(); // Método no permitido
  }
}
