import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from '../entities/event.entity';
import { CategoryEntity } from '../entities/category.entity';
import { PlanetEntity } from '../entities/planet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, CategoryEntity, PlanetEntity]),
  ],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [EventsService, TypeOrmModule],
})
export class EventsModule {}
