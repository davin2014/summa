import { Test, TestingModule } from '@nestjs/testing';
import { RouteTripsService } from './route-trips.service';

describe('RouteTripsService', () => {
  let service: RouteTripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteTripsService],
    }).compile();

    service = module.get<RouteTripsService>(RouteTripsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
