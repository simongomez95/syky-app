import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventEntity } from '../../events/entities/event.entity';

@Entity('planets')
export class PlanetEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => EventEntity, (event) => event.planet)
  events: Event[];
}
