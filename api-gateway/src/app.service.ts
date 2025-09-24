/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisListenerService implements OnModuleInit {
  private subscriber;

  async onModuleInit() {
    this.subscriber = createClient({ url: 'redis://localhost:6379' });
    await this.subscriber.connect();
    console.log('API Gateway: conectado a Redis');

    await this.subscriber.pSubscribe('orders:list', (message, channel) => {
      const order = JSON.parse(message);
      console.log(`Mensaje recibido en ${channel}:`, order);

      // Aquí podés hacer cualquier acción: cache, notificación, etc.
    });
  }
}
