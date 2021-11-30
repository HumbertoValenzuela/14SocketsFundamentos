
// Funciones que se ejecutan cuando se recibe info del server o cuando se quiere enviar info al server
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Manejar cuando se pierda la conexión con el servidor
socket.on('disconnect', function() {
    console.log('Lost conection with Server');
});

// emit Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Humberto',
    mensaje: 'Hola Mundo',            
}, function( resp ){ console.log('se disparo el callback, respuesta server:', resp )});

// emit Enviar información
socket.emit('enviarMensajeATodos', {
  usuario: 'enviarMensajeATodos',
  mensaje: 'Hola Mundo',            
}, function( resp ){ console.log('callback, resp server enviarMensajeATodos:', resp )});

socket.on('enviarMensajeATodos', function( mensaje ){
  console.log('Servidor: ', mensaje);
});

// on Escuchar información
socket.on('enviarMensajeAlCliente', function( mensaje ) {
    console.log('Servidor: ', mensaje );
});

