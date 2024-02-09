import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEntity } from '../entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './events.dto';
import { CategoryEntity } from '../entities/category.entity';
import { PlanetEntity } from '../entities/planet.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>,

    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,

    @InjectRepository(PlanetEntity)
    private planetsRepository: Repository<PlanetEntity>,
  ) {}
  async getEvents(
    categoryId?: string,
    planetId?: string,
  ): Promise<EventEntity[]> {
    const events = await this.eventsRepository.find({
      relations: ['category', 'planet'],
      where: {
        category: {
          uuid: categoryId ? categoryId : undefined,
        },
        planet: {
          uuid: planetId ? planetId : undefined,
        },
      },
    });
    return events;
  }

  async createEvent(createEventDto: CreateEventDto): Promise<EventEntity> {
    const planet = await this.planetsRepository.findOne({
      where: {
        uuid: createEventDto.planetUuid,
      },
    });

    if (!planet) {
      throw new NotFoundException('Planet not found');
    }

    const category = await this.categoriesRepository.findOne({
      where: {
        uuid: createEventDto.categoryUuid,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const event = this.eventsRepository.create({
      ...createEventDto,
      category: category,
      planet: planet,
    });
    return await this.eventsRepository.save(event);
  }

  async updateEvent(
    eventUuid: string,
    createEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    const planet = await this.planetsRepository.findOne({
      where: {
        uuid: createEventDto.planetUuid,
      },
    });

    if (!planet) {
      throw new NotFoundException('Planet not found');
    }

    const category = await this.categoriesRepository.findOne({
      where: {
        uuid: createEventDto.categoryUuid,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const event = await this.eventsRepository.findOne({
      where: {
        uuid: eventUuid,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    await this.eventsRepository.update(event.uuid, {
      title: createEventDto.title,
      description: createEventDto.description,
      date: createEventDto.date,
      coordinatesLat: createEventDto.coordinatesLat,
      coordinatesLon: createEventDto.coordinatesLon,
      category: category,
      planet: planet,
    });

    return await this.eventsRepository.findOne({ where: { uuid: eventUuid } });
  }
}
