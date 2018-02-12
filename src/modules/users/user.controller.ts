import {Controller, Get, Post, Body, HttpCode, HttpStatus, Response, Param} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(201)
    async create(@Response() res, @Body() createUserDto: UserDto) {
        return this.userService.create(createUserDto)
            .catch((err) => {
                res.status(HttpStatus.NOT_ACCEPTABLE).json({
                    message: err
                });
            });
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/:id')
    async findById(@Response() res, @Param('id') id: string): Promise<User> {
        return await this.userService.findById(id).catch((err) => {
                res.status(HttpStatus.NOT_FOUND).json({ message: err });
            });
    }
}
