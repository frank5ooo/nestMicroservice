/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

  async createOrder() {
    // lógica para guardar el pedido
    const order = "llego soy una locura pum pum pum";

    console.log('Order publicado:', order);

    return order;
  }
}
