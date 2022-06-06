import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { uuid } from 'src/aluno/entities/aluno.entity';
import { CursoAlunoService } from './curso_aluno.service';
import { CreateCursoAlunoDto } from './dto/create-curso_aluno.dto';
import { UpdateCursoAlunoDto } from './dto/update-curso_aluno.dto';

@Controller('curso-aluno')
export class CursoAlunoController {
  constructor(private readonly cursoAlunoService: CursoAlunoService) {}

  @Post()
  create(@Body() createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.cursoAlunoService.create(createCursoAlunoDto);
  }

  @Get('/list-by-aluno/:id')
  findAllCursoAlunoByAluno(@Param('id') codigo: uuid) {
    return this.cursoAlunoService.findAllByAluno(codigo);
  }

  @Get('/list-by-curso/:id')
  findAllCursoAlunoByCurso(@Param('id') codigo: uuid) {
    return this.cursoAlunoService.findAllByCurso(codigo);
  }

  @Delete()
  remove(@Body() createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.cursoAlunoService.remove(createCursoAlunoDto);
  }
}
