import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { uuid } from './entities/aluno.entity';

@Controller()
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @MessagePattern('createAluno')
  create(@Payload() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @MessagePattern('findAllAluno')
  findAll() {
    console.log("received")
    return this.alunoService.findAll();
  }

  @MessagePattern('findOneAluno')
  findOne(@Payload() codigo: uuid) {
    return this.alunoService.findOne(codigo);
  }

  @MessagePattern('updateAluno')
  update(@Payload() updateAlunoDto: UpdateAlunoDto) {
    return this.alunoService.update(updateAlunoDto.codigo, updateAlunoDto);
  }

  @MessagePattern('removeAluno')
  remove(@Payload() codigo: uuid) {
    return this.alunoService.remove(codigo);
  }
}
