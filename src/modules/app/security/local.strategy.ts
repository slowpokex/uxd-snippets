import * as passport from 'passport';
import { Component } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Component()
export class LocalStrategy extends Strategy {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'login',
            passwordField: 'password',
            session: false,
            passReqToCallback : true,
        }, async (req, login, password, done) => await this.verify(req, login, password, done));
        passport.use(this);
    }

    public async verify(req, login, password, done) {
        return await this.authService.validateUser(login, password)
            .then(data => {
                if (data.noUser) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }
                if (data.notMatch) {
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                }
                return done(null, data);
            })
            .catch(done);
    }
}