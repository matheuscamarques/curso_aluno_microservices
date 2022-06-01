import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { uuid } from 'src/aluno/entities/aluno.entity';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') codigo: uuid) {
    return this.cursoService.findOne(codigo);
  }

  @Put(':id')
  update(@Param('id') codigo: uuid, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(codigo, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') codigo: uuid) {
    return this.cursoService.remove(codigo);
  }
}
