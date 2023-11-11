import {IsNotEmpty} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({example: 'yelzhas'})
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({example: '12345'})
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({example: 'elzhas.96@mail.ru'})
    @IsNotEmpty()
    readonly email: string;

}