import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './events/entities/event.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from './categories/entities/category.entity';
import { PlanetEntity } from './planets/entities/planet.entity';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>,

    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,

    @InjectRepository(PlanetEntity)
    private planetRepository: Repository<PlanetEntity>,
  ) {}
  async onApplicationBootstrap() {
    // Seed the database with some initial data
    try {
      const categories = [
        this.categoryRepository.create({
          name: 'Holographic Concert',
        }),
        this.categoryRepository.create({
          name: 'Virtual Runway',
        }),
      ];

      const planets = [
        this.planetRepository.create({
          name: 'Earth',
        }),
        this.planetRepository.create({
          name: 'Mars',
        }),
      ];

      await this.categoryRepository.save(categories);
      await this.planetRepository.save(planets);

      const events = [
        this.eventsRepository.create({
          title: 'Christmas Holographic Concert on Earth',
          description: 'A jolly concert on Earth',
          category: categories[0],
          planet: planets[0],
          date: new Date('2040-12-24'),
          coordinatesLat: 47.751076,
          coordinatesLon: -120.740135,
        }),
        this.eventsRepository.create({
          title: 'Halloween Virtual Runway on Mars',
          description: 'A spooky VR runway on Mars',
          category: categories[1],
          planet: planets[1],
          date: new Date('2040-10-31'),
          coordinatesLat: 40.7128,
          coordinatesLon: -74.006,
        }),
      ];

      await this.eventsRepository.save(events);
    } catch (QueryFailedError) {
      console.log('Database already seeded.');
    }
  }
}
