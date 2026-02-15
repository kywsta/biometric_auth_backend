import { User } from "../entities/user.entity";


export class UsersRepository {
    private readonly users: User[] = [
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