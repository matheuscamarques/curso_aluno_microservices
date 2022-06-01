import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { uuid } from './entities/curso.entity';

@Controller()
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @MessagePattern('createCurso')
  create(@Payload() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @MessagePattern('findAllCurso')
  findAll() {
    return this.cursoService.findAll();
  }

  @MessagePattern('findOneCurso')
  findOne(@Payload() codigo: uuid) {
    return this.cursoService.findOne(codigo);
  }

  @MessagePattern('updateCurso')
  update(@Payload() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(updateCursoDto.codigo, updateCursoDto);
  }

  @MessagePattern('removeCurso')
  remove(@Payload() codigo: uuid) {
    return this.cursoService.remove(codigo);
  }
}
