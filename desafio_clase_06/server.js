//librerias 
const Contenedor = require("./Modulos/Contenedor.js"); //clase contenedor que trae productos
const express = require("express"); // libreria para crear servidor

//funcion nro aleatorio clase Math --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

//creo servidor
const server = express(); // puede ser app o server
const PORT = 8080;

//creo objeto con productos.txt
const contenedorProductos = new Contenedor("./productos.txt");

//Raiz
server.get("/",(request,response)=>response.send("Desafío Clase 6"));

// Productos Contenido
server.get("/productos", (request,response) => {
    contenedorProductos.getAll()
      .then((listadoProductos) => response.send(listadoProductos))
      .catch( error => response.send(error.message))
  });
   

// Producto Random Contenido
server.get("/productoRandom", (request,response) => {
    contenedorProductos.getAll()
    .then(async (listadoProductos) =>{
        //numero al azar tomando en cuenta la cantidad q hay en el archivo
        let numRandom = getRandomInt(1, listadoProductos.length);
        //devuelvo el producto con el id = al numero obtenido al azar
        response.send(await contenedorProductos.getById(numRandom));
    })
    .catch( error => response.send(error.message));
})

//Servidor Ejecutandose
const connectedServer = server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));

//Testeo en el navegador http://localhost:8080
//Testeo en el navegador http://localhost:8080/productos
//Testeo en el navegador http://localhost:8080/productoRandom