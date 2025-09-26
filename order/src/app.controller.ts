/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: OrdersService) {}

  @MessagePattern('orders:list')
  getOrders() {
    return this.appService.createOrder();
  }

  @MessagePattern('orders:suma')
  getSuma(params: { [op: `op${number}`]: number}) {
    console.log(typeof params); // 'boolean' 'number' 'bigint' 'string' 'symbol' 'object' (incluye a null) 'undefined' 'function'


    return this.appService.suma([params.op1, params.op2]);
  }
  @MessagePattern('orders:fecha')
  fecha(a) {
    console.log('controller', a);
    return this.appService.fecha(a);
  }
}
