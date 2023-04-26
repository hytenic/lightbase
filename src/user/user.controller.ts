import { Body, Request, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('/login')
  async login(@Request() req, @Body() body) {
    return 'login';
  }

  @Post('/signup')
  async signup(@Request() req, @Body() body) {
    return 'signup';
  }
}
