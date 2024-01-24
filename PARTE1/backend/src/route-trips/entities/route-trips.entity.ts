import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ruta')
export class RouteTrip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    fecha: Date;

    @Column({ type: 'varchar', length: 255 })
    tipoDeVehiculo: string;

    @Column({ type: 'time' })
    horaDeSalida: Date;

    @Column({ type: 'int' })
    cuposDisponibles: number;

    @Column({ type: 'varchar', length: 255 })
    lugarDeOrigen: string;

    @Column({ type: 'varchar', length: 255 })
    lugarDeDestino: string;
}