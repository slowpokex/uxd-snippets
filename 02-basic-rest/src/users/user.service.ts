import { Component } from '@nestjs/common';
import * as lodash from 'lodash';
import {UserDto} from './user.dto';

const users = [
    {
        id: 1,
        name: 'Cool',
        title: 'Good idea',
    }, {
        id: 2,
        name: 'Clever',
        title: 'Busy man!',
    }, {
        id: 3,
        name: 'Malcolm',
        title: 'Good idea',
    },
];

@Component()
export class UserService {
    constructor() {
        this.users = users;
    }

    async create(dto: UserDto) {
        this.users.push(dto);
        return dto;
    }

    async getAll() {
        return this.users;
    }

    async getById(id: number) {
        return this.users.filter((elem) => elem.id === +id);
    }

    async get(...args) {
        return lodash.find(this.users, { ...args });
    }
}
