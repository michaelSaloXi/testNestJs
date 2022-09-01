import { IsNotEmpty } from 'class-validator';
import News from 'src/entities/news.entity';

export class CreateCategoriesDto {
  @IsNotEmpty()
  name: string;
}
