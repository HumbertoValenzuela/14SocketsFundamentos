const { io } = require('../server');

// Saber cuando un usuario se conecta al Server
// client: contiene toda la info de la PC o de la conexion que se establecio
io.on('connection', (client) => {

  console.log('usuario conectado'); //se muestra en la terminal

  // Enviar mensaje al frontend usuario
  client.emit('enviarMensajeAlCliente', {
      usuario: 'Administrador',
      mensaje: 'Bienvenido al Chat'
  });

  // Manejar cuando el cliente se desconecta de la aplicación
  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  });

  // Escuchar el cliente
  client.on('enviarMensaje', ( mensaje, callback ) => {
      console.log(mensaje);

      // Avisar que se disparo el callback
      // callback();

      // Enviar mensaje al cliente si usuario existe
      if ( mensaje.usuario ) {
          callback({
              ok: true,
              resp: 'Todo salio bien!'
          });
      } else {
          callback({
              ok:true,
              resp: 'Todo salio mal!'
          });
      }

  });

// Escuchar al cliente
client.on('enviarMensajeATodos', ( data, callback ) => {
  // desde la consola socket.emit('enviarMensajeATodos', { usuario: 'A todos', mensaje:'otra ventana'});
  // En la terminal se muestra: { usuario: 'A todos', mensaje:'otra ventana'}
  console.log(data);

  client.broadcast.emit('enviarMensajeATodos', data);
});

});