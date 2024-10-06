import { conectionAPI } from "./conectionAPI.js";

let listaAPI = await conectionAPI.conexionAPI();
let section = document.querySelector(".container");

console.log(listaAPI);

listaAPI.forEach((element) => {
  let card = document.createElement("div");
  card.className = "card";
  let titulo = document.createElement("h1");
  titulo.textContent = `${element.name}`;
  let descripcion = document.createElement("p");
  descripcion.textContent = `$ ${element.price}`;
  let imagen = document.createElement("img");
  imagen.src = `${element.image}`;
  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);

  section.appendChild(card);
});

const form = document.querySelector("#form");

async function addProducto(event) {
  event.preventDefault();

  const nombre = document.querySelector("#name").value;
  const precio = document.querySelector("#price").value;
  const imagen = document.querySelector("#image").value;
  await conectionAPI.addProduct(nombre, precio, imagen);
  alert("Producto agregado correctamente!");
}

form.addEventListener("submit", (evento) => addProducto(evento));
