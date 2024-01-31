import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User as UserEntity } from '@prisma/client';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import EmailExistsPipe from './pipes/email-exists.pipe';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async signIn(@Request() req: Request & { user: UserEntity }) {
    const { user } = req;

    return this.authService.signIn(user);
  }

  @Post('sign-up')
  async signUp(@Body(EmailExistsPipe) signUpDto: SignUpDto) {
    await this.authService.signUp(signUpDto);

    return {
      message: 'success',
    };
  }
}
