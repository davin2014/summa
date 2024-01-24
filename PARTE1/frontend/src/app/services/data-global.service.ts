import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteTrips } from '../route/interface/route-trips.interface';
import { RouteTripsService } from '../route/services/route-trips.service';

@Injectable({
  providedIn: 'root'
})
export class DataGlobalService {

  private data = new BehaviorSubject<RouteTrips[]>([]);
  data$ = this.data.asObservable();

  constructor(
    public routeTripsService:RouteTripsService,
   ) {}

  setData(posts: RouteTrips[]) {
    this.data.next(posts);
  }

  getData() {
    this.routeTripsService.getAllTrips().subscribe((posts:RouteTrips[]) => {
      this.setData(posts);
    });
    
  }


}
