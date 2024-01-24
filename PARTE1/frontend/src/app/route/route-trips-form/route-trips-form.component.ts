import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouteTrips } from '../interface/route-trips.interface';
import { RouteTripsService } from '../services/route-trips.service';
import { DataGlobalService } from '../../services/data-global.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-route-trips-form',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    JsonPipe
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './route-trips-form.component.html',
  styleUrl: './route-trips-form.component.scss'
})
export class RouteTripsFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  minDate = new Date();
  @Output() submitEM = new EventEmitter<any>();
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  hours: string[] = [];
  vehicleTypes: string[] = ['Coupe', 'Hatchback', 'Sedán', 'Bus', 'Buseta', 'Camión', 'Camioneta', 'Campero'];
  neighborhoods: string[] = [ 
    "Aguas Frías", 
    "Aldea Pablo VI", 
    "Alejandría", 
    "Alejandro Echavarría", 
    "Alfonso López", 
    "Altamira", 
    "Altavista", 
    "Altos del Poblado", 
    "Andalucía", 
    "Antonio Nariño", 
    "Aranjuez", 
    "Aranjuez, división barrial.",
    "Asomadera N.º 1", 
    "Asomadera N.º 2", 
    "Asomadera N.º 3", 
    "Astorga", "Aures N.º 1", 
    "Aures N.º 2", 
    "Barrio Colombia", 
    "Barrio Colón", 
    "Barrio Cristóbal", 
    "Barrio Facultad de Minas", 
    "Barrios de Jesús", 
    "Batallón Girardot", 
    "Belalcázar", 
    "Belén", 
    "Belén, división barrial.", 
    "Belencito", 
    "Bello Horizonte", 
    "Berlín", 
    "Bermejal - Los Álamos", 
    "Betania", "Blanquizal", 
    "Bolivariana", 
    "Bomboná N.º 1", 
    "Bomboná N.º 2", 
    "Bosques de San Pablo", 
    "Boston", "Boyacá", 
    "Brasilia", "Buenos Aires", 
    "Buenos Aires, división barrial.", 
    "Caicedo", 
    "Calasania", 
    "Calasanz", 
    "Calasanz Parte Alta", "Calle Nueva", "Campo Alegre", "Campo Amor", "Campo Valdés N.º 1", "Campo Valdés N.º 2", "Caribe", "Carlos E. Restrepo", "Carpinelo", "Castilla", "Castilla, división barrial.", "Castropol", "Cataluña", "Cerro Nutibara", "Corazón de Jesús - Barrio Triste", "Córdoba", "Cristo Rey", "Cuarta Brigada", "Cucaracho", "Diego Echavarria", "Doce de Octubre N.º 1", "Doce de Octubre N.º 2", "Doce de Octubre, división barrial.", "Eduardo Santos", "El Castillo", "El Chagualo", "El Compromiso", "El Corazón", "El Danubio", "El Diamante", "El Diamante", "El Nogal - Los Almendros", "El Pesebre", "El Pinal", "El Playón de Los Comuneros", "El Poblado", "El Poblado, división barrial.", "El Pomar", "El Progreso", "El Progreso N.º 2", "El Raizal", "El Rincón", "El Salado", "El Salvador", "El Socorro", "El Tesoro", "El Triunfo", "El Velódromo", "El Volador", "Enciso", "Esfuerzos de Paz N.º 1", "Esfuerzos de Paz N.º 2", "Estación Villa", "Estadio", "Fátima", "Ferrini", "Florencia", "Florida Nueva", "Francisco Antonio Zea", "Fuente Clara", "Gerona", "Girardot", "Golondrinas", "Granada", "Granizal", "Guayabal", "Guayabal, división barrial.", "Guayaquil", "Héctor Abad Gómez", "Jesús Nazareno", "Juan Pablo II", "Juan XXIII", "Kennedy", "La Aguacatala", "La América", "La América, división barrial.", "La Aurora", "La Avanzada", "La Campiña", "La Candelaria", "La Candelaria, división barrial.", "La Castellana", "La Colina", "La Cruz", "La Cuchilla", "La Divisa", "La Esperanza", "La Esperanza N.º 2", "La Floresta", "La Florida", "La Francia", "La Frontera", "La Gloria", "La Honda", "La Hondonada", "La Isla", "La Ladera", "La Libertad", "La Loma de Los Bernal", "La Mansión", "La Milagrosa", "La Mota", "La Palma", "La Pilarica", "La Piñuela", "La Pradera", "La Rosa", "La Salle", "La Sierra", "Lalinde", "Las Acacias", "Las Brisas", "Las Esmeraldas", "Las Estancias", "Las Granjas", "Las Independencias", "Las Lomas N.º 1", "Las Lomas N.º 2", "Las Mercedes", "Las Palmas", "Las Playas", "Las Violetas", "Laureles", "Laureles - Estadio, división barrial.", "Llanaditas", "López de Mesa", "Lorena", "Loreto", "Los Alcázares", "Los Alpes", "Los Ángeles", "Los Balsos N.º 1", "Los Balsos N.º 2", "Los Cerros - El Vergel", "Los Colores", "Los Conquistadores", "Los Mangos", "Los Naranjos", "Los Pinos", "Manila", "Manrique Central N.º 1", "Manrique Central N.º 2", "Manrique Oriental", "Manrique, división barrial.", "Maria Cano - Carambola", "Metropolitano", "Mirador del Doce", "Miraflores", "Miranda", "Miravalle", "Monteclaro", "Moravia", "Moscú N.º 1", "Moscú N.º 2", "Naranjal", "Nueva Villa de Aburrá", "Nuevos Conquistadores", "Ocho de Marzo", "Olaya Herrera", "Oriente", "Pablo VI", "Pajarito", "Palenque", "Palermo", "Patio Bonito", "Pedregal", "Peñitas", "Perpetuo Socorro", "Picachito", "Picacho", "Popular N.º 1", "Popular N.º 2", "Popular, división barrial.", "Prado", "Quinta Linda", "Robledo", "Robledo, división barrial.", "Rodeo Alto", "Rosales", "San Antonio", "San Benito", "San Bernardo", "San Diego", "San Germán", "San Isidro", "San Javier N.º 1", "San Javier N.º 2", "San Javier, división barrial.", "San Joaquín", "San José La Cima N.º 1", "San José La Cima N.º 2", "San Lucas", "San Martín de Porres", "San Miguel", "San Pablo", "San Pedro", "Santa Cruz", "Santa Cruz, división barrial.", "Santa Fe", "Santa Inés", "Santa Lucía", "Santa Margarita", "Santa María de Los Ángeles", "Santa Mónica", "Santa Rosa de Lima", "Santa Teresita", "Santander", "Santo Domingo Savio N.º 1", "Santo Domingo Savio N.º 2", "Sevilla", "Simón Bolívar", "Sucre", "Suramericana", "Tejelo", "Tenche", "Toscana", "Trece de Noviembre", "Tricentenario", "Trinidad", "Veinte de Julio", "Versalles N.º 1", "Versalles N.º 2", "Villa Carlota", "Villa de La Iguaná", "Villa del Socorro", "Villa Flora", "Villa Guadalupe", "Villa Hermosa", "Villa Hermosa, división barrial.", "Villa Lilliam", "Villa Niza", "Villa Nueva", "Villa Turbay", "Villatina", "Zafra"];


  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RouteTripsFormComponent>,
    public dataGlobalService: DataGlobalService,
    public routeTripsService:RouteTripsService,
    @Inject(MAT_DIALOG_DATA) public data: RouteTrips
    ) {
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.setHours();
    this.buildForm();
    this.form.patchValue(data);
    this.matcher = new MyErrorStateMatcher();
   }

  buildForm() {
    this.form = this.fb.group({
      id: [0],
      fecha: ['', Validators.required],
      tipodevehiculo: ['', Validators.required],
      horadesalida: ['', Validators.required],
      cuposdisponibles: [0, [Validators.required, Validators.min(1)]],
      lugardeorigen: ['', Validators.required],
      lugardedestino: ['', Validators.required]
    }, { validators: this.originDestinationValidator });

    
  }

  submit() {
    if (this.form.valid) {
      if(this.form.value.id == 0){
        this.routeTripsService.create(this.form.value).subscribe((response) => {
          console.log(response);
          this.dataGlobalService.setData(this.form.value);
          this.dialogRef.close(this.form.value);
          
        });
      }else{
      this.routeTripsService.update(this.form.value.id, this.form.value).subscribe((response) => {
        console.log(response);
        this.dataGlobalService.setData(this.form.value);
        this.dialogRef.close(this.form.value);

        
      });
    }
      
      
    }
  }

  setHours() {
    this.hours = [];
    for (let i = 0; i < 24; i++) {
      this.hours.push(i < 10 ? `0${i}:00` : `${i}:00`);
    }
  }

  ngOnInit() {
    
  }

  filter(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const filterValue = value.toLowerCase();
  
    this.filteredOptions = of(
      this.neighborhoods
        .filter(option => option.toLowerCase().includes(filterValue))
        .map(option => option.toString()).slice(0, 10) // Asegúrate de que cada opción es una cadena de texto
    );
  }

   originDestinationValidator(control: AbstractControl): ValidationErrors | null {
    const origin = control.get('origin');
    const destination = control.get('destination');
  
    if (origin && destination && origin.value === destination.value && origin.value !== '' && destination.value !== '') {
      return { 'originDestination': true };
    }
  
    return null;
  }
}
