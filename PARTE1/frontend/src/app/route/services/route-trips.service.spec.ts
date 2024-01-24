import { TestBed } from '@angular/core/testing';

import { RouteTripsService } from './route-trips.service';

describe('RouteTripsService', () => {
  let service: RouteTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
