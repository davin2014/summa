import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/database/database.module';
import { RouteTripsService } from './services/route-trips.service';
import { RouteTripsController } from './controllers/route-trips.controller';
import { RouteTrip } from './entities/route-trips.entity';

@Module({
  controllers: [RouteTripsController],
  providers: [RouteTripsService],
  imports: [DatabaseModule,TypeOrmModule.forFeature([RouteTrip])],
})
export class RouteTripsModule {}
