import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
import { UserSchema } from './schemas/user.schema';
import { CommonService } from '../../lib/common.service';

@Component()
export class UserService extends CommonService<User, UserDto> {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) {
        super(userModel);
    }
}
