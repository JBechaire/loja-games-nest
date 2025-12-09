import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produtos } from "../../Produto/entities/produtos.entity";


@Entity({name: "tb_categorias"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    tipo_produto: string 

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao: string

    @OneToMany(() => Produtos, (produto) => produto.categoria)
    produto: Produtos[]

    
}