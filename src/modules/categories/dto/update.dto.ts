import { IsNotEmpty } from 'class-validator';

export class UpdateCategoriesDto {
  @IsNotEmpty()
  name: string;
}
