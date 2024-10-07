import { conectionAPI } from "./conectionAPI.js";

let listaAPI = await conectionAPI.conexionAPI();

let section = document.querySelector(".container");

console.log(listaAPI);

if (section) {
  listaAPI.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    let cardFooter = document.createElement("div");
    cardFooter.className = "card--footer";
    let titulo = document.createElement("h1");
    titulo.textContent = `${element.name}`;
    let descripcion = document.createElement("p");
    descripcion.textContent = `$ ${element.price}`;
    let imagen = document.createElement("img");
    imagen.src = `${element.image}`;
    let buttonDel = document.createElement("img");
    buttonDel.src = "../../assets/iconos/trash-can-regular.svg";
    buttonDel.alt = "Eliminar Item";
    buttonDel.className = "delete";
    card.appendChild(imagen);
    card.appendChild(titulo);
    cardFooter.appendChild(descripcion);
    cardFooter.appendChild(buttonDel);
    card.appendChild(cardFooter);
    section.appendChild(card);
  });
}

// funcionalidad para eliminar item
const divDescrip = document.querySelector(".delete");
if (divDescrip) {
  divDescrip.addEventListener("click", () => {});
}

//funcionalidad de agregar item
// trae el formulario y comprueba si cargo la pagina
const formu = document.getElementById("form");
if (formu) {
  //si hay, maneja el envio
  formu.addEventListener("submit", handleSubmit);
}

//funcion de manejo de envio de formulario
async function handleSubmit(evento) {
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
