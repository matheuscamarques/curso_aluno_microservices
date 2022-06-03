import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const rabbitUrl = process.env.MENSAGERIA || '';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://' + rabbitUrl],
      queue: 'curso_aluno_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen()
     .then(() => console.log('CursoAlunoService is listening'));
}
bootstrap();
