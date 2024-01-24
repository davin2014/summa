import { IsOptional,  IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';


export class CreateRouteTripDto {
  
  @ApiProperty()
  @IsDate()
  fecha: Date;

  @ApiProperty()
  @IsString()
  tipoDeVehiculo: string;

  @ApiProperty()
  @IsDate()
  horaDeSalida: Date;

  @ApiProperty()
  @IsInt()
  cuposDisponibles: number;

  @ApiProperty()
  @IsString()
  lugarDeOrigen: string;

  @ApiProperty()
  @IsString()
  lugarDeDestino: string;
  
}

export class UpdateRouteTripDto extends PartialType(CreateRouteTripDto) {
  @ApiProperty()
  @IsOptional()
  @IsInt()
  id: number;
}