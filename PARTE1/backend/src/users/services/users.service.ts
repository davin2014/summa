import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
    constructor(
        private configService: ConfigService,
        @InjectRepository(User) private userRepo: Repository<User>,
        @Inject('PG') private clientPg: Client
      ) {}

      getUsers() {
        return this.userRepo.find();
    }

    getUser(id: number) {
      const user = this.userRepo.findOne({where: { id : id}});
      if (!user) {
        throw new NotFoundException(`User #${id} not found`);
      }
      return user;
    }

    findByEmail(email: string) {
        return this.userRepo.findOne({where: { correo_electronico : email}});
        
    }

    async create(data: CreateUserDto) {
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
      }


    async update(id: number, changes: UpdateUserDto) {
        const user = await this.userRepo.findOne({where: { id : id}});
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        this.userRepo.merge(user, changes);
        return this.userRepo.save(user);
    }

    remove(id: number) {
        return this.userRepo.delete(id);
    }
}
