/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  @Get('orders')
   getOrders() {
    return this.orderClient.send({ cmd: 'get_orders' }, {}); // manda un patrón
  }
}
