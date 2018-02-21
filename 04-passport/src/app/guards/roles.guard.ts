import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';

@Guard()
export class RolesGuard implements CanActivate {
    async canActivate(data: any, context: ExecutionContext): Promise<boolean> {
        return false;
    }
}