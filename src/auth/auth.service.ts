import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService) {
    }

    async validateUser(username: string, password: string) {

        const user = await this.userService.findOne({where: {username } });

        if (!user) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        if (user && checkPassword) {
            return {
                userId:user.id,
                username:user.username,
                email: user.email
            }
        }

        return null;
    }


}
