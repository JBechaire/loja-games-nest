import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./service/produtos.service";
import { CategoriaService } from "../Categoria/services/categoria.service";
import { ProdutoController } from "./controllers/produtos.controller";
import { Produto } from "./entities/produtos.entity";
import { CategoriaModule } from "../Categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule ],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
})
export class ProdutoModule{}