import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGODB_URI } from '../../config';
import { UserModule } from "../users/user.module";

@Module({
  imports: [ MongooseModule.forRoot(MONGODB_URI), UserModule ],
  controllers: [ AppController ],
  components: [],
})
export class ApplicationModule {}
