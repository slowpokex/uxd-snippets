import { NestFactory } from '@nestjs/core';
import { PORT } from './config';
import { ApplicationModule } from './modules/app/app.module';
import * as bodyParser from 'body-parser';
import { HttpExceptionFilter } from "./modules/common/filters/http-exception.filter";

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
    app.use(bodyParser.json());
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
