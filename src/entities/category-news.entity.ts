import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from './category.entity';
import News from './news.entity';

@Entity()
class CategoryNewsView {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public newsId!: number

    @Column()
    public categoryId!: number

    @ManyToOne(() => News, (news) => news.categories)
    public news!: News

    @ManyToOne(() => Category, (category) => category.news)
    public category!: Category
}
export default CategoryNewsView;
