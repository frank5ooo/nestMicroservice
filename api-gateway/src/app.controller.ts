/* eslint-disable prettier/prettier */

import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  @Get('orders')
  getOrders() {
    return this.orderClient.send('orders:list', {});
  }
  @Get("suma")
  getSuma(param1:number, param2:number) {
    console.log(param1, param2)
    return this.orderClient.send('orders:suma', {});
  }
  @Get("fecha")
  getFecha() {
    return this.orderClient.send('orders:fecha', {text: "fecha"});
  }
}
