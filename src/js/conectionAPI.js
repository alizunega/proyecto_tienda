const url = "http://localhost:3000/products";

async function conexionAPI() {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  let productosJSON = await response.json();
  console.log("aca productosJSON", productosJSON);
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
    alert("Hubo un error con la solicitud: ", error);
  }
}

// Función para buscar productos por palabra clave
async function searchProduct(key) {
  try {
    let response = await fetch(url + `?q=${key}`);

    // Verificar si la respuesta es correcta antes de intentar convertirla a JSON
    if (!response.ok) {
      throw new Error("Error en la respuesta de la red");
    }

    let productoJSON = await response.json(); // Convertir la respuesta a JSON

    if (productoJSON.length > 0) {
      return productoJSON; // Retornar los productos encontrados
    } else {
      return []; // Retornar una lista vacía si no hay productos
    }
  } catch (error) {
    alert("Hubo un error en la búsqueda: " + error.message);
    return []; // Retornar una lista vacía en caso de error
  }
}

export const conectionAPI = {
  conexionAPI,
  addProduct,
  deleteItem,
  searchProduct,
};
