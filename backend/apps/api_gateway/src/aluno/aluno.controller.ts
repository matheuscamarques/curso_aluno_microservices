import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { uuid } from './entities/aluno.entity';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') codigo: string) {
    return this.alunoService.findOne(codigo);
  }

  @Put(':id')
  update(@Param('id') codigo: uuid, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunoService.update(codigo, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') codigo: uuid) {
    return this.alunoService.remove(codigo);
  }
}
