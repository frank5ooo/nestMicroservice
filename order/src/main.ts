// /* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
    },
  );

  let port = parseInt(process.env.PORT!);

  await app.listen();
  console.log('Order microservice running on Redis');
}
bootstrap();
