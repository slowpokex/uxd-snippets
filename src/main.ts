import { NestFactory } from '@nestjs/core';
import { PORT } from './app/config';
import { ApplicationModule } from './app/app.module';
import { HttpExceptionFilter } from './app/filters/http-exception.filter';
import app from './app/config/express.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const nestApp = await NestFactory.create(ApplicationModule, app);
    nestApp.useGlobalFilters(new HttpExceptionFilter());
    const options = new DocumentBuilder()
        .setTitle('User API example')
        .setDescription('The User\'s API description')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = SwaggerModule.createDocument(nestApp, options);
    SwaggerModule.setup('/swagger', nestApp, document);

    await nestApp.listen(PORT);
}

bootstrap()
    .then(() => {
        console.log(`Successful started on ${PORT} port!`);
    })
    .catch((err) => {
        console.error(`Something goes wrong: ${err}`);
    });
