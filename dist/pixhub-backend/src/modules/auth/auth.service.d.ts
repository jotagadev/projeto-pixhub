import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(loginDto: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
        photos: Photo[];
        accessToken: string;
    }>;
}
