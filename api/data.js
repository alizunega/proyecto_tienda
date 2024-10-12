// api/data.js
import data from "../db.json";

export default function handler(req, res) {
  res.status(200).json(data); // Responde con los datos del archivo JSON
}
