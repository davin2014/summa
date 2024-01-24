import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { Client } from 'pg';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/services/auth.service';
import { UsersModule } from './users/users.module';
import { RouteTripsModule } from './route-trips/route-trips.module';
import { enviroments } from './enviroments';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuscripcionModule } from './suscripcion/suscripcion.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule, 
    RouteTripsModule, SuscripcionModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
