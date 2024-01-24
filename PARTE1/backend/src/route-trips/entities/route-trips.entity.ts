import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ruta')
export class RouteTrip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    fecha: Date;

    @Column({ type: 'varchar', length: 255 })
    tipodevehiculo: string;

    @Column({ type: 'varchar', length: 8 })
    horadesalida: string;

    @Column({ type: 'int' })
    cuposdisponibles: number;

    @Column({ type: 'varchar', length: 255 })
    lugardeorigen: string;

    @Column({ type: 'varchar', length: 255 })
    lugardedestino: string;
}