import { Module } from '@nestjs/common';
import { CursoAlunoService } from './curso_aluno.service';
import { CursoAlunoController } from './curso_aluno.controller';

@Module({
  controllers: [CursoAlunoController],
  providers: [CursoAlunoService]
})
export class CursoAlunoModule {}
