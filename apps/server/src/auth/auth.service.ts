// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entity/user.entity';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(User)
    // private usersRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  public async register(registerDto: RegisterDto) {
    // const existingUser = await this.usersRepository.findOne({
    //   where: { email: registerDto.email },
    // });

    // if (existingUser) {
    //   throw new UnauthorizedException('User already exists');
    // }

    // const user = this.usersRepository.create(registerDto);

    // await this.usersRepository.save(user);

    // // Remove password from response
    // const { password, ...result } = user;
    return this.generateToken({});
  }

  public async login(loginDto: LoginDto) {
    // const user = await this.usersRepository.findOne({
    //   where: { email: loginDto.email },
    //   select: ['id', 'email', 'password', 'firstName', 'lastName', 'isActive'], // Explicitly select password
    // });

    // if (!user) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }

    // const isPasswordValid = loginDto.password === user.password;

    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }

    // Remove password from response
    // const { password, ...result } = {user};
    return this.generateToken({ id: 234, email: 'harel@gmail.com' });
  }

  private generateToken(user: Partial<User>) {
    const payload = { id: user.id, email: user.email };
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token: this.jwtService.sign(payload),
    };
  }

  public async validateUser(id: number): Promise<Partial<User>> {
    // return this.usersRepository.findOne({
    //   where: { id, isActive: true },
    //   select: ['id', 'email', 'firstName', 'lastName', 'isActive'], // Never return password
    // });
    return {
      id: 234,
      email: 'harel@gmail.com',
      isActive: true,
      lastName: 'aaa',
      firstName: 'harel',
    };
  }
}
