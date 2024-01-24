import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouteTrips } from '../interface/route-trips.interface';

@Injectable({
  providedIn: 'root'
})
export class RouteTripsService {

  constructor(private http: HttpClient) { }

  getAllTrips() {
    return this.http.get<RouteTrips[]>(`${environment.url_api}/route-trips`);
  }

  getRouteTrip(id: number) {
    return this.http.get<RouteTrips>(`${environment.url_api}/route-trips/${id}`);
  }

  create(payload: any) { // replace 'any' with the type of your payload
    return this.http.post(`${environment.url_api}/route-trips`, payload);
  }

  update(id: number, payload: any) { // replace 'any' with the type of your payload
    return this.http.put(`${environment.url_api}/route-trips/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`${environment.url_api}/route-trips/${id}`);
  }


}
