import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';


import { Suscripcion } from '../entities/suscripcion.entity';

import { CreateSuscripcionDto, UpdateSuscripcionDto } from '../dtos/suscripcion.dto';


@Injectable()
export class SuscripcionService {
    constructor(
        private configService: ConfigService,
        @InjectRepository(Suscripcion) private suscripcionRepo: Repository<Suscripcion>,
        @Inject('PG') private clientPg: Client
      ) {}

        getSuscripciones() {
            return this.suscripcionRepo.find();
        }

        getSuscripcion(id: number) {
            const user = this.suscripcionRepo.findOne({where: { id : id}});
            if (!user) {
                throw new NotFoundException(`User #${id} not found`);
            }
            return user;
        }

        async create(data: CreateSuscripcionDto) {
            const newUser = this.suscripcionRepo.create(data);
            return this.suscripcionRepo.save(newUser);
        }

        async update(id: number, changes: UpdateSuscripcionDto) {
            const suscripcion = await this.suscripcionRepo.findOne({where: { id : id}});
            if (!suscripcion) {
                throw new NotFoundException(`suscripcion #${id} not found`);
            }
            this.suscripcionRepo.merge(suscripcion, changes);
            return this.suscripcionRepo.save(suscripcion);
        }

        remove(id: number) {
            return this.suscripcionRepo.delete(id);
        }

        async getSubscriptionsByUser(id: number) {
            const subscriptions = await this.suscripcionRepo.find({where: { usuarioid : id}});
            if (!subscriptions) {
                throw new NotFoundException(`User #${id} not found`);
            }
            return subscriptions;
        }

        async getSubscriptionsByRoute(id: number) {
            const subscriptions = await this.suscripcionRepo.find({where: { rutaid : id}});
            if (!subscriptions) {
                throw new NotFoundException(`User #${id} not found`);
            }
            return subscriptions;
        }
}
