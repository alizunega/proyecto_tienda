// variable para entorno de produccion
//tambien puede usarse para develop pero podria presentar problemas de conexion
const url = "https://670fcaf9a85f4164ef2bf249.mockapi.io/products";

// Variable para entorno de desarrollo
// const url = "http://localhost:3000/products";
console.log("usted esta conectado a: ", url);

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
  console.log("Resultado del Fetch: ", productosJSON);
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
// Función para verificar si el item existe segun id
async function itemExists(id) {
  const response = await fetch(url + `/${id}`);
  if (response.ok) {
    return true; // El item existe
  } else {
    return false; // El item no existe
  }
}

// Función para realizar eliminacion
async function deleteItem(id) {
  try {
    const exists = await itemExists(id); // Verificar si el item existe
    if (!exists) {
      alert(`El elemento con ID ${id} no existe`);
      return; // Salir de la función si no existe
    }

    const response = await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert(`Elemento eliminado con éxito`);
    } else {
      alert(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    alert("Hubo un error con la solicitud: " + error);
  }
}
// Funcion para buscar un producto segun palabra clave

async function searchProduct(key) {
  try {
    let response = await fetch(url);

    // Verificar si la respuesta es correcta antes de intentar convertirla a JSON
    if (!response.ok) {
      throw new Error("Error en la respuesta de la red");
    }

    let productosJSON = await response.json(); // Convertir la respuesta a JSON

    // Filtrar los productos que coincidan parcialmente con el valor de 'key'
    let productosFiltrados = productosJSON.filter((producto) =>
      producto.name.toLowerCase().includes(key.toLowerCase())
    );
    console.log(`productos que coinciden: ${productosFiltrados.length}`);

    return productosFiltrados.length > 0 ? productosFiltrados : [];
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
