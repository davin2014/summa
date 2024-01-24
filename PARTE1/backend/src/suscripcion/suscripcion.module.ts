import { Module } from '@nestjs/common';
import { SuscripcionService } from './services/suscripcion.service';
import { SuscripcionController } from './controllers/suscripcion.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suscripcion } from './entities/suscripcion.entity';


@Module({
  providers: [SuscripcionService],
  controllers: [SuscripcionController],
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Suscripcion])
]
})
export class SuscripcionModule {}
