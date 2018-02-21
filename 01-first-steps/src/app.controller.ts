import { Get, Controller } from '@nestjs/common';

@Controller('/')
export class AppController {

	@Get('/')
	async getHello(): string {
        return 'Hello World!';
    }

    @Get('/lol')
    async getLol(): string {
        return 'Lol!';
    }

    @Get('/kek')
    async getKek(): string {
        return 'Kek!';
    }
}
