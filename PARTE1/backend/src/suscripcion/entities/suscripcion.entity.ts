import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('suscripcion')
export class Suscripcion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    usuarioid: number;

    @Column({ type: 'int' })
    rutaid: number;
}