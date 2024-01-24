import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    nombre: string;
  
    @Column({ type: 'varchar', length: 255 })
    apellido: string;
  
    @Column({ type: 'varchar', length: 255 })
    correo_electronico: string;
  
    @Column({ type: 'varchar', length: 255 })
    celular: string;
}