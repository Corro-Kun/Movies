import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DataAuthDto } from './dto/data-auth.dto';
import { VerifyAuthDto } from './dto/verify-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body() user: DataAuthDto) {
        return await this.authService.signUp(user);
    }

    @Post('/login')
    async logIn(@Body() user: DataAuthDto) {
        return await this.authService.logIn(user);
    }

    @Post('/verify')
    async verify(@Body() data: VerifyAuthDto) {
        return await this.authService.verify(data.token);
    }
}
