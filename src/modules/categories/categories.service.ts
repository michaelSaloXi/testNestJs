import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriesDto } from './dto/create.dto';
import { UpdateCategoriesDto } from './dto/update.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import Category from 'src/entities/category.entity';

export default class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAll() {
    return this.categoryRepository.find();
  }

  async create(data: CreateCategoriesDto) {
    const newCategory = await this.categoryRepository.create(data);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async update(id: number, post: UpdateCategoriesDto) {
    await this.categoryRepository.update(id, post);
    const updatedCategory = await this.categoryRepository.findOne({
      where: { id },
    });
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deleteResponse = await this.categoryRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
