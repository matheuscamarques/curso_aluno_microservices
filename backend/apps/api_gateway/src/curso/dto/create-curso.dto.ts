import { ApiProperty } from "@nestjs/swagger";

export class CreateCursoDto {
    @ApiProperty({
        description: "Descrição do curso",
        example: "Curso de Desenvolvimento de Software",
        required: true,
        maxLength: 50
    })
    descricao : string;


    @ApiProperty(
        {
            description: "Emenda do curso",
            example: "Emenda do curso de Desenvolvimento de Software",
            required: true
        }
    )
    emenda : string;
}
