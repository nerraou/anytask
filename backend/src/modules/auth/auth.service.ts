import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, passWord: string): Promise<any> {}
}
