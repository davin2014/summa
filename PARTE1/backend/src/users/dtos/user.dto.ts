import { IsOptional,  IsString, IsInt } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';


export class CreateUserDto {
  
  

  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  apellido: string;

  @ApiProperty()
  @IsString()
  correo_electronico: string;

  @ApiProperty()
  @IsString()
  celular: string;
  
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsInt()
  id: number;
}