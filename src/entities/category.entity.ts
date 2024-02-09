import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventEntity } from './event.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => EventEntity, (event) => event.category)
  events: Event[];
}
