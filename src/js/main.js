// muestra caja de input cuando presiono el boton/imagen de lupa
function mostrarInput() {
  let input = document.getElementById("search-item");
  input.style.display = "flex";
  botonBuscar.style.display = "none";
}

const botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener("click", mostrarInput);

// funcion busqueda de un producto segun palabra clave

// mostrar formulario de carga de productos
function mostrarFormulario() {
  let formSection = document.querySelector(".formulario");
  formSection.style.display = "inline";
}

const addProducto = document.getElementById("addProducto");
addProducto.addEventListener("click", mostrarFormulario);

const form = document.querySelector("#form");
// limpia el formulario / resetea
const cleanButton = document.querySelector(".clean");
cleanButton.addEventListener("click", () => {
  form.reset();
});

// escucha evento de agregar item

// funcion para agregar item

function precioValido(precio) {
  if (!isNaN(precio) && precio > 0) {
    return true;
  }
}
function isValidUrl(url) {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(url);
}
