import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CursoAlunoService } from './curso_aluno.service';
import { CreateCursoAlunoDto } from './dto/create-curso_aluno.dto';
import { UpdateCursoAlunoDto } from './dto/update-curso_aluno.dto';
import { uuid } from './entities/curso_aluno.entity';

@Controller()
export class CursoAlunoController {
  constructor(private readonly cursoAlunoService: CursoAlunoService) {}

  @MessagePattern('createCursoAluno')
  create(@Payload() createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.cursoAlunoService.create(createCursoAlunoDto);
  }

  @MessagePattern('findAllByAluno')
  findAllByAluno(@Payload() codigo: uuid) {
    return this.cursoAlunoService.findAllByAluno(codigo);
  }

  @MessagePattern('findAllByCurso')
  findAllByCurso(@Payload() codigo: uuid) {
    return this.cursoAlunoService.findAllByCurso(codigo);
  }

  @MessagePattern('findOneCursoAluno')
  findOne(@Payload() codigo: uuid) {
    return this.cursoAlunoService.findOne(codigo);
  }

  @MessagePattern('updateCursoAluno')
  update(@Payload() updateCursoAlunoDto: UpdateCursoAlunoDto) {
    return this.cursoAlunoService.update(updateCursoAlunoDto.codigo, updateCursoAlunoDto);
  }

  @MessagePattern('removeCursoAluno')
  remove(@Payload() codigo: uuid) {
    return this.cursoAlunoService.remove(codigo);
  }
}
