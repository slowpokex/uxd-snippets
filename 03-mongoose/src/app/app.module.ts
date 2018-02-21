import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGODB_URI } from './config';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './security/auth.module';
import { SimpleLoggerMiddleware } from './middlewares/logger.middleware';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';

@Module({
    imports: [ MongooseModule.forRoot(MONGODB_URI), UserModule ],
    controllers: [ AppController ],
    components: [],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(SimpleLoggerMiddleware)
            .forRoutes({ path: '/*', method: RequestMethod.ALL });
    }
}
