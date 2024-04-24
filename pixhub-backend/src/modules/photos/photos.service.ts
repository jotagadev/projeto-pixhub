import { UserService } from './../user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photos.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/common/enum/Category.enum';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    private readonly userService: UserService,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    await this.userService.findOne(createPhotoDto.userId);

    return await this.photoRepository.save(createPhotoDto);
  }

  async findAll() {
    return await this.photoRepository.find();
  }

  async findCategory(category: Category) {
    return await this.photoRepository.find({ where: { category } });
  }

  async findOne(id: number) {
    try {
      return await this.photoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Foto não encontrada.');
    }
  }

  async setURL(id: number, url: string) {
    await this.findOne(id);
    return await this.photoRepository.update(id, { photoURL: url });
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    await this.findOne(id);

    if (updatePhotoDto.userId) {
      await this.userService.findOne(updatePhotoDto.userId);
    }
    return await this.photoRepository.update(id, updatePhotoDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.photoRepository.delete(id);
  }
}
