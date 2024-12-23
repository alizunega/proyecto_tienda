import { conectionAPI } from "./conectionAPI.js";

const main = document.querySelector(".main");
const section = document.querySelector(".container");
const botonAdd = document.querySelector(".boton-add");

const listaAPI = await conectionAPI
  .conexionAPI()
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.log(error.message);
    main.innerHTML = `<h1> No se pudo realizar la conexión</h1>`;
  });

renderizarItems(listaAPI);

function renderizarItems(lista) {
  // existe el contenedor en DOM y la lista tiene items
  if (section && lista && lista.length > 0) {
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
      imagen.alt = `Imagen ${element.name}`;
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

    mostrarMasItems();
    // existe el contenedor en el DOM y la lista no tiene items
  } else if (section && lista.length === 0) {
    main.innerHTML = `<h1>No se encontraron productos</h1><h1>Espere mientras recarga la página</h1>`;
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  } else {
    document.innerHTML = `<h1> Imposible cargar la página.</h1><h1>Intente más tarde.</h1>`;
  }
}

// Función que configura el comportamiento del botón "Ver más"
function mostrarMasItems() {
  const items = document.querySelectorAll(".card");
  const verMasBtn = document.querySelector(".button-ver-mas");
  const cantItems = document.querySelector(".cant-items");
  let itemsMostrados = 12; // Inicialmente mostramos 10
  if (items.length !== 0) {
    cantItems.textContent = `Se mostrarán ${items.length} productos`;
  }

  if (items.length < itemsMostrados) {
    verMasBtn.style.display = "none";
    cantItems.textContent = `Se muestran en total ${items.length} productos`;
  }
  // hay elementos y mas de 10
  if (items.length > 12) {
    verMasBtn.style.display = "flex";
  }

  // Mostrar los primeros 10 ítems
  for (let i = 0; i < Math.min(itemsMostrados, items.length); i++) {
    items[i].classList.add("show");
  }

  // Event listener para mostrar más ítems al hacer clic
  verMasBtn.addEventListener("click", function () {
    const nuevosItems = itemsMostrados + 10;

    for (let i = itemsMostrados; i < Math.min(nuevosItems, items.length); i++) {
      items[i].classList.add("show");
    }

    itemsMostrados += 10;

    if (itemsMostrados >= items.length) {
      // Oculta el botón si ya no hay más ítems
      verMasBtn.style.display = "none";
      cantItems.textContent = `Total: ${items.length} productos`;
    }
  });
}

// Funcionalidad de agregar item
// Trae el formulario y comprueba si se carga la página
const formu = document.getElementById("form");
if (formu) {
  // Si hay, maneja el envío
  formu.addEventListener("submit", envioForm);
}

// Función de manejo de envío de formulario
// Obtiene los datos de los campos del formulario de carga
// quitando espacios en blanco al inicio y al final de cada string
function getFormData() {
  return {
    nombre: document.querySelector("#name").value.trim(),
    precio: document.querySelector("#price").value.trim(),
    imagen: document.querySelector("#image").value.trim(),
  };
}

async function envioForm(evento) {
  evento.preventDefault();
  const { nombre, precio, imagen } = getFormData();
  const errores = document.querySelectorAll(".form-msj");

  // Limpiar mensajes de error al inicio
  errores.forEach((error) => (error.textContent = ""));

  // Validar datos del formulario
  if (!isValidFormData(nombre, precio, imagen)) {
    mostrarError(errores[0], "El campo Nombre debe ser completado.", !nombre);
    mostrarError(errores[1], "El campo Precio debe ser completado.", !precio);
    mostrarError(errores[2], "El campo Imagen debe ser completado.", !imagen);
    return;
  }

  if (!precioValido(precio)) {
    mostrarError(
      errores[1],
      "El precio ingresado no es válido. El formato debe ser: 100.00",
      true
    );
    return;
  }

  if (!isValidUrl(imagen)) {
    mostrarError(errores[2], "La url de la imagen no es válida", true);
    return;
  }

  // Intentar enviar los datos del formulario
  try {
    console.log("Enviando producto...");
    await conectionAPI.addProduct(nombre, precio, imagen);
    console.log("Producto cargado correctamente");
    // si todo ha salido bien - carga pagina con el mensaje correspondiente
    window.location.replace(
      "/proyecto_tienda/pages/mensajeadd.html?mensaje=ok"
    );
  } catch (error) {
    // si hubo un error en la carga - formatea la pagina avisando de ello
    console.log("Hubo un error al cargar el producto");
    window.location.replace(
      "/proyecto_tienda/pages/mensajeadd.html?mensaje=bad"
    );
    // alert(`No se pudo agregar el producto: ${error.message}`);
  }
}

// Comprueba si los campos están todos completos
function isValidFormData(nombre, precio, imagen) {
  return nombre && precio && imagen;
}

// Comprueba si el formato de precio ingresado es correcto
function precioValido(precio) {
  return !isNaN(precio) && precio > 0;
}

