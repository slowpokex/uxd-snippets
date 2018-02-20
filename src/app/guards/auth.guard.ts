import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';

@Guard()
export class AuthGuard implements CanActivate {
    async canActivate(data: any, context: ExecutionContext): Promise<boolean> {
        return data.isAuthenticated();
    }
}