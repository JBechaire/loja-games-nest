import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './Produto/entities/produtos.entity';
import { Categoria } from './Categoria/entities/categoria.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'loja_games',
      entities: [Produtos,Categoria],
      synchronize: true,
    }), 
    Produtos,
    Categoria,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}