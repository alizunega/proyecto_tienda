// api/data.js
import data from "../db.json"; // Asegúrate de que esta ruta sea correcta

console.log("Datos importados desde db.json:", data);

export default function handler(req, res) {
  console.log("Datos de db.json:", data); // Para verificar los datos
  console.log("Solicitud recibida con método:", req.method);
  if (req.method === "GET") {
    console.log("Método GET solicitado. Productos:", data.products);
    if (data.products && data.products.length > 0) {
      res.status(200).json(data.products); // Devuelve la lista de productos
    } else {
      console.log("No se encontraron productos");
      res.status(404).json({ message: "No products found" });
    }
  } else {
    console.log("Método no permitido:", req.method);
    res.status(405).end(); // Método no permitido
  }
}
