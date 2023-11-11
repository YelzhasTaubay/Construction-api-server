import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ){}

   findOne(filter: {
       where: {
           id?: string; email?: string; username?: string;
       }
   }): Promise<User> {
        return this.userModel.findOne({...filter});
   }


async create(
    createUser: CreateUserDto
): Promise<User | {warningMessage: string}> {

        const user = new User();
        const existingUserName = await this.findOne({
            where: {username: createUser.username}
        })

        const existingEmail = await this.findOne({
            where: {email: createUser.email}
        })

        if (existingUserName) {
            return {warningMessage: 'Пользователь с таким именем уже существует'};
        }

        if (existingEmail) {
            return {warningMessage: 'Пользователь с таким email уже существует'};
        }

        const hashPassword = await bcrypt.hash(createUser.password, 10);

        user.username = createUser.username;
        user.password = hashPassword;
        user.email = createUser.email;

        return user.save();
}



}


