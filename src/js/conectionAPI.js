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

// Función para realizar la solicitud DELETE
async function deleteItem(id) {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Comprobar si la solicitud fue exitosa
    if (response.ok) {
      alert(`Elemento con ID ${id} eliminado con éxito`);
    } else {
      alert(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    alert("Hubo un error con la solicitud:", error);
  }
}

export const conectionAPI = {
  conexionAPI,
  addProduct,
  deleteItem,
};
