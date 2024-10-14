import { conectionAPI } from "./conectionAPI.js";

const main = document.querySelector(".main");

const listaAPI = await conectionAPI
  .conexionAPI()
  .then((response) => {
    console.log("aca response", response);
    return response;
  })
  .catch((error) => {
    console.log(error.message);
    main.innerHTML = `<h1> No se pudo realizar la conexión</h1>`;
  });

const section = document.querySelector(".container");
console.log("aca listaAPI", listaAPI);
renderizarItems(listaAPI);

function renderizarItems(lista) {
  console.log("aca lista que ingresa a renderizar", lista);
  console.log("aca su longitud", lista.length);
  if (section && lista.length > 0) {
    lista.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";
      card.dataset.id = element.id;
      let cardFooter = document.createElement("div");
      cardFooter.className = "card--footer";
      let nombre = document.createElement("h1");
      nombre.textContent = `${element.name}`;
      let precio = document.createElement("p");
      precio.textContent = `$ ${element.price}`;
      let imagen = document.createElement("img");
      imagen.src = `${element.image}`;
      let buttonDel = document.createElement("img");
      buttonDel.src = "./assets/iconos/trash-can-regular.svg";
      buttonDel.alt = "Eliminar Item";
      buttonDel.className = "delete";
      card.appendChild(imagen);
      card.appendChild(nombre);
      cardFooter.appendChild(precio);
      cardFooter.appendChild(buttonDel);
      card.appendChild(cardFooter);
      section.appendChild(card);
    });
  } else if (section && lista.length === 0) {
    console.log(lista.length);
    main.innerHTML = `<h1>No se encontraron productos</h1>`;
  } else {
    document.innerHTML = `<h1> Imposible cargar la página.</h1>`;
  }
}

//funcionalidad de agregar item
// trae el formulario y comprueba si cargo la pagina
const formu = document.getElementById("form");
if (formu) {
  //si hay, maneja el envio
  formu.addEventListener("submit", envioForm);
}

//funcion de manejo de envio de formulario
async function envioForm(evento) {
  evento.preventDefault();
  const { nombre, precio, imagen } = getFormData();
  if (!isValidFormData(nombre, precio, imagen)) {
    // avisa que hay campos vacios
    alert("Debe llenar todos los campos!");
    return;
  } else if (!precioValido(precio)) {
    //avisa que el formato de precio no es correcto
    alert("El precio ingresado no es válido. El formato debe ser: 100.00");
    return;
  } else if (!isValidUrl(imagen)) {
    //avisa que la url de imagen no es correcta
    alert("Esa no es una url válida");
    return;
  }
  try {
    // espera los datos del formulario para enviarlos
    await conectionAPI.addProduct(nombre, precio, imagen);
    // redirige a la pagina que muestra mensaje satisfactorio
    window.location.replace("../../pages/addok.html");
  } catch (error) {
    // en caso de error de envio, muestra el error
    alert(`No se pudo agregar el producto: ${error.message}`);
  }
}

//obtine los datos de los campos del formulario de carga
function getFormData() {
  return {
    nombre: document.querySelector("#name").value,
    precio: document.querySelector("#price").value,
    imagen: document.querySelector("#image").value,
  };
}

// comprueba si los campos estan todos completos
function isValidFormData(nombre, precio, imagen) {
  return nombre && precio && imagen;
}

// comprueba si elformato de precio ingresado es correcto
function precioValido(precio) {
  if (!isNaN(precio) && precio > 0) {
    return true;
  }
}
// comprueba si la url de imagen tiene formato correcto
function isValidUrl(url) {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(url);
}

// funcion eliminacion del producto
document.querySelectorAll(".card").forEach((e) => {
  const eliminar = e.querySelector(".delete");
  eliminar.addEventListener("click", async () => {
    const idProd = e.dataset.id;
    const indLista = listaAPI.findIndex(
      (producto) => producto.id === parseInt(idProd)
    );
    if (indLista !== -1) {
      await conectionAPI.deleteItem(idProd);
      listaAPI.splice(idProd, 1);
      e.remove();
    }
  });
});

// funcion para buscar segun palabra clave
// Selecciona el input
const inputBusqueda = document.getElementById("search-item");

// confirma si el input existe
if (inputBusqueda) {
  // Evento al presionar la tecla "Enter"
  inputBusqueda.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      const listaBuscada = await realizarBusqueda();
      section.innerHTML = "";
      renderizarItems(listaBuscada);
    }
  });
  // Evento para detectar cambios en el input
  inputBusqueda.addEventListener("input", async () => {
    if (inputBusqueda.value === "") {
      // llama a la función que carga todos los elementos
      section.innerHTML = "";
      renderizarItems(listaAPI);
    }
  });
} else {
  if (section) {
    section.innerHTML = "<h1>El producto no se encontró</h1>";
  }
}

async function realizarBusqueda() {
  const nameBuscado = inputBusqueda.value.toLowerCase(); // obtenemos el valor del input
  console.log(nameBuscado);

  if (nameBuscado) {
    try {
      const listaBuscada = await conectionAPI.searchProduct(nameBuscado); // Espera la respuesta

      // Verifica si la listaBuscada no es undefined
      if (listaBuscada) {
        return listaBuscada; // devuelve para renderizar
      } else {
        renderizarItems([]); // Llamar a renderizarItems con una lista vacía
      }
    } catch (error) {
      section.innerHTML = "<h1>Hubo un error.</h1>";
      renderizarItems([]); // En caso de error, renderizar una lista vacía
    }
  }
}
