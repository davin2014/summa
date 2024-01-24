import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTripsTableComponent } from './route-trips-table.component';

describe('RouteTripsTableComponent', () => {
  let component: RouteTripsTableComponent;
  let fixture: ComponentFixture<RouteTripsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteTripsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteTripsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
