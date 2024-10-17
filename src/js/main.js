// muestra caja de input cuando presiono el boton/imagen de lupa
const botonBuscar = document.getElementById("botonBuscar");
function mostrarInput() {
  const inputBusqueda = document.getElementById("search-item");
  inputBusqueda.style.display = "flex";
  botonBuscar.style.display = "none";
}

if (botonBuscar) {
  botonBuscar.addEventListener("click", mostrarInput);
}

// funcion busqueda de un producto segun palabra clave

// mostrar formulario de carga de productos
function mostrarFormulario() {
  window.location.href = "/proyecto_tienda/pages/formulario.html";
}

const addProducto = document.getElementById("addProducto");
if (addProducto) {
  addProducto.addEventListener("click", mostrarFormulario);
}
