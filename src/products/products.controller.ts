import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create() {
    return this.productsService.create();
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

}
