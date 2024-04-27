import { Transform } from 'class-transformer';
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/common/enum/Category.enum';

export class CreatePhotoDto {
  @IsString({ message: 'Título deve ser uma string.' })
  @IsNotEmpty({ message: 'Título é obrigatório.' })
  title: string;

  @IsNotEmpty({ message: 'Data é obrigatório.' })
  postDate: Date;

  @IsNotEmpty({ message: 'Data é obrigatório.' })
  description: string;

  photoURL: string;

  @IsString({ message: 'Categoria deve ser uma string.' })
  @IsNotEmpty({ message: 'Categoria é obrigatório.' })
  @IsEnum(Category)
  category: Category;

  @IsInt({ message: 'Título deve ser uma string.' })
  @IsNotEmpty({ message: 'Título é obrigatório.' })
  @Transform(({ value }) => parseInt(value, 10))
  userId: number;
}
