import { Get, Controller, Param, HttpCode, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/')
    @HttpCode(201)
    async create(@Body() dto: UserDto) {
        return await this.userService.create(dto);
    }

    @Get('/')
    @HttpCode(200)
    async getAll() {
        return await this.userService.getAll();
    }

    @Get('/:id')
    @HttpCode(200)
    async getById(@Param('id') id: number) {
        return await this.userService.getById(id);
    }
}
