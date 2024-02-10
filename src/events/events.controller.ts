import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventEntity } from './entities/event.entity';
import { CreateEventDto } from './dto/events.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async getEvents(
    @Query('categoryId') categoryId: string,
    @Query('planetId') planetId: string,
  ) {
    return await this.eventsService.getEvents(categoryId, planetId);
  }

  @Get(':eventUuid')
  async getEvent(@Param('eventUuid') eventUuid: string): Promise<EventEntity> {
    return await this.eventsService.getEvent(eventUuid);
  }

  @Post()
  async createEvent(
    @Body() createEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    return await this.eventsService.createEvent(createEventDto);
  }

  @Put(':eventUuid')
  async updateEvent(
    @Param('eventUuid') eventUuid: string,
    @Body() createEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    return await this.eventsService.updateEvent(eventUuid, createEventDto);
  }
}
