"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosModule = void 0;
const common_1 = require("@nestjs/common");
const photos_service_1 = require("./photos.service");
const photos_controller_1 = require("./photos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const photos_entity_1 = require("./entities/photos.entity");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
let PhotosModule = class PhotosModule {
};
exports.PhotosModule = PhotosModule;
exports.PhotosModule = PhotosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([photos_entity_1.Photo]), user_module_1.UserModule],
        controllers: [photos_controller_1.PhotosController],
        providers: [photos_service_1.PhotosService, jwt_1.JwtService],
        exports: [photos_service_1.PhotosService],
    })
], PhotosModule);
//# sourceMappingURL=photos.module.js.map