import { IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  
  public imageUrl: string;
  
  public title: string;

  public short_description: string;
  
  public likes: number;

  public categories: number[];
}