// Comprueba si la URL de imagen tiene formato correcto
function isValidUrl(url) {
  const regex = new RegExp(
    "^(https?:\\/\\/)" + // Asegura que tenga http:// o https://
      "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,}|localhost)" + // Dominio o localhost
      "(\\:\\d{2,5})?" + // Puerto opcional
      "(\\/[-a-zA-Z\\d%@_.~+&:]*)*" + // Ruta opcional
      "(\\.(jpg|jpeg|png|gif|bmp|webp))?" + // Extensión de imagen opcional
      "(\\?[-a-zA-Z\\d%@_.~+&:=%]*)?$", // Parámetros opcionales (como ?width=1200&height=1200)
    "i" // Ignora mayúsculas/minúsculas
  );
  return regex.test(url);
}

// Muestra error en el span correspondiente
function mostrarError(span, mensaje, mostrar) {
  if (mostrar) {
    span.textContent = mensaje;
  } else {
    span.textContent = ""; // Limpia el mensaje si no hay error
  }
}

// Funcion eliminacion del producto
// Agrega un evento de click al contenedor
if (section) {
  section.addEventListener("click", async (event) => {
    // Verifica si el elemento clicado es un botón de eliminar
    if (event.target.classList.contains("delete")) {
      const card = event.target.closest(".card"); // Encuentra el elemento card más cercano
      const idProd = card.dataset.id; // Obtén el id del producto
      const indLista = listaAPI.findIndex((producto) => producto.id == idProd);
      console.log(`idProd es ${idProd} y indLista es ${indLista}`);
      if (indLista !== -1) {
        //muestra mensaje de error para desprevenidos
        if (confirm("¿Está seguro que desea eliminar?")) {
          await conectionAPI.deleteItem(idProd);
          listaAPI.splice(indLista, 1);
          card.remove(); // Remueve la tarjeta del DOM
        }
      }
    }
  });
}

// funcion para buscar segun palabra clave

const botonBuscar = document.querySelector("#botonBuscar");
const inputBusqueda = document.getElementById("search-item");

if (botonBuscar) {
  botonBuscar.addEventListener("click", () => {
    inputBusqueda.style.display = "inline";
  });
}

// Confirma si el input existe
if (inputBusqueda) {
  // Evento al presionar la tecla "Enter"
  inputBusqueda.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      manejoBusqueda();
    }
  });

  // Evento al presionar el boton de busqueda
  document
    .getElementById("botonBuscar")
    .addEventListener("click", manejoBusqueda);

  async function manejoBusqueda() {
    const nameBuscado = inputBusqueda.value.trim(); // Obtener el valor del input y eliminar espacios
    if (!nameBuscado) {
      // Si el input está vacío, no hacer nada
      return;
    }

    const listaBuscada = await realizarBusqueda(nameBuscado);
    section.innerHTML = "";
    renderizarItems(listaBuscada);
  }

  // Evento para detectar cambios en el input
  inputBusqueda.addEventListener("input", async () => {
    if (inputBusqueda.value === "") {
      // Llama a la función que carga todos los elementos
      if (botonAdd) {
        botonAdd.style.display = "flex";
      }

      section.innerHTML = "";
      renderizarItems(listaAPI);
    } else {
      if (botonAdd) {
        botonAdd.style.display = "none";
      }
    }
  });
} else {
  if (section) {
    section.innerHTML = "<h1>El producto no se encontró</h1>";
  }
}

async function realizarBusqueda(nameBuscado) {
  console.log("palabra buscada: ", nameBuscado);

  if (nameBuscado) {
    try {
      const listaBuscada = await conectionAPI.searchProduct(nameBuscado); // Espera la respuesta
      console.log("productos: ", listaBuscada);

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

// Formateado de pagina de mensaje para carga de item
const mainMensaje = document.querySelector(".main--mensaje");
const urlParams = new URLSearchParams(window.location.search);
const mensaje = urlParams.get("mensaje");
if (mensaje === "ok") {
  mainMensaje.innerHTML = ` <div class="saludo">
    <h1>¡Producto agregado satisfactoriamente!</h1>
    <img src="../assets/iconos/added.png" alt="Producto agregado satisfactoriamente">
</div>
<div class="buttons--saludo">
    <a href="/proyecto_tienda/index.html"><img src="../assets/iconos/volver_pagina.png" alt="Volver a pagina principal">Volver
        a
        pagina principal</a>
    <a href="/proyecto_tienda/pages/formulario.html">
        <img src="../assets/iconos/add_item.png" alt="Agregar mas producto">
        Agregar otro producto
    </a>
</div>`;
} else if (mensaje === "bad") {
  //cuando no se pudo agregar el nuevo item
  mainMensaje.innerHTML = ` <div class="saludo"><h1>¡No se pudo agregar el producto! Intente más tarde.</h1>
  <img src="../assets/iconos/error_conection.png" alt="Error al cargar">
  </div>
  <div class="buttons--saludo">
    <a href="/proyecto_tienda/index.html"><img src="../assets/iconos/volver_pagina.png" alt="Volver a pagina principal">Volver
        a
        pagina principal</a>
    <a href="/proyecto_tienda/pages/formulario.html">
        <img src="../assets/iconos/add_item.png" alt="Agregar mas producto">
        Agregar otro producto
    </a>
</div>`;
}
