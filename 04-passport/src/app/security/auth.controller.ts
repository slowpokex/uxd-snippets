import * as passport from 'passport';
import { Get, Post, Controller, Response, Next, Request } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('auth')
@Controller()
export class AuthController {

    @Get('/login')
    async getAuthenticatePage(@Request() req) {
        return req.flash('loginMessage');
    }

    @Post('/login')
    async authenticate(@Request() req, @Response() res, @Next() next): Promise<any> {
        return await passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true,
        })(req, res, next);
    }

    @Get('/logout')
    async logout(@Request() req, @Response() res) {
        req.logout();
        res.redirect('/');
    }
}
