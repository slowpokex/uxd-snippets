import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Guard()
export class RolesGuard implements CanActivate {
    async canActivate(data: any, context: ExecutionContext): Promise<boolean> {
        return false;
    }
}