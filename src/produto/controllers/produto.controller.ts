import { Controller, Delete, Get, HttpCode, Post, Put } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes/parse-int.pipe";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service"; 


@Controller()
export class ProdutoController { }
constructor(private readonly produtoService: ProdutoService) { }

@Get()
@HttpCode(HttpCode.OK)
findAll(): Promise<Produto[]>
{
    return this.produtoService.findAll();
}

@Get('/:id')
@HttpCode(HttpCode.OK)
findById(@Param('id') id: number): Promise<Produto>
{
    return this.produtoService.findById(id);
}

@Post()
@ControllerHttpCode(HttpCode.CREATED)
create(@Body() produto: Produto): Promise<Produto>
{
    return this.produtoService.create(produto);
}

@Put()
@HttpCode(HttpCode.OK)
update(@Body() produto: Produto): Promise<Produto>
{
    return this.produtoService.update(produto);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
async delete (@Param('id', ParseIntPipe) id: number) {
    await this.produtoService.delete(id);
} 