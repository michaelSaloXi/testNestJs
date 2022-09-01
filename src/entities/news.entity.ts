import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CategoryNewsView from './category-news.entity';
import Category from './category.entity';

@Entity()
class News {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public imageUrl: string;
  @Column()
  public title: string;
  @Column()
  public short_description: string;
  @Column()
  public likes: number;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @OneToMany(() => CategoryNewsView, (categoryToNews) => categoryToNews.news)
  public categories!: Category[];
}

export default News;
