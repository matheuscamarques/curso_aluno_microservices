import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type uuid = string;

@Entity()
export class CursoAluno {
    @PrimaryGeneratedColumn("uuid")
    codigo: uuid;
    @Column({
        type: "uuid",
    })
    codigo_aluno: uuid;
    @Column({
        type: "uuid",
    })
    codigo_curso: uuid;

    //
}
