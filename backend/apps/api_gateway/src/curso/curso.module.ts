import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
const rabbitUrl = process.env.MENSAGERIA || '';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CURSO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${rabbitUrl}`],
          queue: 'curso_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [CursoController],
  providers: [CursoService]
})
export class CursoModule {}
