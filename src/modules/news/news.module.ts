import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from '../../entities/category.entity';
import News from 'src/entities/news.entity';
import NewsController from './news.controller';
import NewsService from './news.service';

@Module({
  imports: [TypeOrmModule.forFeature([News, Category])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
