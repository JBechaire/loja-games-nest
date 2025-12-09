import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produtos.service";

@Controller("/produto")
export class ProdutoController {  
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.produtoService.findAll();
  }
  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number) {
    return this.produtoService.findById(id);
  }   
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: any) {
    return this.produtoService.create(produto);
  }   
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: any) {      
    return this.produtoService.update(produto);
  }     
  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  } 
} 

 