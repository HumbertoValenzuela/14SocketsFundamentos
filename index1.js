// 170 Inicio del proyecto - Fundamentos sobre sockets
//  Express-Basico-master
// npm install
// Actualizar express
// npm update express
// Ver en navegador para que la página pública muestre el mensaje Programa de Colas

// 171 Instalacion de socket.io 
// npm install socket.io --save 
// Se necesita configuracion en backend y frontend
// Autoreconexión
// Sistema de detección de desconexión
// ------------------------------------
// Realizar configuraciones en app de express para que trabaje en base a un servidor que se va a definir
// socket.io no trabaja directamente con express, se necesita un servidor para que funcione. Este lo trae por defecto nodejs http
// const http = require('http');
// http nos permite levantar un servidor
// Definir el servidor el cual va a correr la aplicación
// Cambiar el app.listen por server.listen
// Inicializar el socket.io
// IO = esta es la comunicación del backend
// IO nos dice usuarios conectados, disparar eventos
// probar nodemon server/server 
// Recargar el navegador web - debe funcionar igual que antes
// http://localhost:3000/socket.io/socket.io.js
// Si carga el archivo, es que está funcionando correctamente y se puede conectar con el backend con socket.io 

// 172 Configuracion de socket.io - Front-End
// Configurar el frontEnd para que lo utilice. Este tiene la configuración para trabajar con el backEnd. Mantener una comunicación entre ambos

// Bajar nodejs
// Del lado de frontend
// socket.on('connect'
// net::ERR_CONNECTION_REFUSED
// socket seguirá intentando conectar. por un periodo de tiempo (se configura)
// Al levantar nodejs, se puede ver en la consola de chrome que volvio a conectar
// Saber cuando un usuario se conecta al Server
// client: contiene toda la info de la PC o de la conexion que se establecio
// io.on('connection', (client) => {



  // 173 Detectar desconexiones de usuario o desconexiones del servidor
// Manejar cuando se pierda la conexión con el servidor
// socket.on('disconnect', desde frontend
// Manejar cuando el cliente se desconecta de la aplicación
// client.on('disconnect', () => { desde backend
// Para probar la desconexión cerrar la pestaña del navegador y en la terminal dirá Usuario desconectado

// 174 Emitir desde el cliente - Escuchar en el servidor
// on = escuchar
// emit = emitir Enviar información al servidor 
// socket.emit('enviarMensaje',
// enviarMensaje es un parametro que deben ser iguales en frontend y backend
// El frontend envia el mensaje al backend y el backend lo recibe y lo envia al frontend
// client.on('enviarMensaje', (mensaje, callback) => {
// Probar en el navegador recargando la página. Y en la terminal muestra el objeto frontEnd -> backend
// En el index.html tiene var socket = io();
// Con esto es posible en la consola del navegador realizar enviar mensaje al backend
// socket.emit('enviarMensaje', { usuario: 'Humberto', mensaje:'Saludos'});
// Notar que al abrir otro navegador y realiza el mismo proceso, el mensaje se envia al backend. es decir, al emitir info el otro usuario no recibe la info. Solo lo recibe el backend 

// 175 Emitir desde el servidor - Escuchar en el cliente
// Emita una info al cliente que se acaba de conectar
// client.emit('enviarMensajeAlFrontEnd', { usuario: 'Humberto', mensaje:'Saludos desde backend'});)
// Para que el cliente reciba mensajes del servidor, entonces escuchar info socket.on('enviarMensajeAlCliente')

// 176 Retroalimentacion de emisiones del cliente hacia el servidor
// cuando se hace emit es util poder recibir una retroalimentación por la misma vía si el servidor lo logro hacer correctamente. Por ejemplo, el mensaje se graba en una base de datos pero si no lo realiza (desconexion y otros casos) o lo realiza entonces que se reciba una retroalimentación.
// En el emit del cliente, enviar un callback para que el servidor pueda recibir la retroalimentación. Este caalback es el tercer argumento en el emit. 1 nombre del evento, 2 el objeto, 3 el callback que se ejecuta la acción.
// server.js client.on('enviarMensajeAlFrontEnd', (mensaje, callback) => {
// Notar que el callback se puede llamar X cantidad de veces
// Pero no arroja el if todo salio bien o mal
// En index.html  
// socket.emit('enviarMensaje', {
//   usuario: 'Humberto',
//   mensaje: 'Hola Mundo',            
// }, function( resp ){ console.log('se disparo el callback')});
// Probar todo salio mal comentando el usuario: 'Humberto',

// 177 Ordenar el codigo del cliente y del servidor en archivos independientes
// Crear carpeta y archivo public/js/socket-custom.js
// Mover contenido del index.html al socket-custom.js
// Mover contenido server.js a socket.js
// exportar la variable io. module.exports.io = socketIO(server);
// Require el contenido de socket.js

// 178 Broadcast - Emitir a todos los usuarios
    // desde la consola socket.emit('enviarMensajeATodos', { usuario: 'A todos', mensaje:'otra ventana'});
    // En la terminal se muestra: { usuario: 'A todos', mensaje:'otra ventana'}
    // Pero solo la persona que lo envia recibe recibe una confirmacion.
// Enviar mensaje a todos los usuarios broadcast client.broadcast.emit

// 179 Sockets a Heroku
// https://dashboard.heroku.com/apps
// New
// Create New App
// app-name
// Create App
// package.json "start": "node server/server.js"
// Necesario para heroku, para que sepa cual archivo ejecutar 
// Regresar - a vs studio - terminal - 
// git init
// git add .
// git commit -m "Socket basicos"
