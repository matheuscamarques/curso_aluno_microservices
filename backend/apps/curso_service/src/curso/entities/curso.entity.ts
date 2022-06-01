import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type uuid = string;

@Entity()
export class Curso {
    @PrimaryGeneratedColumn("uuid")
    codigo: uuid;
    @Column({
        length: 50
    })
    descricao : string

    @Column({
        type: "text",
    })
    emenda : string
}
