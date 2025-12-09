import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../Categoria/entities/categoria.entity";

@Entity("produtos")
export class Produtos {
    
@PrimaryGeneratedColumn()
id: number;

@IsNotEmpty()
@Column({ length: 100,nullable: false })
nome: string;


@IsNotEmpty()
@Column("decimal", { precision: 10, scale: 2, nullable: false })
preco: number;  

@IsNotEmpty()
@Column({ length: 500, nullable: false })
descricao: string;


@ManyToOne(() => Categoria, (categoria) => categoria.produto)
categoria: Categoria;


}   
