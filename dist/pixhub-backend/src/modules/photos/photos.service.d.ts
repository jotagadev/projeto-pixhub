import { UserService } from './../user/user.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photos.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/common/enum/Category.enum';
export declare class PhotosService {
    private photoRepository;
    private readonly userService;
    constructor(photoRepository: Repository<Photo>, userService: UserService);
    create(createPhotoDto: CreatePhotoDto): Promise<CreatePhotoDto & Photo>;
    createAndLink(url: string, createPhotoDto: CreatePhotoDto): Promise<CreatePhotoDto & Photo>;
    findAll(): Promise<Photo[]>;
    findCategory(category: Category): Promise<Photo[]>;
    findOne(id: number): Promise<Photo>;
    setURL(id: number, url: string): Promise<import("typeorm").UpdateResult>;
    update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
