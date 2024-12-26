import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public loginUser(
    username: string,
    passwordHash: string
  ): { token: string; user: any } {
    return {
      token: '23478290837asdoh',
      user: {
        id: '89',
        email: 'Asd',
      },
    };
  }
}
