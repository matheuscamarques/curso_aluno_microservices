import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ALUNO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://vadoaqto:ycsvbofsHk6jRlvFyj38evXeQpqWs8Zg@jackal.rmq.cloudamqp.com/vadoaqto'],
          queue: 'aluno_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule {}
