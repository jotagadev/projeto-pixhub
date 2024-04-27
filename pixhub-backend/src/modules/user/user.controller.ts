import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink } from 'fs';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('users')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(+id);
  }

  @Patch('user/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete('user/:id')
  @UseGuards(AuthGuard)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(+id);
    let path = user.avatarURL;
    path = path.replace(this.SERVER_URL,"");
    console.log(path);
    try {
      await unlink(path, (err) =>{
        if(err) throw err;
        console.log("arquivo de imagem deletado.");
      });
    } catch (error) {
      throw new InternalServerErrorException('Falha a deletar arquivo de imagem');
    }
    return await this.userService.remove(+id);
  }


  SERVER_URL: string = 'http://localhost:3333/';
  @Post('user/avatar')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async setAvatar(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile(
      new ParseFilePipe({
        // Valida que é uma imagem e limita o tamanho do arquivo.
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000000 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log('Arquivo postado:', file);
    return this.userService.setAvatarURL(+id,`${this.SERVER_URL}${file.path}`);
  }
}
