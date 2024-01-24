import { IsOptional,  IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';


export class CreateSuscripcionDto {
  
  @ApiProperty()
  @IsInt()
  usuarioid: number;

  @ApiProperty()
  @IsInt()
  rutaid: number;
  
}

export class UpdateSuscripcionDto extends PartialType(CreateSuscripcionDto) {
  @ApiProperty()
  @IsOptional()
  @IsInt()
  id: number;
}