import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SuscripcionService } from '../services/suscripcion.service';
import { CreateSuscripcionDto, UpdateSuscripcionDto } from '../dtos/suscripcion.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { get } from 'http';


@ApiTags('suscripcion')
@Controller('suscripcion')
export class SuscripcionController {
    constructor(private readonly suscripcionService : SuscripcionService) {}

    @Get()
    getSuscripciones() {
        return this.suscripcionService.getSuscripciones();
    }

    @Get(':id')
    getSuscripcion(id: number) {
        return this.suscripcionService.getSuscripcion(id);
    }

    @Get('user/:id')
    getSubscriptionsByUser(id: number) {
        return this.suscripcionService.getSubscriptionsByUser(id);
    }

    @Get('route/:id')
    getSubscriptionsByRoute(id: number) {
        return this.suscripcionService.getSubscriptionsByRoute(id);
    }

    @Post()
    @ApiBody({ type: CreateSuscripcionDto })
    createSuscripcion(@Body() payload: CreateSuscripcionDto) {
        return this.suscripcionService.create(payload);
    }

    @Delete(':id')
    deleteSuscripcion(id: number) {
        return this.suscripcionService.remove(id);
    }

    @Put(':id')
    updateSuscripcion(id: number, @Body() payload: UpdateSuscripcionDto) {
        return this.suscripcionService.update(id, payload);
    }
}
