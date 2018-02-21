import { Component } from '@nestjs/common';
import { UserModel, UserSchema } from '../modules/users/schemas/user.schema';
import { UserService } from '../modules/users/user.service';
import { User } from '../modules/users/interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Component()
export class AuthService {

    constructor(
        @InjectModel(UserSchema) private readonly userModel: Model<User>,
        private readonly userService: UserService,
    ) {}

    async checkUser(password, userFromDb) {
        if (!userFromDb) {
            return { noUser: true };
        }
        const wrappedUser = new this.userModel(userFromDb);
        return await wrappedUser.comparePassword(password)
            .then((isMatch) => {
                if (!isMatch) {
                    return { notMatch: true };
                }
                return userFromDb;
            });
    }

    public async validateUser(login: string, pass: string): Promise<any> {
        return await this.userService
            .findOne({ login })
            .then(user => this.checkUser(pass, user));
    }
}
