import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';

import { HeaderComponent } from '../../header/header.component';
import { RouteTripsFormComponent } from '../route-trips-form/route-trips-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouteTripsService } from '../services/route-trips.service';
import { MatIconModule } from '@angular/material/icon';
import { RouteTrips } from '../interface/route-trips.interface';
import { DataGlobalService } from '../../services/data-global.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-route-trips-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    RouteTripsFormComponent,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    HeaderComponent
  ],
  templateUrl: './route-trips-table.component.html',
  styleUrl: './route-trips-table.component.scss'
})
export class RouteTripsTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fecha', 'horadesalida', 'tipodevehiculo', 'cuposdisponibles', 'lugardedestino', 'lugardeorigen', 'actions'];
  dataSource = new MatTableDataSource<RouteTrips>([]);

  constructor(public dialog: MatDialog,
    public dataGlobalService: DataGlobalService,
    public routeTripsService:RouteTripsService,
   ) {
        this.getDataSource();
    }

  addRoute(){
    this.dialog.open(RouteTripsFormComponent, {
      width: '400px', // Ancho del diálogo
      height: '720px', // Altura del diálogo
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDataSource(){
    this.routeTripsService.getAllTrips().subscribe((trips:RouteTrips[]) => {
      let currentDate = new Date();
      trips = trips.filter(trip => new Date(trip.fecha) >= currentDate);
      trips.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      this.dataSource = new MatTableDataSource(trips);
    });
  }

  editRoute(route: RouteTrips){
    const dialogRef = this.dialog.open(RouteTripsFormComponent, {
      width: '400px', // Ancho del diálogo
      height: '720px', // Altura del diálogo
      data: route
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.getDataSource();
      this.dataGlobalService.setData([]);
      
    });
  }

  onSubmitEM(data: any) { 
    this.dialog.closeAll(); 
    console.log(data);
  }

  deleteRoute(route: RouteTrips){
    this.routeTripsService.delete(route.id).subscribe((response) => {
      console.log(response);
      this.getDataSource();
    });
  }

  ngOnInit() {
    this.dataGlobalService.data$.subscribe((posts:RouteTrips[]) => {
      this.getDataSource();
    });
  }
}
