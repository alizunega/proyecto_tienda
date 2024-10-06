const url = "http://localhost:3001/products";

async function conexionAPI() {
  let productos = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Permissions-Policy":
        "geolocation=(self `http://localhost:3001/products`)",
    },
  });

  let productosJSON = await productos.json();
  return productosJSON;
}

async function addProduct(name, price, image) {
  const producto = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
    }),
  });

  let productoJSON = await producto.json();
  return productoJSON;
}

export const conectionAPI = {
  conexionAPI,
  addProduct,
};
