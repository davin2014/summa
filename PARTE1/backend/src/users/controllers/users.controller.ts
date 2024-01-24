import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@ApiTags('user')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService) {}

    @Post()
    @ApiBody({ type: CreateUserDto })
    createUser(@Body() payload: CreateUserDto) {
        return this.usersService.create(payload);
    }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        
        return this.usersService.getUser(id);
    }

    @Get('email/:email')
    getUserByEmail(@Param('email') email: string) {
        return this.usersService.findByEmail(email);
    }

    

    @Put(':id')
        update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
            return this.usersService.update(id, payload);
    }

    

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
