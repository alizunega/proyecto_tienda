// funcion busqueda de un producto segun palabra clave

// mostrar formulario de carga de productos
function mostrarFormulario() {
  window.location.href = "./pages/formulario.html";
}

const addProducto = document.getElementById("addProducto");
if (addProducto) {
  addProducto.addEventListener("click", mostrarFormulario);
}
