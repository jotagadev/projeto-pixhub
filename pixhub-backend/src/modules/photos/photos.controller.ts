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
import { AuthGuard } from 'src/common/guard/auth.guard';
import { Category } from 'src/common/enum/Category.enum';
import { extname } from 'path';
import { unlink } from 'fs';

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



async upload(
  @Body() createPhotoDto: CreatePhotoDto,
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
  createPhotoDto.photoURL = `${this.SERVER_URL}${file.path}`;
  return await this.photosService.create(createPhotoDto);
}


  @Get('photos')
  async findAll() {
    return await this.photosService.findAll();
  }

  @Get('photos/:category')
  async findCategory(@Param('category') category: Category) {
    return await this.photosService.findCategory(category);
  }

  @Get('photo/userPhotos/:userId')
  async findByUser(@Param('userId') userId: string) {
    return await this.photosService.findByUser(+userId);
  }

  @Get('photo/:id')
  async findOne(@Param('id') id: string) {
    return await this.photosService.findOne(+id);
  }

  /*@Get('upload')
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
  }*/

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
    let path = photo.photoURL;
    path = path.replace(this.SERVER_URL,"");
    console.log(path);
    try {
      await unlink(path, (err) =>{
        if(err) throw err;
        console.log("arquivo deletado.");
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete image file');
    }
    return await this.photosService.remove(+id);
  }
}
