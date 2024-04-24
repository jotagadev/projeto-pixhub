import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome deve ser uma string.' })
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  name: string;

  @IsString({ message: 'Email deve ser uma string.' })
  @IsEmail({}, { message: 'Email deve ser um email válido.' })
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  email: string;

  @IsString({ message: 'Senha deve ser uma string.' })
  @IsStrongPassword(
    { minLength: 8 },
    { message: 'Senha deve ter no mínimo 8 caracteres' },
  )
  @IsNotEmpty({ message: 'Senha é obrigatória.' })
  password: string;
}
