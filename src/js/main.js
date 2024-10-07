// muestra caja de input cuando presiono el boton/imagen de lupa
function mostrarInput() {
  let input = document.getElementById("search-item");
  input.style.display = "flex";
  botonBuscar.style.display = "none";
}

const botonBuscar = document.getElementById("botonBuscar");
if (botonBuscar) {
  botonBuscar.addEventListener("click", mostrarInput);
}

// funcion busqueda de un producto segun palabra clave

// mostrar formulario de carga de productos
function mostrarFormulario() {
  window.location.href = "../../pages/formulario.html";
}

const addProducto = document.getElementById("addProducto");
if (addProducto) {
  addProducto.addEventListener("click", mostrarFormulario);
}
