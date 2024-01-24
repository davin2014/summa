import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { DatabaseModule } from 'src/database/database.module';
import { User } from './entities/user.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User])
  ],
})
export class UsersModule {}
