import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RouteTripsService } from '../services/route-trips.service';
import { CreateRouteTripDto, UpdateRouteTripDto } from '../dtos/route-trip.dto';

@ApiTags('rutas')
@Controller('route-trips')
export class RouteTripsController {
    constructor(private readonly routeTripsService : RouteTripsService) {}

    @Get()
    getRouteTrips() {
        return this.routeTripsService.getRouteTrips();
    }

    @Get(':id')
    getRouteTrip(@Param('id') id: number) {
        return this.routeTripsService.getIdRouteTrips(id);
    }

    @Post()
    create(@Body() payload: CreateRouteTripDto) {
        return this.routeTripsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateRouteTripDto) {
        return this.routeTripsService.update(id, payload);
    }

    
}
