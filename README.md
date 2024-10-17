# Proyecto: Challenge AluraGeek

para [Alura ONE](https://github.com/alura-es-cursos)

## Descripción :notebook_with_decorative_cover:

En este desafío desarrollamos una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JAVASCRIPT, aplicando conceptos como programación asíncrona, solicitudes HTTP, validación de formularios, manipulación del DOM y otros conceptos avanzados.

## Desarrollado por: :black_nib:

- Alicia Zuñega - [@alizunega](https://github.com/alizunega)

## Despliegue :package:

[_Tienda Alura_](https://alizunega.github.io/proyecto_tienda/)

## Consideraciones

> [!NOTE]
>
> En este proyecto trabajamos instalando Node.js para poder hacer uso de la herramienta npm. Se recomienda su previa instalación si desea verlo en funcionamiento.
>
> Revise el formato recomendado para el ingreso de datos, por ejemplo: url de imágenes deben ser url válida, el formato de precio es solo numeros con el '.' como simbolo decimal.
>
> El proyecto se encuentra en desarrollo, por lo que puede haber errores o problemas que no se han detectado aun. Sientase libre de comentarlos por dm si lo necesita.

## Consideraciones para uso del proyecto :memo:

> [!IMPORTANT]
>
> Este proyecto fue desarrollado con el objetivo de cumplir con los requisitos del desafío.
>
> Para poder hacerlo visible utilizaremos un server fake haciendo uso de este recurso (https://mockapi.io/)
>
> Al ser un recurso free, contamos con limitaciones. Por ejemplo, en tiempo de respuesta.

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

9- En `conectionAPI.js` podes cambiar la variable `url` para trabajar en forma local con el server fake en `mockAPI`.
Solo debes comentar la url para desarrollo (aquella con formato localhost:3000) y descomentar la de produccion. Por defecto trabaja con la url del db.json local.

10- Consideración especial: si trabajas en la rama main no funcionará correctamente, recomiendo usar develop para trabajar en local.

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
