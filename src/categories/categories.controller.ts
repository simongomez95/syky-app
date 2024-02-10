import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get()
  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoriesService.findAll();
  }
}
