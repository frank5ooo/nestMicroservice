/* eslint-disable prettier/prettier */
// import { createClient } from 'redis';

// async function main() {
//   // Creamos clientes de Redis
//   const subscriber = createClient({ url: 'redis://localhost:6379' });
//   const publisher = createClient({ url: 'redis://localhost:6379' });

//   subscriber.on('error', (err) => console.error('Subscriber Error', err));
//   publisher.on('error', (err) => console.error('Publisher Error', err));

//   await subscriber.connect();
//   await publisher.connect();

//   console.log('Conectado a Redis');

// //   Subscribirse a los mensajes
//   await subscriber.pSubscribe('orders:*', (message, channel) => {
//     console.log(`Recibido enasd ${channel}: ${message}`);
//   });

// //   Publicación manual inicial (opcional) para probar
//   console.log('\n Publicando mensaje inicial en orders:list');
//   await publisher.publish('publica esto>', JSON.stringify({ order: 1 }));
//   console.log('Mensaje inicial publicado');

// }

// main();
