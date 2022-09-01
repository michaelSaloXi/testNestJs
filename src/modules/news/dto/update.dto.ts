import { IsNotEmpty } from 'class-validator';

export class UpdateNewsDto {
  imageUrl: string;
  title: string;
  short_description: string;
  likes: number;
}
