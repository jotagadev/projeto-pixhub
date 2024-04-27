"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosService = void 0;
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const photos_entity_1 = require("./entities/photos.entity");
const typeorm_2 = require("typeorm");
let PhotosService = class PhotosService {
    constructor(photoRepository, userService) {
        this.photoRepository = photoRepository;
        this.userService = userService;
    }
    async create(createPhotoDto) {
        await this.userService.findOne(createPhotoDto.userId);
        return await this.photoRepository.save(createPhotoDto);
    }
    async createAndLink(url, createPhotoDto) {
        await this.userService.findOne(createPhotoDto.userId);
        let photo = await this.photoRepository.save(createPhotoDto);
        await this.photoRepository.update(photo.id, { photoURL: url });
        return photo;
    }
    async findAll() {
        return await this.photoRepository.find();
    }
    async findCategory(category) {
        return await this.photoRepository.find({ where: { category } });
    }
    async findOne(id) {
        try {
            return await this.photoRepository.findOneByOrFail({ id });
        }
        catch (error) {
            throw new common_1.NotFoundException('Foto não encontrada.');
        }
    }
    async setURL(id, url) {
        await this.findOne(id);
        return await this.photoRepository.update(id, { photoURL: url });
    }
    async update(id, updatePhotoDto) {
        await this.findOne(id);
        if (updatePhotoDto.userId) {
            await this.userService.findOne(updatePhotoDto.userId);
        }
        return await this.photoRepository.update(id, updatePhotoDto);
    }
    async remove(id) {
        await this.findOne(id);
        return await this.photoRepository.delete(id);
    }
};
exports.PhotosService = PhotosService;
exports.PhotosService = PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(photos_entity_1.Photo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], PhotosService);
//# sourceMappingURL=photos.service.js.map