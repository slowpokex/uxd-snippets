import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class SimpleLoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            console.log(`${req.url} : ${req.method} - ${req.headers.host} / ${req.headers['user-agent']}`);
            next();
        };
    }
}