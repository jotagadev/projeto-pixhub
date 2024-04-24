import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import express from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    // Verifica se o token foi enviado
    if (!token) {
      throw new UnauthorizedException('Token não enviado.');
    }

    const secretKey = this.configService.get('SECRET_KEY');

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: secretKey,
      });

      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException('Token inválido.');
    }

    return true;
  }

  private extractTokenFromHeader(request: express.Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type === 'Bearer') {
      return token;
    }
  }
}
