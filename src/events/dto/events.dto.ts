export class GetEventsDto {
  readonly name: string;
  readonly categoryId: string;
  readonly planetId: string;
}

export class CreateEventDto {
  readonly title: string;
  readonly description: string;
  readonly date: Date;
  readonly coordinatesLat: number;
  readonly coordinatesLon: number;
  readonly categoryUuid: string;
  readonly planetUuid: string;
}
