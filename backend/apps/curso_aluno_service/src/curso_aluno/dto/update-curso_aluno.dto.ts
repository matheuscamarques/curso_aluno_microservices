import { PartialType } from '@nestjs/mapped-types';
import { uuid } from '../entities/curso_aluno.entity';
import { CreateCursoAlunoDto } from './create-curso_aluno.dto';

export class UpdateCursoAlunoDto extends PartialType(CreateCursoAlunoDto) {
  codigo: uuid;
}
