import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanetEntity } from './entities/planet.entity';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(PlanetEntity)
    private planetsRepository: Repository<PlanetEntity>,
  ) {}
  async findAll(): Promise<PlanetEntity[]> {
    const planets = await this.planetsRepository.find();
    return planets;
  }
}
