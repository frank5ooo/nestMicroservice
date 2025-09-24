/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrdersService } from './app.service';
import { AppController } from './app.controller';

@Module({
  providers: [OrdersService],
  controllers: [AppController],
})
export class AppModule {}
