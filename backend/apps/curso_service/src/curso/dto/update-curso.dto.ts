import { PartialType } from '@nestjs/mapped-types';
import { uuid } from '../entities/curso.entity';
import { CreateCursoDto } from './create-curso.dto';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {
  codigo: uuid;
}
