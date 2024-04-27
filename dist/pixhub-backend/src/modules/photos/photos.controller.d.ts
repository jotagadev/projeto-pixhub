/// <reference types="multer" />
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Category } from 'src/common/enum/Category.enum';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhotoDto: CreatePhotoDto): Promise<CreatePhotoDto & import("./entities/photos.entity").Photo>;
    SERVER_URL: string;
    upload(createPhotoDto: CreatePhotoDto, file: Express.Multer.File): Promise<CreatePhotoDto & import("./entities/photos.entity").Photo>;
    findAll(): Promise<import("./entities/photos.entity").Photo[]>;
    findCategory(category: Category): Promise<import("./entities/photos.entity").Photo[]>;
    findOne(id: string): Promise<import("./entities/photos.entity").Photo>;
    serveAllUpload(res: any): Promise<any>;
    serveUpload(id: any, res: any): Promise<any>;
    serveCategoryUpload(category: Category, res: any): Promise<any>;
    update(id: string, updatePhotoDto: UpdatePhotoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
