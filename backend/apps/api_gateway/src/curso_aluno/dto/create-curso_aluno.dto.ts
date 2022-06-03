import { ApiProperty } from "@nestjs/swagger";
import { uuid } from "src/aluno/entities/aluno.entity";

export class CreateCursoAlunoDto {
    @ApiProperty({
        description: "Código do Curso",
        required: true,
    })
    codigo_aluno: uuid;
    @ApiProperty({
        description: "Código do Curso",
        required: true
    })
    codigo_curso: uuid;
}
