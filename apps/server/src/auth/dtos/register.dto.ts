import { IsEmail, IsString, IsOptional, IsHash } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsHash('sha1')
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
