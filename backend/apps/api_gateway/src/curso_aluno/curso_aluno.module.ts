import { Module } from '@nestjs/common';
import { CursoAlunoService } from './curso_aluno.service';
import { CursoAlunoController } from './curso_aluno.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
const rabbitUrl = process.env.MENSAGERIA || '';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CURSO_ALUNO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${rabbitUrl}`],
          queue: 'curso_aluno_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [CursoAlunoController],
  providers: [CursoAlunoService]
})
export class CursoAlunoModule {}
