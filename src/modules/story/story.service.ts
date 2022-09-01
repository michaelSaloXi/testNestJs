import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import News from 'src/entities/news.entity';
import { StoryUpdateDto } from './dto/update.dto';
import Category from 'src/entities/category.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export default class StoryService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(storyId: number) {
    return await this.newsRepository.findOne({
      where: { id: storyId },
      relations: ['categories'],
    });
  }

  async update(id: number, data: StoryUpdateDto) {
    let categories = [];
    if (data.categories.length) {
      categories = await this.categoryRepository.find({
        where: { id: In(data.categories) },
      });
    }
    await this.newsRepository.update(id, {...data, categories});
    const updatedStory = await this.newsRepository.findOne({
      where: { id },
    });
    if (updatedStory) {
      return updatedStory;
    }
    throw new HttpException('Story not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deleteResponse = await this.newsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Story not found', HttpStatus.NOT_FOUND);
    }
  }
}
