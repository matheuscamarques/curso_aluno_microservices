import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.cursoAlunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoAlunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoAlunoDto: UpdateCursoAlunoDto) {
    return this.cursoAlunoService.update(+id, updateCursoAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoAlunoService.remove(+id);
  }
}
