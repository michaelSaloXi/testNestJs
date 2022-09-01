import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateNewsDto } from './dto/create.dto';
import { UpdateNewsDto } from './dto/update.dto';
import News from 'src/entities/news.entity';
import Category from 'src/entities/category.entity';
import { PaginationQueryDto } from './dto/pagination.dto';

export default class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async getAll({ page = 1, limit = 10 }: PaginationQueryDto) {
    console.log(page, limit);

    return await this.newsRepository.find({
      relations: ['categories'],
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async create(data: CreateNewsDto): Promise<News> {
    const categories = await this.categoryRepo.find({
      where: {
        id: In(data.categories),
      },
    });
    const news = new News();
    news.imageUrl = data.imageUrl;
    news.categories = categories;
    news.likes = data.likes;
    news.short_description = data.short_description;
    news.title = data.title;
    const createdNews = await this.newsRepository.save(news);
    return createdNews;
  }

  async update(id: number, data: UpdateNewsDto) {
    await this.newsRepository.update(id, data);
    const updatedNews = await this.newsRepository.findOne({
      where: { id },
    });
    if (updatedNews) {
      return updatedNews;
    }
    throw new HttpException('News not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deleteResponse = await this.newsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
  }
}
