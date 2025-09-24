/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: OrdersService) {}

  @MessagePattern('orders:list')
  getOrders() {
    return this.appService.createOrder();
  }
}
