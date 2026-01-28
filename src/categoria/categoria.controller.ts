import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('/categoria')
export class CategoriaController {

  constructor(private categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.categoriaService.findById(id);
  }

  @Post()
  create(@Body() categoria: any) {
    return this.categoriaService.create(categoria);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() categoria: any) {
    return this.categoriaService.update(id, categoria);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.categoriaService.delete(id);
  }
}
