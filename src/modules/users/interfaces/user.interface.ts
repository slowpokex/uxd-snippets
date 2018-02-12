import { Document } from 'mongoose';
import { UserRoles } from "../enums/user-roles.enum";

export interface User extends Document {
    readonly id: number;
    readonly login: string;
    readonly password: string;
    readonly displayName: string;
    readonly email: string;
    readonly role: UserRoles;
}