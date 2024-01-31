import { ConflictException, Injectable, PipeTransform } from '@nestjs/common';

import { UsersService } from 'src/modules/users/users.service';

import { SignUpDto } from '../dto/sign-up.dto';

@Injectable()
export default class EmailExistsPipe implements PipeTransform {
  constructor(private readonly usersService: UsersService) {}

  async transform(value: SignUpDto) {
    const user = await this.usersService.findUserByEmail(value.email);

    if (user) {
      throw new ConflictException();
    }

    return value;
  }
}
