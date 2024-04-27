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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosController = void 0;
const common_1 = require("@nestjs/common");
const photos_service_1 = require("./photos.service");
const create_photo_dto_1 = require("./dto/create-photo.dto");
const update_photo_dto_1 = require("./dto/update-photo.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const promises_1 = require("fs/promises");
const auth_guard_1 = require("src/common/guard/auth.guard");
const Category_enum_1 = require("src/common/enum/Category.enum");
const path_1 = require("path");
let PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
        this.SERVER_URL = 'http://localhost:3333/';
    }
    async create(createPhotoDto) {
        return await this.photosService.create(createPhotoDto);
    }
    async upload(createPhotoDto, file) {
        console.log('Arquivo postado:', file);
        return await this.photosService.createAndLink(`${this.SERVER_URL}${file.path}`, createPhotoDto);
    }
    async findAll() {
        return await this.photosService.findAll();
    }
    async findCategory(category) {
        return await this.photosService.findCategory(category);
    }
    async findOne(id) {
        return await this.photosService.findOne(+id);
    }
    async serveAllUpload(res) {
        const photos = await this.photosService.findAll();
        const photoPaths = photos.map((photos) => photos.photoURL);
        for (const photoPath of photoPaths) {
            res.sendFile(photoPath, { root: 'uploads' });
        }
    }
    async serveUpload(id, res) {
        res.sendFile(+id, { root: 'uploads' });
    }
    async serveCategoryUpload(category, res) {
        const photos = await this.photosService.findCategory(category);
        const photoPaths = photos.map((photos) => photos.photoURL);
        for (const photoPath of photoPaths) {
            res.sendFile(photoPath, { root: 'uploads' });
        }
    }
    async update(id, updatePhotoDto) {
        return await this.photosService.update(+id, updatePhotoDto);
    }
    async remove(id) {
        const photo = await this.photosService.findOne(+id);
        if (!photo) {
            throw new common_1.NotFoundException('Photo not found');
        }
        try {
            await (0, promises_1.unlink)(photo.photoURL);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro à deletar imagem');
        }
        return await this.photosService.remove(+id);
    }
};
exports.PhotosController = PhotosController;
__decorate([
    (0, common_1.Post)('photo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_photo_dto_1.CreatePhotoDto]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1000000000 }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_photo_dto_1.CreatePhotoDto, Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('photos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('photos/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Category_enum_1.Category !== "undefined" && Category_enum_1.Category) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "findCategory", null);
__decorate([
    (0, common_1.Get)('photo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('upload'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "serveAllUpload", null);
__decorate([
    (0, common_1.Get)('upload/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "serveUpload", null);
__decorate([
    (0, common_1.Get)('upload/:category'),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Category_enum_1.Category !== "undefined" && Category_enum_1.Category) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "serveCategoryUpload", null);
__decorate([
    (0, common_1.Patch)('photo/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_photo_dto_1.UpdatePhotoDto]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('photo/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "remove", null);
exports.PhotosController = PhotosController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosController);
//# sourceMappingURL=photos.controller.js.map