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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePhotoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const Category_enum_1 = require("src/common/enum/Category.enum");
class CreatePhotoDto {
}
exports.CreatePhotoDto = CreatePhotoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Título deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Título é obrigatório.' }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Data é obrigatório.' }),
    __metadata("design:type", Date)
], CreatePhotoDto.prototype, "postDate", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Descrição deve ser uma string.' }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Categoria deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Categoria é obrigatório.' }),
    (0, class_validator_1.IsEnum)(Category_enum_1.Category),
    __metadata("design:type", typeof (_a = typeof Category_enum_1.Category !== "undefined" && Category_enum_1.Category) === "function" ? _a : Object)
], CreatePhotoDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Título deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Título é obrigatório.' }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], CreatePhotoDto.prototype, "userId", void 0);
//# sourceMappingURL=create-photo.dto.js.map