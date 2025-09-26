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
    const order = 'llego! buenaaaaaaaaa';

    console.log('Order publicado:', order);

    return order;
  }

  suma([op1, op2]: [number, number]) {
    // console.log('sumaIn', params);
    const rta = op1 + op2;
    console.log(rta);


    return rta;
  }

  async fecha(a) {
    console.log("a",a.text);
    if (a.text === 'fecha') {



      return new Date();
    } else {
      const now = new Date();
      const hora = now.toLocaleTimeString();

      return hora;
    }
  }
}
