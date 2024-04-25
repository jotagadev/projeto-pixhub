import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Res,
  NotFoundException,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { unlink } from 'fs/promises';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Category } from 'src/common/enum/Category.enum';

@Controller('api')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('photo')
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    return await this.photosService.create(createPhotoDto);
  }
  SERVER_URL: string = 'http://localhost:3333/';
  @Post('upload')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
      }),
    }),
  )
  async upload(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        // Valida que é uma imagem e limita o tamanho do arquivo.
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000000 }),
          new FileTypeValidator({ fileType: /\.(jpg|jpeg|png)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log('Arquivo postado:', file);
    return await this.photosService.setURL(
      +id,
      `${this.SERVER_URL}${file.path}`,
    );
  }

  @Get('photos')
  async findAll() {
    return await this.photosService.findAll();
  }

  @Get('photos/:category')
  async findCategory(@Param('category') category: Category) {
    return await this.photosService.findCategory(category);
  }

  @Get('photo/:id')
  async findOne(@Param('id') id: string) {
    return await this.photosService.findOne(+id);
  }

  @Get('upload')
  async serveAllUpload(@Res() res): Promise<any> {
    const photos = await this.photosService.findAll();

    const photoPaths = photos.map((photos) => photos.photoURL);

    for (const photoPath of photoPaths) {
      res.sendFile(photoPath, { root: 'uploads' });
    }
  }

  @Get('upload/:id')
  async serveUpload(@Param('id') id, @Res() res): Promise<any> {
    res.sendFile(+id, { root: 'uploads' });
  }

  @Get('upload/:category')
  async serveCategoryUpload(
    @Param('category') category: Category,
    @Res() res,
  ): Promise<any> {
    const photos = await this.photosService.findCategory(category);

    const photoPaths = photos.map((photos) => photos.photoURL);

    for (const photoPath of photoPaths) {
      res.sendFile(photoPath, { root: 'uploads' });
    }
  }

  @Patch('photo/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    return await this.photosService.update(+id, updatePhotoDto);
  }

  @Delete('photo/:id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string) {
    const photo = await this.photosService.findOne(+id);
    if (!photo) {
      throw new NotFoundException('Photo not found');
    }

    // Deleta a imagem de /uploads
    try {
      await unlink(photo.photoURL);
    } catch (error) {
      throw new InternalServerErrorException('Erro à deletar imagem');
    }

    return await this.photosService.remove(+id);
  }
}
