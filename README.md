# API CON COLECCIÓN DE SERIES TV

![Image Movies](https://c7.alamy.com/compes/h7gegn/coleccion-de-16…drados-negros-con-esquinas-redondeadas-h7gegn.jpg)

Bienvenido a la API con una coleccion de SeriesTV y Usuarios. En esta API podrás acceder a recursos albergados en un Servidor Cloud en MongoAtlas utilizando MongoDB como BBDD. La API está desplegada utilizando Vercel como Host.

## HECHO CON

<p align="center"> 
      <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
    <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
    <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
</p>


## INSTALACION
1. DESCARGA DEL REPOSITORIO
```
git clone https://github.com/torresmald/proyecto-react-api
```

2. INSTALACION DE DEPENDENCIAS UTLIZADAS. 

  ```
  npm install
  ```


### DEPENDENCIAS UTILIZADAS

- BCRYPT--> Para la encriptación/desencriptacion de las password de Users.
- CLOUDINARY--> Host de imágenes utilizado para subir las imagenes de cines/películas desde el servidor.
- CONNECT-MONGO--> Necesario para poder guardar en la BBDD las sesiones de los usuarios.
- CORS--> Evitamos problemas de origen cruzado al utilizar Postman para lanzar las peticiones.
- DOTENV--> Dependencia que nos permite utilizar las variables de entorno y securizar la aplicación.
- EXPRESS--> Framework utilizado como entorno de desarrollo.
- EXPRESS SESION--> Permite la gestión de sesiones de usuario.
- MONGOOSE--> Para la conexión con la BBDD de MongoDB.
- MULTER--> Nos permite la subida de archivos por parte del usuario al servidor.
- PASSPORT--> Librería de autenticación utilizada.
- PASSPORT-LOCAL--> Nos permite crear una estrategia de autenticacion para registro/login.

#### DEPENDENCIAS DE DESARROLLO:

- NODEMON--> Utilizada durante el desarrollo de la aplicación para comprobar chequear los cambios en el código y recargar el Servidor.

## ENDPOINTS DISPONIBLES:
##### ALGUNOS ENDPOINTS GET TIENEN CAMPOS FILTRADOS QUE NO SE MOSTRARÁN EN LA PETICIÓN

###### <sub>IMAGENES EN FORMATO ÚNICAMENTE PNG, JPG, JPEG, GIF</sub>
###### <sub>Las cookies tienen un tiempo de expiracion de 2 horas.</sub>

1.  PELÍCULAS
    ```jsx
    1. GET
    - seriesRouter.get('/' --> OBTENER LISTADO DE TODAS LAS SERIES
    - seriesRouter.get('/paged' --> LISTADO DE SERIES PAGINADAS EN BLOQUES DE 3 SERIES. 
    - seriesRouter.get('/title/:title' --> SERIES POR TITULO INDICADO.
    2. POST
    - seriesRouter.post('/to-cloud' --> AÑADIR UNA SERIE. POSIBILIDAD DE AÑADIR UNA IMAGEN.
    3. PUT
    - seriesRouter.put('/:id' --> EDITAR UNA SERIE POR SU ID. 
    4. DELETE
    - seriesRouter.delete('/:id' --> ELIMINAR UNA SERIE POR SU ID
    ```

4.  USUARIOS
    ```jsx
    1. GET
    - userRouter.get('/' --> OBTENER LISTADO DE TODOS LOS USUARIOS ORDENADOS POR ROL.
    2. POST
    - userRouter.post('/register' --> POSIBILIDAD DE REGISTRARSE. SE REQUIERE UN EMAIL, PASSWORD, EDAD Y USERNAME
    - userRouter.post('/login' --> POSIBILIDAD DE LOGUEARSE UNA VEZ REGISTRADO. 
    - userRouter.post('/logout' --> POSIBILIDAD DE DESLOGUEARSE. 


## RECURSOS

- https://www.mongodb.com/atlas/database
- https://vercel.com/
- https://cloudinary.com/
- https://www.postman.com/


## CONTACTO

- Project Repo: https://github.com/torresmald/Node_Proyect
- Email: jonathan.torresmald@gmail.com
- Email: BEATRIZ


DIVIERTETE USANDOLA......!!

![Image Movies](https://res.cloudinary.com/dj5hu7p44/image/upload/v1674667453/tenor_oadplg.gif)

