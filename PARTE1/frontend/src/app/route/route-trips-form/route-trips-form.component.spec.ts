import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTripsFormComponent } from './route-trips-form.component';

describe('RouteTripsFormComponent', () => {
  let component: RouteTripsFormComponent;
  let fixture: ComponentFixture<RouteTripsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteTripsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteTripsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
