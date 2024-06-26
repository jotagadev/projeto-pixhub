import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
        photos: Photo[];
        accessToken: string;
    }>;
}
