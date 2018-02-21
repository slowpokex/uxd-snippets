import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const PORT : number = 3000;

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(PORT);
}

bootstrap()
    .then(() => {
        console.log(`Successful started on ${PORT} port!`);
    })
    .catch((err) => {
        console.error(`Something goes wrong: ${err}`);
	});
