import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository, DeleteResult } from "typeorm";
import { Produtos } from "../entities/produtos.entity"; 
import { HttpException, HttpStatus } from "@nestjs/common";
import { CategoriaService } from "../../Categoria/service/categoria.service";


@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produtos)
    private produtoRepository: Repository<Produtos>, 
    private categoriaService: CategoriaService
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true
      }
    });
  }

  async findById(id: number): Promise<Produtos> {
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

 async findAllByNome(nome: string): Promise<Produtos[]> {
        return await this.produtoRepository.find({
            where:{ nome: ILike(`%${nome}%`) },
            relations:{ categoria: true } 
        });
    }

    async create(produto: Produtos): Promise<Produtos> {
        if (produto.categoria){
            const categoria = await this.categoriaService.findById(produto.categoria.id)

            if (!categoria){
           
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
            }
        }
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produtos): Promise<Produtos> {
        const buscaProduto: Produtos = await this.findById(produto.id);

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