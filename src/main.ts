import { NestFactory } from '@nestjs/core';
import { PORT } from './modules/app/config';
import { ApplicationModule } from './modules/app/app.module';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { HttpExceptionFilter } from './modules/app/filters/http-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

    app.use(session({ secret: 'frontcamp' }));
	app.use(bodyParser.json());
    app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(PORT);
}

bootstrap()
	.then(() => {
		console.log(`Successful started on ${PORT} port!`);
	})
	.catch((err) => {
		console.error(`Something goes wrong: ${err}`);
	});
