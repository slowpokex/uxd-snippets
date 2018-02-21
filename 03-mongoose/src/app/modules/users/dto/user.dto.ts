import { UserRoles } from '../enums/user-roles.enum';

export class UserDto {
    readonly id: number;
    readonly login: string;
    readonly password: string;
    readonly displayName: string;
    readonly email: string;
    readonly role: UserRoles;
}