import { IsEmail, IsHash } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsHash('sha1')
  password: string;
}
