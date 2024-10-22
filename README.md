# Proyecto: Challenge AluraGeek

para [Alura ONE](https://github.com/alura-es-cursos)

## Descripción :notebook_with_decorative_cover:

En este desafío desarrollamos una aplicación para listar (muestra una lista de items), registrar (cargar un nuevo item) y eliminar productos usando HTML, CSS y JAVASCRIPT, aplicando conceptos como programación asíncrona, solicitudes HTTP, validación de formularios, manipulación del DOM y otros conceptos avanzados.

## Desarrollado por: :black_nib:

- Alicia Zuñega  
  Perfil GitHub [@alizunega](https://github.com/alizunega)  
  Mail [ali.zunega@gmail.com](mailto:ali.zunega@gmail.com)

## Despliegue :package:

[_Tienda Alura_](https://alizunega.github.io/proyecto_tienda/)

## Consideraciones generales del proyecto. :warning:

> [!NOTE]
>
> Este proyecto fue desarrollado con el objetivo de cumplir con los requisitos del desafío.
>
> En entorno de producción utilizaremos un server fake haciendo uso del recurso [MockAPI](https://mockapi.io/)
>
> Al ser un recurso free, contamos con limitaciones. Por ejemplo, en tiempo de respuesta.
>
> En el entorno de desarrollo, para prueba de uso local, nos serviremos de archivo `db.json` utilizando `json-server` para simular el uso de servidor remoto.

## Consideraciones iniciales :memo:

> [!IMPORTANT]
>
> En este proyecto trabajamos instalando `Node.js` para poder hacer uso de la herramienta `npm`. Se recomienda su previa instalación. Revise las versiones compatibles.
>
> Revise el formato recomendado para el ingreso de datos, por ejemplo: url de imágenes deben ser url válida ej: `http://ejemploUrl.com`, el formato de precio es solo numeros con el '.' como simbolo decimal.
>
> El proyecto se encuentra en desarrollo, por lo que puede haber errores o problemas que no se han detectado aun. Sientase libre de comentarlos por dm o mail si lo necesita.

### Instalación y Uso :computer:

1- Clona el repositorio:

`git clone https://github.com/alizunega/proyecto_tienda.git `

2- Navega al directorio del proyecto:

`cd proyecto_tienda`

3- Inicializa el proyecto, se sirve del archivo package.json para instalar dependencias necesarias.

`npm init`

4- Instala json-server de ser necesario.

`npm install -y json-server`

5- Selecciona la rama develop para trabajar con entorno local

`git checkout develop`

6- Inicia el servidor

`npm run start`

7- Levanta el archivo index.html con la Extensión `Live Server` para ver la página en funcionamiento.

8- Puedes interactuar con la aplicación y ver en funcionamiento la página.
Comprobaras la carga de items desde db.json, podras agregar items y eliminarlos.
Comprueba también la busqueda por palabra clave.

9- En `conectionAPI.js`, puedes modificar la constante `url` para trabajar localmente con el servidor simulado en `mockAPI`. Para ello, simplemente comenta la URL de desarrollo (la que tiene el formato `localhost:3000`) y descomenta la de producción. Por defecto, la aplicación utiliza la URL del archivo `db.json` local.

Es importante destacar que, aunque estés ejecutando la página desde tu entorno local, la aplicación puede estar configurada para consumir datos desde una API remota (en este caso, `mockAPI`). Esto permite simular interacciones con un servidor real mientras desarrollas y pruebas tu aplicación.

En ese caso el paso 6 no será necesario.

10- Consideración especial: si trabajas en la rama `main` no funcionará correctamente, recomiendo usar develop para trabajar en local. `main` es exclusivo para entorno de producción.

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
├── package.json
├── LICENSE
└── README.md
```

## Construido Con :hammer_and_wrench:

<div align="center" background-color="white">
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" width="50">
  <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="60">
  <img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" width="50">
</div>
