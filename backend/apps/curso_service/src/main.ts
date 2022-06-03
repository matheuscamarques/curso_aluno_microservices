import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const rabbitUrl = process.env.MENSAGERIA || '';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${rabbitUrl}`],
      queue: 'curso_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen()
     .then(() => console.log('CursoService is listening'));
}
bootstrap();
