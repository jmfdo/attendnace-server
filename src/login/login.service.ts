import { Injectable } from '@nestjs/common';
import { ValidateLoginDto } from './dto/validate-login.dto';

@Injectable()
export class LoginService {
  async login(validateLoginDto: ValidateLoginDto) {
    return `This action returns a # login`;
  }
}
