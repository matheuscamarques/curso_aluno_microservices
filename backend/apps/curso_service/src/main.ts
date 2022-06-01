import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://vadoaqto:ycsvbofsHk6jRlvFyj38evXeQpqWs8Zg@jackal.rmq.cloudamqp.com/vadoaqto'],
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
