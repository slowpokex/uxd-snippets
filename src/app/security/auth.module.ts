import * as passport from 'passport';
import * as flash from 'connect-flash';
import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { UserModule } from '../modules/users/user.module';
import { OnModuleInit } from '@nestjs/common/interfaces/modules';
import { UserService } from '../modules/users/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../modules/users/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), UserModule],
    controllers: [AuthController],
    components: [LocalStrategy, AuthService],
})
export class AuthModule implements NestModule, OnModuleInit {
    constructor(private readonly userService: UserService) {}

    public onModuleInit() {
        passport.serializeUser((user, done) => {
            return done(null, user._id);
        });
        passport.deserializeUser((id, done) => {
            this.userService.findById(id)
                .then((user) => {
                    done(null, user);
                })
                .catch(done);
        });
    }

    public configure(consumer: MiddlewaresConsumer) {
        consumer.apply(passport.initialize())
            .forRoutes({ path: '/*', method: RequestMethod.ALL });
        consumer.apply(passport.session())
            .forRoutes({ path: '/*', method: RequestMethod.ALL });
        consumer.apply(flash())
            .forRoutes({ path: '/*', method: RequestMethod.ALL });
    }
}
