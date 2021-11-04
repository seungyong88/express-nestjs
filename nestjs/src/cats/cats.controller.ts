import { CatsService } from './cats.service';
import { Controller, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats/
  @Get()
  getAllCat(){
    return 'all cat';
  }

  //cats/:id
  @Get(':id')
  getOneCat(){
    return 'one cat';
  }

  @Post(':id')
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }
}
