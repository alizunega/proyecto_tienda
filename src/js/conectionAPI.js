const url = "http://localhost:3001/products";

async function conexionAPI() {
  let productos = await fetch(url);
  let productosJSON = await productos.json();
  return productosJSON;
}

export const conectionAPI = {
  conexionAPI,
};
