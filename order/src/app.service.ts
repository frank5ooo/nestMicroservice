/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class OrdersService {

  async createOrder() {
    // lógica para guardar el pedido
    const order = "anda bien";

    // console.log('Order publicado:', order);

    return order;
  }
}
