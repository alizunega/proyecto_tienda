# Proyecto: Challenge AluraGeek

para [Alura ONE](https://github.com/alura-es-cursos)

## Descripción :notebook_with_decorative_cover:

En este desafío desarrollamos una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JAVASCRIPT, aplicando conceptos como programación asíncrona, solicitudes HTTP, validación de formularios, manipulación del DOM y otros conceptos avanzados.

## Desarrollado por: :black_nib:

- Alicia Zuñega - [@alizunega](https://github.com/alizunega)

## Requerimientos del proyecto :memo:

> [!IMPORTANT]
>
> Este proyecto fue desarrollado con el objetivo de cumplir con los requisitos del desafío
>
> Para poder hacerlo visible utilizaremos un server fake haciendo uso de este recurso (https://my-json-server.typicode.com/)
>
> Al ser un recurso free, contamos con limitaciones. Una de ellas es un máximo de 30 items en la lista de productos. Tenga esto encuenta a la hora de utilizar.

### Instalación y Uso :computer:

1- Clona el repositorio:

`git clone https://github.com/alizunega/proyecto_tienda.git `

2- Navega al directorio del proyecto:

`cd proyecto_tienda`

3- Inicializa el proyecto

`npm init`

4- Instala json-server

`npm install -y json-server`

5- Inicia el servidor

`npx json-server --watch -p 3001 db.json`

6- Abre el navegador y accede a `http://localhost:5500`

7- Puedes interactuar con la aplicación y ver en funcionamiento la página. Comprobaras la carga de items desde db.json, podras agregar items y eliminarlos. Comprueba también la busqueda por palabra clave.

## Estructura de carpetas :open_file_folder:

```
proyecto_tienda
├── src
|   ├── css
│   └── js
├── pages
│   ├── addok.html
│   └── formulario.html
├── assets
│   ├── iconos
│   ├── img
│   └── productos
├── index.html
├── db.json
├── LICENSE
└── README.md
```

## Despliegue :package:

[_Tienda Alura_](https://alizunega.github.io/proyecto_tienda/)

## Consideraciones

> [!NOTE]
> En este proyecto trabajamos instalando node.js para poder hacer uso de la herramienta npm. Se recomienda su previa instalación si desea verlo en funcionamiento.
>
> Revise el formato recomendado para el ingreso de datos, por ejemplo: url de imágenes deben ser url válidas, el formato de precio es solo numeros con el '.' como simbolo decimal.
>
> Puede que en la busqueda se tome en cuenta también la url dentro de los parámetros de búsqueda.
>
> El proyecto se encuentra en desarrollo, por lo que puede haber errores o problemas que no se han detectado aun. Sientase libre de comentarlos por dm si lo necesita.

## Construido Con :hammer_and_wrench:

<!-- <p align="center" hidden>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,npm" />
  </a>
</p> -->
<div align="center" background-color="white">
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="50">
  <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" width="50">
</div>
