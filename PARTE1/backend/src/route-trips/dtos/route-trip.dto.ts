import { IsOptional,  IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';


export class CreateRouteTripDto {
  
  @ApiProperty()
  @IsDate()
  fecha: Date;

  @ApiProperty()
  @IsString()
  tipodevehiculo: string;

  @ApiProperty()
  @IsDate()
  horadesalida: string;

  @ApiProperty()
  @IsInt()
  cuposdisponibles: number;

  @ApiProperty()
  @IsString()
  lugardeorigen: string;

  @ApiProperty()
  @IsString()
  lugardedestino: string;
  
}

export class UpdateRouteTripDto extends PartialType(CreateRouteTripDto) {
  @ApiProperty()
  @IsOptional()
  @IsInt()
  id: number;
}