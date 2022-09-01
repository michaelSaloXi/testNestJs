import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CategoryNewsView from './category-news.entity';
import News from './news.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => CategoryNewsView, (categoryToNews) => categoryToNews.category)
  public news!: News[];
}

export default Category;
