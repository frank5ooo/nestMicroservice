/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class OrdersService {
  private publisher;

  constructor() {
    this.publisher = createClient({ url: 'redis://localhost:6379' });
    this.publisher.connect()
      .then(() => console.log('Order service: conectado a Redis'))
      .catch(err => console.error('Redis publisher error', err));
  }

  async createOrder() {
    // lógica para guardar el pedido
    console.log("im in");
    const order = { id: Date.now()};

    // Publicamos el evento
    await this.publisher.publish('orders:list', JSON.stringify(order));
    
    console.log('Order publicado:', order);

    return order;
  }
}
