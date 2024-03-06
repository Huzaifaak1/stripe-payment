import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create() {
    const items = [
      {
        id: 1,
        name: 'Product 1',
        desc: 'Description of Product 1',
        price: '10.99',
      },
      {
        id: 2,
        name: 'Product 2',
        desc: null,
        price: '19.99',
      },
      {
        id: 3,
        name: 'Product 3',
        desc: 'Description of Product 3',
        price: '25.50',
      },
    ];
    for(let item of items){
      const pushData = await this.prisma.product.create({
        data:{
          ...item
        }
      })
    }
    return "Items added!";
  }

  findAll() {
    return this.prisma.product.findMany({}) ;
  }
}
