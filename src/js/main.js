// mostrar formulario de carga de productos
function mostrarFormulario() {
  window.location.href = "./pages/formulario.html";
}

const addProducto = document.getElementById("addProducto");
if (addProducto) {
  addProducto.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    mostrarFormulario();
  });
}
