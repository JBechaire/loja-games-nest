import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository, DeleteResult } from "typeorm";
import { Produto } from "../entities/produtos.entity";
import { HttpException, HttpStatus } from "@nestjs/common";
import { CategoriaService } from "../../categoria/service/categoria.service";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>, 
    private categoriaService: CategoriaService
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true
      }
    });
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true
      }
    });

    if (!produto)
      throw new HttpException("Produto não encontrado!", HttpStatus.NOT_FOUND);

    return produto;
  }

 async findAllByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where:{ nome: ILike(`%${nome}%`) },
            relations:{ categoria: true } 
        });
    }

    async create(produto: Produto): Promise<Produto> {
        if (produto.categoria){
            const categoria = await this.categoriaService.findById(produto.categoria.id)

            if (!categoria){
           
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
            }
        }
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        const buscaProduto: Produto = await this.findById(produto.id);

        if (!buscaProduto || !produto.id) {
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
        }

        if (produto.categoria){// vendedor de q? tenis?
            //então me ve o de tal marca...
            const categoria = await this.categoriaService.findById(produto.categoria.id)

            if (!categoria){
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
            }
        }
        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        const buscaProduto = await this.findById(id);

        // Se a postagem NÃO existir, mostre uma Exceção com o status: 404 Not Found
        if (!buscaProduto)
            throw new HttpException('Produto não encontrada!', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.delete(id);
    }

}