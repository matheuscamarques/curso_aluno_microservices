import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CURSO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://vadoaqto:ycsvbofsHk6jRlvFyj38evXeQpqWs8Zg@jackal.rmq.cloudamqp.com/vadoaqto'],
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
