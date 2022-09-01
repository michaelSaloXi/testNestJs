import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from 'src/entities/category.entity';
import News from 'src/entities/news.entity';
import StoryController from './story.controller';
import StoryService from './story.service';


@Module({
  imports: [TypeOrmModule.forFeature([News, Category])],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
