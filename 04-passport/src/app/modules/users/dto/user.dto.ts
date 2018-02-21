import { UserRoles } from '../enums/user-roles.enum';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiModelProperty({
        required: true,
        description: 'Unique ID of user',
    })
    readonly id: number;

    @ApiModelProperty({
        required: true,
        description: 'Unique login of user',
    })
    readonly login: string;

    @ApiModelProperty({
        required: true,
        description: 'Password for user',
    })
    readonly password: string;

    @ApiModelProperty({
        description: 'Display name for user',
    })
    readonly displayName: string;

    @ApiModelProperty({
        description: 'E-Mail of user',
    })
    readonly email: string;

    @ApiModelProperty({
        default: 'GUEST',
        type: String,
    })
    readonly role: UserRoles;
}