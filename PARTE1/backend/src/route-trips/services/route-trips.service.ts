import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { RouteTrip } from '../entities/route-trips.entity';
import { CreateRouteTripDto, UpdateRouteTripDto } from '../dtos/route-trip.dto';

@Injectable()
export class RouteTripsService {

    constructor(
        private configService: ConfigService,
        @InjectRepository(RouteTrip) private routeTripRepo: Repository<RouteTrip>,
        @Inject('PG') private clientPg: Client
      ) {}


    async create(payload: CreateRouteTripDto) {
        const newRouteTrip = this.routeTripRepo.create(payload);
        return await this.routeTripRepo.save(newRouteTrip); 
    }

    async getRouteTrips() {
        return await this.routeTripRepo.find();
    }

    async getIdRouteTrips(id: number) {
        const routeTrip = await this.routeTripRepo.findOne({where: { id : id}});
        if (!routeTrip) throw new NotFoundException('Ruta no existe');
        return routeTrip;
    }   

    async update(id: number, payload: UpdateRouteTripDto) {
        const routeTrip = await this.routeTripRepo.findOne({where: { id : id}});
        this.routeTripRepo.merge(routeTrip, payload);
        return await this.routeTripRepo.save(routeTrip);
    }

    async remove(id: number) {
        return await this.routeTripRepo.delete(id);
    }
}
