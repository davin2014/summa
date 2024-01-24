import { Test, TestingModule } from '@nestjs/testing';
import { RouteTripsController } from './route-trips.controller';

describe('RouteTripsController', () => {
  let controller: RouteTripsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteTripsController],
    }).compile();

    controller = module.get<RouteTripsController>(RouteTripsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
