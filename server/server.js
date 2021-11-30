const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

// Realizar configuraciones en app de express para que trabaje en base a un servidor que se va a definir
const app = express();
// Se levanta el servidor
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar el socket.io
// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});