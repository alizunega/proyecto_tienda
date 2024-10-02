// muestra caja de input cuando presiono el boton/imagen de lupa
function mostrarInput() {
  let input = document.getElementById("search-item");
  input.style.display = "flex";
  botonBuscar.style.display = "none";
}

let botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener("click", mostrarInput);

// funcion busqueda de un producto segun palabra clave

// mostrar formulario de carga de productos
/*function mostrarFormulario() {
  let formulario = document.getElementById("form");
  formulario.style.display = "flex";
}

let addProducto = document.getElementById("addProducto");
addProducto.addEventListener("click", mostrarFormulario);*/
