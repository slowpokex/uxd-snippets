import { Controller, Get, Post, Body, HttpCode, HttpStatus, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: string): Promise<User> {
        return await this.userService.findById(id);
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<User> {
        return await this.userService.update(id, userDto);
    }

    @Delete('/:id')
    async remove(@Param('id') id: string): Promise<User> {
        return await this.userService.remove(id);
    }
}
