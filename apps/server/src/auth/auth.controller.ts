import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('login')
  public loginUser(): { token: string; user: any } {
    console.log('hey');

    return this._authService.loginUser('daddy', 'yes');
  }
}
