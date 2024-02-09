import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { PlanetEntity } from './planet.entity';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column('decimal', { scale: 6, precision: 9 })
  coordinatesLat: number;

  @Column('decimal', { scale: 6, precision: 9 })
  coordinatesLon: number;

  @ManyToOne(() => PlanetEntity, (planet) => planet.events, { nullable: false })
  planet: PlanetEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.events, {
    nullable: false,
  })
  category: CategoryEntity;
}
