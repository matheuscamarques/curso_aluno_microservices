import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({
        description: "Nome do aluno",
        example: "Bruno Monfred",
        required: true,
        maxLength: 50
    })
    nome: string;
}
