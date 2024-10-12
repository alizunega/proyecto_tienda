// api/data.js
import data from "../db.json"; // Asegúrate de que esta ruta sea correcta

export default function handler(req, res) {
  console.log("Datos de db.json:", data); // Para verificar los datos
  if (req.method === "GET") {
    if (data.products && data.products.length > 0) {
      res.status(200).json(data.products); // Devuelve la lista de productos
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } else {
    res.status(405).end(); // Método no permitido
  }
}
