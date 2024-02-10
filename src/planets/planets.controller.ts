import { Controller, Get } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async findAll() {
    return await this.planetsService.findAll();
  }
}
