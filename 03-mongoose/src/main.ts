import { NestFactory } from '@nestjs/core';
import { PORT } from './app/config';
import { ApplicationModule } from './app/app.module';
import { HttpExceptionFilter } from './app/filters/http-exception.filter';
import app from './app/config/express.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const nestApp = await NestFactory.create(ApplicationModule, app);
    nestApp.useGlobalFilters(new HttpExceptionFilter());
    await nestApp.listen(PORT);
}

bootstrap()
    .then(() => {
        console.log(`Successful started on ${PORT} port!`);
    })
    .catch((err) => {
        console.error(`Something goes wrong: ${err}`);
    });
