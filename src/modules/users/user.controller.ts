import { Controller, Get, Post, Body, HttpCode, HttpStatus, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { RolesGuard } from '../app/guards/roles.guard';
import { AuthGuard } from '../app/guards/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UseGuards(RolesGuard)
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
    @UseGuards(RolesGuard)
    async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<User> {
        return await this.userService.update(id, userDto);
    }

    @Delete('/:id')
    @UseGuards(RolesGuard)
    async remove(@Param('id') id: string): Promise<User> {
        return await this.userService.remove(id);
    }
}
