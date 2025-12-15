import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Column,Entity,ManyToOne,PrimaryGeneratedColumn,UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({name: 'tb_produtos'})
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({length: 100, nullable: false})
  nome: string;

  @IsNotEmpty()
  @Column({length: 1000, nullable: false})
  descricao: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Column({type: 'decimal', precision: 10, scale: 2})
  preco: number;

  @Column({length: 5000, nullable: true})
  foto: string;

  @UpdateDateColumn()
  data: Date;


  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}