import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
const rabbitUrl = process.env.MENSAGERIA || '';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ALUNO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${rabbitUrl}`],
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
