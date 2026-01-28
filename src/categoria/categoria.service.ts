import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriaService {

  findAll(): string {
    return 'Retorna todas as categorias';
  }

  findById(id: number): string {
    return `Retorna a categoria de id ${id}`;
  }

  create(categoria: any): string {
    return 'Categoria criada com sucesso';
  }

  update(id: number, categoria: any): string {
    return `Categoria ${id} atualizada com sucesso`;
  }

  delete(id: number): string {
    return `Categoria ${id} removida com sucesso`;
  }
}
