import { IsNotEmpty } from 'class-validator';

export class StoryUpdateDto {
  imageUrl: string;
  title: string;
  short_description: string;
  likes: number;
  categories: number[];
}