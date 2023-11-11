import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {LocalAuthGuard} from "../auth/local.auth.guard";
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {LoginUserRequest, LoginUserResponse, LogoutUserResponse, LoginCheckResponse, SignupResponse} from './types';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {
    }

    @ApiOkResponse({type: SignupResponse})
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiBody({type: LoginUserRequest})
    @ApiOkResponse({type: LoginUserResponse})
    @Post('/login')
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Header('Content-type', 'application/json')
    login(@Request() req) {
        return {user: req.user, msg: 'Logged in'};
    }

    @ApiOkResponse({type: LoginCheckResponse})
    @Get('/login-check')
    @UseGuards(AuthenticatedGuard)
    loginCheck(@Request() req){
        return req.user;
    }

    @ApiOkResponse({type: LogoutUserResponse})
    @Get('/logout')
    logout(@Request() req){
        req.session.destroy()
        return {msg: 'Session has ended'}
    }


}
