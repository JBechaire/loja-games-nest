import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./entities/produtos.entity";
import { CategoriaModule } from "../Categoria/categoria.module";
import { ProdutoService } from "./service/produtos.service";
import { CategoriaService } from "../Categoria/service/categoria.service";
import { CategoriaController } from "../Categoria/controllers/categoria.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Produtos]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule],
})
export class ProdutoModule{}