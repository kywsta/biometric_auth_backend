import { Injectable } from '@nestjs/common';
import { User } from 'src/data/entities/user';

@Injectable()
export class UsersService {
    private readonly users : User[] = [
        {
            id: 1,
            username: "alice",
            password: "aliceinwonderland"
        },
        {
            id: 2,
            username: "bob",
            password: "bobthebuilder"
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
