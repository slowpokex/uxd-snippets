import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';

@Module({
  imports: [ UserModule ],
  controllers: [ AppController ],
  components: [],
})
export class ApplicationModule {}
