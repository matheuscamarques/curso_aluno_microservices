import { Module } from '@nestjs/common';
import { CursoAlunoService } from './curso_aluno.service';
import { CursoAlunoController } from './curso_aluno.controller';
import { CursoAluno } from './entities/curso_aluno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([CursoAluno])
  ],
  controllers: [CursoAlunoController],
  providers: [CursoAlunoService]
})
export class CursoAlunoModule {}
