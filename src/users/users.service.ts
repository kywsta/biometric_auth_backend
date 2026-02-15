import { Injectable } from '@nestjs/common';
import { User } from 'src/data/entities/user.entity';
import { UsersRepository } from 'src/data/repositories/users.repository';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository: UsersRepository) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne(username);
    }
}
