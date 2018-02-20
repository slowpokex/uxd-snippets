import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGODB_URI } from './config';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './security/auth.module';

@Module({
    imports: [ MongooseModule.forRoot(MONGODB_URI), UserModule, AuthModule ],
    controllers: [ AppController ],
    components: [],
})
export class ApplicationModule {}
