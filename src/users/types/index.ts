import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {

  @ApiProperty({ example: 'yelzhas' })
  username: string;

  @ApiProperty({ example: '12345' })
  password: string;
}

export class LoginUserResponse {

  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'yelzhas',
        password: '12345',
      },
    },
  })
  user: {
    userId: number,
    username: string,
    email: string
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;

}

export class LogoutUserResponse {

  @ApiProperty({ example: 'session has ended' })
  msg: string;

}

export class LoginCheckResponse {

  @ApiProperty({example: 1})
  userId: number;

  @ApiProperty({example: 'yelzhas'})
  username: string;

  @ApiProperty({example: 'elzhas.96@mail.ru'})
  email: string;

}

export class SignupResponse {

  @ApiProperty({example: 4})
  id: number;

  @ApiProperty({example: 'aknur'})
  username: string;

  @ApiProperty({example: '$2b$10$7kcUVb1P7/AHUTD5geHITOAI/lf3oTDAMAcxiiwWbI0TbPdC1fVmi'})
  password: string;

  @ApiProperty({example: 'aknur.98@mail.ru'})
  email: string;

  @ApiProperty({example: '2023-11-01T10:03:31.688Z'})
  updatedAt: string;

  @ApiProperty({example: '2023-11-01T10:03:31.688Z'})
  createdAt: string;

}

