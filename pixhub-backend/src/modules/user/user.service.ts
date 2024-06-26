import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    await this.emailExists(createUserDto.email);

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);

    createUserDto.password = hash;

    const user = await this.userRepository.save(createUserDto);
    delete user.password;

    return user;
  }

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'name', 'email', 'password'],
    });
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado.');
    }
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'photos'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (updateUserDto.email && user.email != updateUserDto.email) {
      await this.emailExists(updateUserDto.email);
    }

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(updateUserDto.password, salt);

      updateUserDto.password = hash;
    }

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.userRepository.delete(id);
  }

  async emailExists(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      throw new BadRequestException('Email já existe.');
    }
  }

  async setAvatarURL(id: number, url: string) {
    return await this.userRepository.update(id,{ avatarURL: url })
  }

}
